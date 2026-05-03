import { objects } from "@/components/IndoorMap/Objects.tsx";
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { Category, ObjectItem } from "@/utils/types.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const categoryMap: Record<string, Category> = {
  black: {
    id: "black",
    name: "Extemp Cubicle",
  },
  gray: {
    id: "gray",
    name: "Declamation/Oratory Cubicle",
  },
  blue: {
    id: "blue",
    name: "Public Forum Cubicle",
  },
  white: {
    id: "white",
    name: "Lincoln-Douglas Cubicle",
  },
  red: {
    id: "red",
    name: "Policy Debate Cubicle",
  },
};

function main() {
  const data: { objects: ObjectItem[]; categories: Category[] } = {
    objects: objects.map(o => ({
      id: o.id,
      name: o.id,
      categoryId: o.color,
      desc: `${categoryMap[o.color].name} ${o.id}`
    })),
    categories: Object.values(categoryMap),
  };

  // Write to JSON file
  const outputPath = path.join(__dirname, "../src/assets/db.json");
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), "utf-8");

  console.log(`Generated ${data.objects.length} objects and saved to ${outputPath}`);
}

main();
