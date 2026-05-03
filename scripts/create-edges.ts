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
  // every object gets a vertex at its center and one at its entrance
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

function createCorridor(prefix: string, cy: number): VertexData[] {
  // create points at a specific Y coordinate lined up with the entrance to each
  // cubicle
  const corridorXs = [
    ...new Set(objects.map((o) => (o.entrance == "left" ? o.x - 5 : o.x + 25))),
  ];

  const MAX_CORRIDOR_SEGMENT = 18;
  const expandedXs: number[] = [];

  for (let i = 0; i < corridorXs.length; i++) {
    const x = corridorXs[i];
    if (i > 0) {
      const prevX = corridorXs[i - 1];
      const gap = x - prevX;
      if (gap > MAX_CORRIDOR_SEGMENT) {
        const numSegments = Math.ceil(gap / MAX_CORRIDOR_SEGMENT);
        const segmentSize = gap / numSegments;
        for (let j = 1; j < numSegments; j++) {
          expandedXs.push(prevX + j * segmentSize);
        }
      }
    }
    expandedXs.push(x);
  }

  return expandedXs.map((x, index) => ({
    id: `${prefix}${index + 1}`,
    cx: x,
    cy: cy,
    objectName: null,
  }));
}

function createEdge(
  edges: EdgeData[],
  edgeSet: Set<string>,
  from: string,
  to: string
) {
  const [first, second] = from < to ? [from, to] : [to, from];
  const id = `${first}_to_${second}`;
  if (!edgeSet.has(id)) {
    edgeSet.add(id);
    edges.push({ id, from: first, to: second });
  }
}

function groupByBand(
  vertices: VertexData[],
  getCoordinate: (vertex: VertexData) => number,
  tolerance: number
): VertexData[][] {
  const sorted = [...vertices].sort((a, b) => getCoordinate(a) - getCoordinate(b));
  const groups: { coordinate: number; items: VertexData[] }[] = [];

  for (const vertex of sorted) {
    const coordinate = getCoordinate(vertex);
    const group = groups.find((g) => Math.abs(g.coordinate - coordinate) <= tolerance);
    if (group) {
      group.items.push(vertex);
    } else {
      groups.push({ coordinate: coordinate, items: [vertex] });
    }
  }

  return groups.map((group) => group.items);
}

function connectHorizontalEdges(
  vertices: VertexData[],
  edgeSet: Set<string>,
  edges: EdgeData[]
) {
  const HORIZONTAL_Y_BUFFER = 10;
  const HORIZONTAL_MAX_GAP = 18;
  const rows = groupByBand(vertices, (vertex) => vertex.cy, HORIZONTAL_Y_BUFFER);

  for (const row of rows) {
    const sorted = [...row].sort((a, b) => a.cx - b.cx);
    for (let i = 0; i < sorted.length - 1; i++) {
      const current = sorted[i];
      const next = sorted[i + 1];
      if (Math.abs(next.cx - current.cx) <= HORIZONTAL_MAX_GAP) {
        createEdge(edges, edgeSet, current.id, next.id);
      }
    }
  }
}

function connectVerticalEdges(
  vertices: VertexData[],
  edgeSet: Set<string>,
  edges: EdgeData[]
) {
  const VERTICAL_X_BUFFER = 0;
  const VERTICAL_MAX_GAP = 60;
  let filteredVertices = vertices.filter(v => v.objectName === null);
  const columns = groupByBand(filteredVertices, (vertex) => vertex.cx, VERTICAL_X_BUFFER);

  for (const column of columns) {
    const sorted = [...column].sort((a, b) => a.cy - b.cy);
    for (let i = 0; i < sorted.length - 1; i++) {
      const current = sorted[i];
      const next = sorted[i + 1];
      if (Math.abs(next.cy - current.cy) <= VERTICAL_MAX_GAP) {
        createEdge(edges, edgeSet, current.id, next.id);
      }
    }
  }
}

function createEdgesFromVertices(vertices: VertexData[]): EdgeData[] {
  const edges: EdgeData[] = [];
  const edgeSet = new Set<string>();

  connectHorizontalEdges(vertices, edgeSet, edges);
  connectVerticalEdges(vertices, edgeSet, edges);

  return edges;
}
function main() {
  let corridorVertices1 = createCorridor(`ent`, 348);
  let corridorVertices2 = createCorridor(`mid`, 210);
  const vertices = [
    ...corridorVertices1,
    ...corridorVertices2,
    ...createVertices()
  ];
  const edges = [
    ...createEdgesFromVertices(vertices)
  ];

  const graphDataJson = { vertices, edges };
  
  // Write to JSON file
  const outputPath = path.join(__dirname, "../src/assets/generated-edges.json");
  fs.writeFileSync(outputPath, JSON.stringify(graphDataJson, null, 2), "utf-8");
  
  console.log(`Generated ${edges.length} edges and saved to ${outputPath}`);
}

main();
