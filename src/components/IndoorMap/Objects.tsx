import React from "react";

interface ObjectsProps {
    handleObjectClick: (e: React.MouseEvent<SVGPathElement>) => void;
    className?: string;
}


const row102 = 102.2163595;
const row121 = 121.5954801;
const row141 = 141.2180222;
const row145 = 145.7829285;
const row160 = 160.6264217;
const row165 = 165.2220001;
const row180 = 180.1729599;
const row219 = 219.1054352;
const row238 = 238.5679187;
const row258 = 258.0610657;
const row277 = 277.5383224;
const row297 = 297.1693399;
const row316 = 316.45151;
const row043 = 43.71105042;
const row063 = 63.20036297;
const row082 = 82.66252645;


const col136 = 136.5214606;
const col175 = 175.5499013;
const col195 = 195.1281525;
const col233 = 233.9373355;
const col292 = 292.6276507;
const col311 = 311.9098464;
const col350 = 350.8117065
const col370 = 370.3521233;
const col409 = 409.3030724;
const col428 = 428.759346;
const col467 = 467.7641724;
const col526 = 526.1569485;
const col545 = 545.70794;
const col584 = 584.6268485;
const col604 = 604.1031087;
const col643 = 643.04296875;
const col662 = 662.521977;
const col701 = 701.4926351;
const col720 = 720.9720323;
const col779 = 779.4579856;
const col818 = 818.4230499;
const col837 = 837.8548866;
const col876 = 876.7913055;
const col896 = 896.3338691;
const col945 = 945.1097224;

