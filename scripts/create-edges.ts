import { graphData } from "../src/store/graphData";
import { objects } from "../src/components/IndoorMap/Objects";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface VertexData {
  id: string;
  objectName: string | null;
  cx: number;
  cy: number;
}

interface EdgeData {
  id: string;
  from: string;
  to: string;
}

function createVertices(): VertexData[] {
  return objects.flatMap((o) => [
    {
      id: `v${o.id}e`,
      objectName: null,
      cx: o.entrance === "left" ? o.x - 5 : o.x + 25,
      cy: o.y + 10,
    },
    { id: `v${o.id}`, objectName: o.id, cx: o.x + 10, cy: o.y + 10 },
  ]);
}

function createCorridor(): VertexData[] {
  return [
    ...new Set(objects.map((o) => (o.entrance == "left" ? o.x - 5 : o.x + 25))),
  ].map((x, index) => ({
    id: `ent${index + 1}`,
    cx: x,
    cy: 348, // yeah, magic number but based on the real SVG
    objectName: null,
  }));
}

function createEdgesFromVertices(vertices: VertexData[]): EdgeData[] {
  const edges: EdgeData[] = [];
  const edgeSet = new Set<string>();

  // Partition vertices into regular and "e" variants
  const regularVertexMap = new Map<number, VertexData>();
  const eVertexMap = new Map<number, VertexData>();

  vertices.forEach((v) => {
    const isEVariant = v.id.endsWith("e");
    const numStr = v.id.replace(/^v/, "").replace(/e$/, "");
    const num = Number.parseInt(numStr, 10);

    if (isEVariant) {
      eVertexMap.set(num, v);
    } else {
      regularVertexMap.set(num, v);
    }
  });

  const eVertexNumbers = Array.from(eVertexMap.keys()).sort((a, b) => a - b);

  // New rule: Connect regular vertex to corresponding e vertex
  eVertexNumbers.forEach((num) => {
    if (regularVertexMap.has(num)) {
      const edgeId = `e${num}e_to_${num}`;
      edgeSet.add(edgeId);
      edges.push({
        id: edgeId,
        from: `v${num}e`,
        to: `v${num}`,
      });
    }
  });

  // Rule 2: Connect consecutive e-vertices
  for (let i = 0; i < eVertexNumbers.length - 1; i++) {
    const curr = eVertexNumbers[i];
    const next = eVertexNumbers[i + 1];

    if (next === curr + 1) {
      const edgeId = `e${curr}e_to_${next}e`;
      edgeSet.add(edgeId);
      edges.push({
        id: edgeId,
        from: `v${curr}e`,
        to: `v${next}e`,
      });
    }
  }

  // Rule 3: Connect non-consecutive e-vertices with same y and x distance < 20
  for (let i = 0; i < eVertexNumbers.length; i++) {
    for (let j = i + 1; j < eVertexNumbers.length; j++) {
      const num1 = eVertexNumbers[i];
      const num2 = eVertexNumbers[j];

      // Skip if consecutive (already handled)
      if (num2 === num1 + 1) continue;

      const v1 = eVertexMap.get(num1)!;
      const v2 = eVertexMap.get(num2)!;

      if (v1.cy === v2.cy && Math.abs(v1.cx - v2.cx) < 20) {
        const edgeId = `e${num1}e_to_${num2}e`;
        if (!edgeSet.has(edgeId)) {
          edgeSet.add(edgeId);
          edges.push({
            id: edgeId,
            from: `v${num1}e`,
            to: `v${num2}e`,
          });
        }
      }
    }
  }

  return edges;
}

function createCorridorEdges(corridorVertices: VertexData[]) {
  return corridorVertices.flatMap((_c, i) => [
    {
      id: `ent${i}_to_ent${i + 1}`,
      from: `ent${i}`,
      to: `ent${i + 1}`,
    },
    {
      id: `ent${i+1}_to_v${i + 1}01`,
      from: `ent${i+1}`,
      to: `v${i + 1}01e`,
    },
  ]);
}

function main() {
  let corridorVertices = createCorridor();
  const vertices = [
    ...corridorVertices,
    ...createVertices()
  ];
  const edges = [
    ...createCorridorEdges(corridorVertices),
    ...createEdgesFromVertices(graphData.vertices)
  ];

  const graphDataJson = { vertices, edges };
  
  // Write to JSON file
  const outputPath = path.join(__dirname, "../src/assets/generated-edges.json");
  fs.writeFileSync(outputPath, JSON.stringify(graphDataJson, null, 2), "utf-8");
  
  console.log(`Generated ${edges.length} edges and saved to ${outputPath}`);
}

main();