type CubicleObject = {
  x: number;
  y: number;
  color: string;
  id: string;
  entrance: "left" | "right";
};
export const objects: CubicleObject[] = [

    {"id": "101",color: "black", "x": col136, "y": row316, entrance: "right"},
    {"id": "102",color: "black", "x": col136, "y": row297, entrance: "right"},
    {"id": "103",color: "black", "x": col136, "y": row277, entrance: "right"},
    {"id": "104",color: "black", "x": col136, "y": row258, entrance: "right"},
    {"id": "105",color: "black", "x": col136, "y": row238, entrance: "right"},
    {"id": "106",color: "black", "x": col136, "y": row219, entrance: "right"},
    {"id": "107",color: "black", "x": col136, "y": row180, entrance: "right"},
    {"id": "108",color: "black", "x": col136, "y": row160, entrance: "right"},
    {"id": "109",color: "black", "x": col136, "y": row141, entrance: "right"},

    {"id": "201",color: "black", "x": col175, "y": row316, entrance: "left"},
    {"id": "202",color: "black", "x": col175, "y": row297, entrance: "left"},
    {"id": "203",color: "black", "x": col175, "y": row238, entrance: "left"},
    {"id": "204",color: "black", "x": col175, "y": row219, entrance: "left"},
    {"id": "205",color: "black", "x": col175, "y": row165, entrance: "left"},
    {"id": "206",color: "black", "x": col175, "y": row145, entrance: "left"},

    {"id": "301",color: "black", "x": col195, "y": row316, entrance: "right"},
    {"id": "302",color: "black", "x": col195, "y": row297, entrance: "right"},
    {"id": "303",color: "black", "x": col195, "y": row238, entrance: "right"},
    {"id": "304",color: "black", "x": col195, "y": row219, entrance: "right"},
    {"id": "305",color: "black", "x": col195, "y": row165, entrance: "right"},
    {"id": "306",color: "black", "x": col195, "y": row145, entrance: "right"},

    {"id": "401",color: "black", "x": col233, "y": row316, entrance: "left"},
    {"id": "402",color: "black", "x": col233, "y": row297, entrance: "left"},
    {"id": "403",color: "black", "x": col233, "y": row277, entrance: "left"},
    {"id": "404",color: "black", "x": col233, "y": row258, entrance: "left"},
    {"id": "405",color: "black", "x": col233, "y": row238, entrance: "left"},
    {"id": "406",color: "black", "x": col233, "y": row219, entrance: "left"},
    {"id": "407",color: "black", "x": col233, "y": row180, entrance: "left"},
    {"id": "408",color: "black", "x": col233, "y": row160, entrance: "left"},
    {"id": "409",color: "black", "x": col233, "y": row141, entrance: "left"},

    {"id": "501",color: "black", "x": col292, "y": row316, entrance: "left"},
    {"id": "502",color: "black", "x": col292, "y": row297, entrance: "left"},
    {"id": "503",color: "black", "x": col292, "y": row238, entrance: "left"},
    {"id": "504",color: "black", "x": col292, "y": row219, entrance: "left"},
    {"id": "505",color: "black", "x": col292, "y": row160, entrance: "left"},
    {"id": "506",color: "black", "x": col292, "y": row141, entrance: "left"},
    {"id": "507",color: "black", "x": col292, "y": row121, entrance: "left"},

    {"id": "601",color: "gray", "x": col311, "y": row316, entrance: "right"},
    {"id": "602",color: "gray", "x": col311, "y": row297, entrance: "right"},
    {"id": "603",color: "gray", "x": col311, "y": row277, entrance: "right"},
    {"id": "604",color: "gray", "x": col311, "y": row258, entrance: "right"},
    {"id": "605",color: "gray", "x": col311, "y": row238, entrance: "right"},
    {"id": "606",color: "gray", "x": col311, "y": row219, entrance: "right"},
    {"id": "607",color: "gray", "x": col311, "y": row180, entrance: "right"},
    {"id": "608",color: "gray", "x": col311, "y": row160, entrance: "right"},
    {"id": "609",color: "gray", "x": col311, "y": row141, entrance: "right"},
    {"id": "610",color: "gray", "x": col311, "y": row121, entrance: "right"},
    {"id": "611",color: "gray", "x": col311, "y": row102, entrance: "right"},
    {"id": "612",color: "gray", "x": col311, "y": row082, entrance: "right"},
    {"id": "613",color: "gray", "x": col311, "y": row063, entrance: "right"},

    {"id": "701",color: "gray", "x": col350, "y": row316, entrance: "left"},
    {"id": "702",color: "gray", "x": col350, "y": row297, entrance: "left"},
    {"id": "703",color: "gray", "x": col350, "y": row238, entrance: "left"},
    {"id": "704",color: "gray", "x": col350, "y": row219, entrance: "left"},
    {"id": "705",color: "gray", "x": col350, "y": row160, entrance: "left"},
    {"id": "706",color: "gray", "x": col350, "y": row141, entrance: "left"},
    {"id": "707",color: "gray", "x": col350, "y": row121, entrance: "left"},
    {"id": "708",color: "gray", "x": col350, "y": row063, entrance: "left"},

    {"id": "801",color: "gray", "x": col370, "y": row316, entrance: "right"},
    {"id": "802",color: "gray", "x": col370, "y": row297, entrance: "right"},
    {"id": "803",color: "gray", "x": col370, "y": row238, entrance: "right"},
    {"id": "804",color: "gray", "x": col370, "y": row219, entrance: "right"},
    {"id": "805",color: "gray", "x": col370, "y": row160, entrance: "right"},
    {"id": "806",color: "gray", "x": col370, "y": row141, entrance: "right"},
    {"id": "807",color: "gray", "x": col370, "y": row121, entrance: "right"},
    {"id": "808",color: "gray", "x": col370, "y": row063, entrance: "right"},

    {"id": "901",color: "gray", "x": col409, "y": row316, entrance: "left"},
    {"id": "902",color: "gray", "x": col409, "y": row297, entrance: "left"},
    {"id": "903",color: "gray", "x": col409, "y": row277, entrance: "left"},
    {"id": "904",color: "gray", "x": col409, "y": row258, entrance: "left"},
    {"id": "905",color: "gray", "x": col409, "y": row238, entrance: "left"},
    {"id": "906",color: "gray", "x": col409, "y": row219, entrance: "left"},
    {"id": "907",color: "gray", "x": col409, "y": row180, entrance: "left"},
    {"id": "908",color: "gray", "x": col409, "y": row160, entrance: "left"},
    {"id": "909",color: "gray", "x": col409, "y": row141, entrance: "left"},
    {"id": "910",color: "gray", "x": col409, "y": row121, entrance: "left"},
    {"id": "911",color: "gray", "x": col409, "y": row102, entrance: "left"},
    {"id": "912",color: "gray", "x": col409, "y": row082, entrance: "left"},
    {"id": "913",color: "gray", "x": col409, "y": row063, entrance: "left"},

    {"id": "1001", color: "gray", "x": col428, "y": row316, entrance: "right"},
    {"id": "1002", color: "gray", "x": col428, "y": row297, entrance: "right"},
    {"id": "1003", color: "gray", "x": col428, "y": row238, entrance: "right"},
    {"id": "1004", color: "gray", "x": col428, "y": row219, entrance: "right"},
    {"id": "1005", color: "gray", "x": col428, "y": row160, entrance: "right"},
    {"id": "1006", color: "gray", "x": col428, "y": row141, entrance: "right"},
    {"id": "1007", color: "gray", "x": col428, "y": row121, entrance: "right"},
    {"id": "1008", color: "gray", "x": col428, "y": row063, entrance: "right"},

    {"id": "1101", color: "blue", "x": col467, "y": row316, entrance: "right"},
    {"id": "1102", color: "blue", "x": col467, "y": row297, entrance: "right"},
    {"id": "1103", color: "blue", "x": col467, "y": row258, entrance: "right"},
    {"id": "1104", color: "blue", "x": col467, "y": row238, entrance: "right"},
    {"id": "1105", color: "blue", "x": col467, "y": row219, entrance: "right"},
    {"id": "1106", color: "blue", "x": col467, "y": row180, entrance: "right"},
    {"id": "1107", color: "blue", "x": col467, "y": row160, entrance: "right"},
    {"id": "1108", color: "blue", "x": col467, "y": row141, entrance: "right"},
    {"id": "1109", color: "blue", "x": col467, "y": row121, entrance: "right"},
    {"id": "1110", color: "blue", "x": col467, "y": row063, entrance: "right"},

    {"id": "1201", color: "blue", "x": col526, "y": row316, entrance: "left"},
    {"id": "1202", color: "blue", "x": col526, "y": row297, entrance: "left"},
    {"id": "1203", color: "blue", "x": col526, "y": row238, entrance: "left"},
    {"id": "1204", color: "blue", "x": col526, "y": row219, entrance: "left"},
    {"id": "1205", color: "blue", "x": col526, "y": row160, entrance: "left"},
    {"id": "1206", color: "blue", "x": col526, "y": row141, entrance: "left"},
    {"id": "1207", color: "blue", "x": col526, "y": row121, entrance: "left"},
    {"id": "1208", color: "blue", "x": col526, "y": row063, entrance: "left"},
    {"id": "1209", color: "blue", "x": col526, "y": row043, entrance: "left"},

    {"id": "1301", color: "blue", "x": col545, "y": row316, entrance: "right"},
    {"id": "1302", color: "blue", "x": col545, "y": row297, entrance: "right"},
    {"id": "1303", color: "blue", "x": col545, "y": row238, entrance: "right"},
    {"id": "1304", color: "blue", "x": col545, "y": row219, entrance: "right"},
    {"id": "1305", color: "blue", "x": col545, "y": row160, entrance: "right"},
    {"id": "1306", color: "blue", "x": col545, "y": row141, entrance: "right"},
    {"id": "1307", color: "blue", "x": col545, "y": row121, entrance: "right"},
    {"id": "1308", color: "blue", "x": col545, "y": row063, entrance: "right"},
    {"id": "1309", color: "blue", "x": col545, "y": row043, entrance: "right"},

    {"id": "1401", color: "blue", "x": col584, "y": row316, entrance: "left"},
    {"id": "1402", color: "blue", "x": col584, "y": row297, entrance: "left"},
    {"id": "1403", color: "blue", "x": col584, "y": row277, entrance: "left"},
    {"id": "1404", color: "blue", "x": col584, "y": row258, entrance: "left"},
    {"id": "1405", color: "blue", "x": col584, "y": row238, entrance: "left"},
    {"id": "1406", color: "blue", "x": col584, "y": row219, entrance: "left"},
    {"id": "1407", color: "blue", "x": col584, "y": row180, entrance: "left"},
    {"id": "1408", color: "blue", "x": col584, "y": row160, entrance: "left"},
    {"id": "1409", color: "blue", "x": col584, "y": row141, entrance: "left"},
    {"id": "1410", color: "blue", "x": col584, "y": row121, entrance: "left"},
    {"id": "1411", color: "blue", "x": col584, "y": row102, entrance: "left"},
    {"id": "1412", color: "blue", "x": col584, "y": row082, entrance: "left"},
    {"id": "1413", color: "blue", "x": col584, "y": row063, entrance: "left"},
    {"id": "1414", color: "blue", "x": col584, "y": row043, entrance: "left"},

    {"id": "1501", color: "blue", "x": col604, "y": row316, entrance: "right"},
    {"id": "1502", color: "blue", "x": col604, "y": row297, entrance: "right"},
    {"id": "1503", color: "blue", "x": col604, "y": row238, entrance: "right"},
    {"id": "1504", color: "blue", "x": col604, "y": row219, entrance: "right"},
    {"id": "1505", color: "blue", "x": col604, "y": row160, entrance: "right"},
    {"id": "1506", color: "blue", "x": col604, "y": row141, entrance: "right"},
    {"id": "1507", color: "blue", "x": col604, "y": row121, entrance: "right"},
    {"id": "1508", color: "blue", "x": col604, "y": row063, entrance: "right"},
    {"id": "1509", color: "blue", "x": col604, "y": row043, entrance: "right"},

    {"id": "1601", color: "white", "x": col643, "y": row316, entrance: "left"},
    {"id": "1602", color: "white", "x": col643, "y": row297, entrance: "left"},
    {"id": "1603", color: "white", "x": col643, "y": row238, entrance: "left"},
    {"id": "1604", color: "white", "x": col643, "y": row219, entrance: "left"},
    {"id": "1605", color: "white", "x": col643, "y": row160, entrance: "left"},
    {"id": "1606", color: "white", "x": col643, "y": row141, entrance: "left"},
    {"id": "1607", color: "white", "x": col643, "y": row121, entrance: "left"},
    {"id": "1608", color: "white", "x": col643, "y": row063, entrance: "left"},
    {"id": "1609", color: "white", "x": col643, "y": row043, entrance: "left"},

    {"id": "1701", color: "white", "x": col662, "y": row316, entrance: "right"},
    {"id": "1702", color: "white", "x": col662, "y": row297, entrance: "right"},
    {"id": "1703", color: "white", "x": col662, "y": row277, entrance: "right"},
    {"id": "1704", color: "white", "x": col662, "y": row258, entrance: "right"},
    {"id": "1705", color: "white", "x": col662, "y": row238, entrance: "right"},
    {"id": "1706", color: "white", "x": col662, "y": row219, entrance: "right"},
    {"id": "1707", color: "white", "x": col662, "y": row180, entrance: "right"},
    {"id": "1708", color: "white", "x": col662, "y": row160, entrance: "right"},
    {"id": "1709", color: "white", "x": col662, "y": row141, entrance: "right"},
    {"id": "1710", color: "white", "x": col662, "y": row121, entrance: "right"},
    {"id": "1711", color: "white", "x": col662, "y": row102, entrance: "right"},
    {"id": "1712", color: "white", "x": col662, "y": row082, entrance: "right"},
    {"id": "1713", color: "white", "x": col662, "y": row063, entrance: "right"},
    {"id": "1714", color: "white", "x": col662, "y": row043, entrance: "right"},

    {"id": "1801", color: "white", "x": col701, "y": row316,entrance: "left"},
    {"id": "1802", color: "white", "x": col701, "y": row297,entrance: "left"},
    {"id": "1803", color: "white", "x": col701, "y": row238,entrance: "left"},
    {"id": "1804", color: "white", "x": col701, "y": row219,entrance: "left"},
    {"id": "1805", color: "white", "x": col701, "y": row160,entrance: "left"},
    {"id": "1806", color: "white", "x": col701, "y": row141,entrance: "left"},
    {"id": "1807", color: "white", "x": col701, "y": row121,entrance: "left"},
    {"id": "1808", color: "white", "x": col701, "y": row063,entrance: "left"},
    {"id": "1809", color: "white", "x": col701, "y": row043,entrance: "left"},

    {"id": "1901", color: "white", "x": col720, "y": row316, entrance: "right"},
    {"id": "1902", color: "white", "x": col720, "y": row297, entrance: "right"},
    {"id": "1903", color: "white", "x": col720, "y": row238, entrance: "right"},
    {"id": "1904", color: "white", "x": col720, "y": row219, entrance: "right"},
    {"id": "1905", color: "white", "x": col720, "y": row160, entrance: "right"},
    {"id": "1906", color: "white", "x": col720, "y": row141, entrance: "right"},
    {"id": "1907", color: "white", "x": col720, "y": row121, entrance: "right"},
    {"id": "1908", color: "white", "x": col720, "y": row063, entrance: "right"},
    {"id": "1909", color: "white", "x": col720, "y": row043, entrance: "right"},

    {"id": "2001", color: "white", "x": col779, "y": row316, entrance: "left"},
    {"id": "2002", color: "white", "x": col779, "y": row297, entrance: "left"},
    {"id": "2003", color: "white", "x": col779, "y": row258, entrance: "left"},
    {"id": "2004", color: "white", "x": col779, "y": row238, entrance: "left"},
    {"id": "2005", color: "white", "x": col779, "y": row219, entrance: "left"},
    {"id": "2006", color: "white", "x": col779, "y": row180, entrance: "left"},
    {"id": "2007", color: "white", "x": col779, "y": row160, entrance: "left"},
    {"id": "2008", color: "white", "x": col779, "y": row141, entrance: "left"},
    {"id": "2009", color: "white", "x": col779, "y": row121, entrance: "left"},
    {"id": "2010", color: "white", "x": col779, "y": row063, entrance: "left"},
    {"id": "2011", color: "white", "x": col779, "y": row043, entrance: "left"},

    {"id": "2101", color: "red", "x": col818, "y": row316, entrance: "left"},
    {"id": "2102", color: "red", "x": col818, "y": row297, entrance: "left"},
    {"id": "2103", color: "red", "x": col818, "y": row238, entrance: "left"},
    {"id": "2104", color: "red", "x": col818, "y": row219, entrance: "left"},
    {"id": "2105", color: "red", "x": col818, "y": row160, entrance: "left"},
    {"id": "2106", color: "red", "x": col818, "y": row141, entrance: "left"},
    {"id": "2107", color: "red", "x": col818, "y": row121, entrance: "left"},
    {"id": "2108", color: "red", "x": col818, "y": row063, entrance: "left"},

    {"id": "2201", color: "red", "x": col837, "y": row316, entrance: "right"},
    {"id": "2202", color: "red", "x": col837, "y": row297, entrance: "right"},
    {"id": "2203", color: "red", "x": col837, "y": row277, entrance: "right"},
    {"id": "2204", color: "red", "x": col837, "y": row258, entrance: "right"},
    {"id": "2205", color: "red", "x": col837, "y": row238, entrance: "right"},
    {"id": "2206", color: "red", "x": col837, "y": row219, entrance: "right"},
    {"id": "2207", color: "red", "x": col837, "y": row180, entrance: "right"},
    {"id": "2208", color: "red", "x": col837, "y": row160, entrance: "right"},
    {"id": "2209", color: "red", "x": col837, "y": row141, entrance: "right"},
    {"id": "2210", color: "red", "x": col837, "y": row121, entrance: "right"},
    {"id": "2211", color: "red", "x": col837, "y": row102, entrance: "right"},
    {"id": "2212", color: "red", "x": col837, "y": row082, entrance: "right"},
    {"id": "2213", color: "red", "x": col837, "y": row063, entrance: "right"},

    {"id": "2301", color: "red", "x": col876, "y": row316, entrance: "left"},
    {"id": "2302", color: "red", "x": col876, "y": row297, entrance: "left"},
    {"id": "2303", color: "red", "x": col876, "y": row238, entrance: "left"},
    {"id": "2304", color: "red", "x": col876, "y": row219, entrance: "left"},
    {"id": "2305", color: "red", "x": col876, "y": row160, entrance: "left"},
    {"id": "2306", color: "red", "x": col876, "y": row141, entrance: "left"},
    {"id": "2307", color: "red", "x": col876, "y": row121, entrance: "left"},
    {"id": "2308", color: "red", "x": col876, "y": row063, entrance: "left"},

    {"id": "2401", color: "red", "x": col896, "y": row316, entrance: "right"},
    {"id": "2402", color: "red", "x": col896, "y": row297, entrance: "right"},
    {"id": "2403", color: "red", "x": col896, "y": row238, entrance: "right"},
    {"id": "2404", color: "red", "x": col896, "y": row219, entrance: "right"},
    {"id": "2405", color: "red", "x": col896, "y": row160, entrance: "right"},
    {"id": "2406", color: "red", "x": col896, "y": row141, entrance: "right"},
    {"id": "2407", color: "red", "x": col896, "y": row121, entrance: "right"},
    {"id": "2408", color: "red", "x": col896, "y": row063, entrance: "right"},
    {"id": "2409", color: "red", "x": col896, "y": row043, entrance: "right"},

    {"id": "2501", color: "red", "x": col945, "y": row316,entrance: "left"},
    {"id": "2502", color: "red", "x": col945, "y": row297,entrance: "left"},
    {"id": "2503", color: "red", "x": col945, "y": row277,entrance: "left"},
    {"id": "2504", color: "red", "x": col945, "y": row258,entrance: "left"},
    {"id": "2505", color: "red", "x": col945, "y": row238,entrance: "left"},
    {"id": "2506", color: "red", "x": col945, "y": row219,entrance: "left"},
    {"id": "2507", color: "red", "x": col945, "y": row180,entrance: "left"},
    {"id": "2508", color: "red", "x": col945, "y": row160,entrance: "left"},
    {"id": "2509", color: "red", "x": col945, "y": row141,entrance: "left"},
    {"id": "2510", color: "red", "x": col945, "y": row121,entrance: "left"},
    {"id": "2511", color: "red", "x": col945, "y": row102,entrance: "left"},
    {"id": "2512", color: "red", "x": col945, "y": row082,entrance: "left"},
    {"id": "2513", color: "red", "x": col945, "y": row063,entrance: "left"},
]

function Objects({handleObjectClick, className}: Readonly<ObjectsProps>) {
    return (
        <g id="Objects">
            {objects.map(o => <rect
                    key={o.id}
                    width="19.5"
                    height="19.5"
                    id={o.id}
                    fill={o.color}
                    opacity={0.5}
                    x={o.x}
                    y={o.y}
                    onClick={handleObjectClick}
                />
            )}
            <ellipse
                id="v1"
                cx={1157.655}
                cy={1072.459}
                rx={57}
                ry={57}
                className={`${className} object`}
                onClick={handleObjectClick}
            />
        </g>
    );
}

export default Objects;
