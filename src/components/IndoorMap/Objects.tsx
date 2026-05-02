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

export const objects: { x: number, y: number, id: string, entrance: "left"| "right" }[] = [

    {"id": "101", "x": col136, "y": row316, entrance: "right"},
    {"id": "102", "x": col136, "y": row297, entrance: "right"},
    {"id": "103", "x": col136, "y": row277, entrance: "right"},
    {"id": "104", "x": col136, "y": row258, entrance: "right"},
    {"id": "105", "x": col136, "y": row238, entrance: "right"},
    {"id": "106", "x": col136, "y": row219, entrance: "right"},
    {"id": "107", "x": col136, "y": row180, entrance: "right"},
    {"id": "108", "x": col136, "y": row160, entrance: "right"},
    {"id": "109", "x": col136, "y": row141, entrance: "right"},

    {"id": "201", "x": col175, "y": row316, entrance: "left"},
    {"id": "202", "x": col175, "y": row297, entrance: "left"},
    {"id": "203", "x": col175, "y": row238, entrance: "left"},
    {"id": "204", "x": col175, "y": row219, entrance: "left"},
    {"id": "205", "x": col175, "y": row165, entrance: "left"},
    {"id": "206", "x": col175, "y": row145, entrance: "left"},

    {"id": "301", "x": col195, "y": row316, entrance: "right"},
    {"id": "302", "x": col195, "y": row297, entrance: "right"},
    {"id": "303", "x": col195, "y": row238, entrance: "right"},
    {"id": "304", "x": col195, "y": row219, entrance: "right"},
    {"id": "305", "x": col195, "y": row165, entrance: "right"},
    {"id": "306", "x": col195, "y": row145, entrance: "right"},

    {"id": "401", "x": col233, "y": row316, entrance: "left"},
    {"id": "402", "x": col233, "y": row297, entrance: "left"},
    {"id": "403", "x": col233, "y": row277, entrance: "left"},
    {"id": "404", "x": col233, "y": row258, entrance: "left"},
    {"id": "405", "x": col233, "y": row238, entrance: "left"},
    {"id": "406", "x": col233, "y": row219, entrance: "left"},
    {"id": "407", "x": col233, "y": row180, entrance: "left"},
    {"id": "408", "x": col233, "y": row160, entrance: "left"},
    {"id": "409", "x": col233, "y": row141, entrance: "left"},

    {"id": "501", "x": col292, "y": row316, entrance: "left"},
    {"id": "502", "x": col292, "y": row297, entrance: "left"},
    {"id": "503", "x": col292, "y": row238, entrance: "left"},
    {"id": "504", "x": col292, "y": row219, entrance: "left"},
    {"id": "505", "x": col292, "y": row160, entrance: "left"},
    {"id": "506", "x": col292, "y": row141, entrance: "left"},
    {"id": "507", "x": col292, "y": row121, entrance: "left"},

    {"id": "601", "x": col311, "y": row316, entrance: "right"},
    {"id": "602", "x": col311, "y": row297, entrance: "right"},
    {"id": "603", "x": col311, "y": row277, entrance: "right"},
    {"id": "604", "x": col311, "y": row258, entrance: "right"},
    {"id": "605", "x": col311, "y": row238, entrance: "right"},
    {"id": "606", "x": col311, "y": row219, entrance: "right"},
    {"id": "607", "x": col311, "y": row180, entrance: "right"},
    {"id": "608", "x": col311, "y": row160, entrance: "right"},
    {"id": "609", "x": col311, "y": row141, entrance: "right"},
    {"id": "610", "x": col311, "y": row121, entrance: "right"},
    {"id": "611", "x": col311, "y": row102, entrance: "right"},
    {"id": "612", "x": col311, "y": row082, entrance: "right"},
    {"id": "613", "x": col311, "y": row063, entrance: "right"},

    {"id": "701", "x": col350, "y": row316, entrance: "left"},
    {"id": "702", "x": col350, "y": row297, entrance: "left"},
    {"id": "703", "x": col350, "y": row238, entrance: "left"},
    {"id": "704", "x": col350, "y": row219, entrance: "left"},
    {"id": "705", "x": col350, "y": row160, entrance: "left"},
    {"id": "706", "x": col350, "y": row141, entrance: "left"},
    {"id": "707", "x": col350, "y": row121, entrance: "left"},
    {"id": "708", "x": col350, "y": row063, entrance: "left"},

    {"id": "801", "x": col370, "y": row316, entrance: "right"},
    {"id": "802", "x": col370, "y": row297, entrance: "right"},
    {"id": "803", "x": col370, "y": row238, entrance: "right"},
    {"id": "804", "x": col370, "y": row219, entrance: "right"},
    {"id": "805", "x": col370, "y": row160, entrance: "right"},
    {"id": "806", "x": col370, "y": row141, entrance: "right"},
    {"id": "807", "x": col370, "y": row121, entrance: "right"},
    {"id": "808", "x": col370, "y": row063, entrance: "right"},

    {"id": "901", "x": col409, "y": row316, entrance: "left"},
    {"id": "902", "x": col409, "y": row297, entrance: "left"},
    {"id": "903", "x": col409, "y": row277, entrance: "left"},
    {"id": "904", "x": col409, "y": row258, entrance: "left"},
    {"id": "905", "x": col409, "y": row238, entrance: "left"},
    {"id": "906", "x": col409, "y": row219, entrance: "left"},
    {"id": "907", "x": col409, "y": row180, entrance: "left"},
    {"id": "908", "x": col409, "y": row160, entrance: "left"},
    {"id": "909", "x": col409, "y": row141, entrance: "left"},
    {"id": "910", "x": col409, "y": row121, entrance: "left"},
    {"id": "911", "x": col409, "y": row102, entrance: "left"},
    {"id": "912", "x": col409, "y": row082, entrance: "left"},
    {"id": "913", "x": col409, "y": row063, entrance: "left"},

    {"id": "1001", "x": col428, "y": row316, entrance: "right"},
    {"id": "1002", "x": col428, "y": row297, entrance: "right"},
    {"id": "1003", "x": col428, "y": row238, entrance: "right"},
    {"id": "1004", "x": col428, "y": row219, entrance: "right"},
    {"id": "1005", "x": col428, "y": row160, entrance: "right"},
    {"id": "1006", "x": col428, "y": row141, entrance: "right"},
    {"id": "1007", "x": col428, "y": row121, entrance: "right"},
    {"id": "1008", "x": col428, "y": row063, entrance: "right"},

    {"id": "1101", "x": col467, "y": row316, entrance: "left"},
    {"id": "1102", "x": col467, "y": row297, entrance: "left"},
    {"id": "1103", "x": col467, "y": row258, entrance: "left"},
    {"id": "1104", "x": col467, "y": row238, entrance: "left"},
    {"id": "1105", "x": col467, "y": row219, entrance: "left"},
    {"id": "1106", "x": col467, "y": row180, entrance: "left"},
    {"id": "1107", "x": col467, "y": row160, entrance: "left"},
    {"id": "1108", "x": col467, "y": row141, entrance: "left"},
    {"id": "1109", "x": col467, "y": row121, entrance: "left"},
    {"id": "1110", "x": col467, "y": row063, entrance: "left"},

    {"id": "1201", "x": col526, "y": row316, entrance: "left"},
    {"id": "1202", "x": col526, "y": row297, entrance: "left"},
    {"id": "1203", "x": col526, "y": row238, entrance: "left"},
    {"id": "1204", "x": col526, "y": row219, entrance: "left"},
    {"id": "1205", "x": col526, "y": row160, entrance: "left"},
    {"id": "1206", "x": col526, "y": row141, entrance: "left"},
    {"id": "1207", "x": col526, "y": row121, entrance: "left"},
    {"id": "1208", "x": col526, "y": row063, entrance: "left"},
    {"id": "1209", "x": col526, "y": row043, entrance: "left"},

    {"id": "1301", "x": col545, "y": row316, entrance: "right"},
    {"id": "1302", "x": col545, "y": row297, entrance: "right"},
    {"id": "1303", "x": col545, "y": row238, entrance: "right"},
    {"id": "1304", "x": col545, "y": row219, entrance: "right"},
    {"id": "1305", "x": col545, "y": row160, entrance: "right"},
    {"id": "1306", "x": col545, "y": row141, entrance: "right"},
    {"id": "1307", "x": col545, "y": row121, entrance: "right"},
    {"id": "1308", "x": col545, "y": row063, entrance: "right"},
    {"id": "1309", "x": col545, "y": row043, entrance: "right"},

    {"id": "1401", "x": col584, "y": row316, entrance: "left"},
    {"id": "1402", "x": col584, "y": row297, entrance: "left"},
    {"id": "1403", "x": col584, "y": row277, entrance: "left"},
    {"id": "1404", "x": col584, "y": row258, entrance: "left"},
    {"id": "1405", "x": col584, "y": row238, entrance: "left"},
    {"id": "1406", "x": col584, "y": row219, entrance: "left"},
    {"id": "1407", "x": col584, "y": row180, entrance: "left"},
    {"id": "1408", "x": col584, "y": row160, entrance: "left"},
    {"id": "1409", "x": col584, "y": row141, entrance: "left"},
    {"id": "1410", "x": col584, "y": row121, entrance: "left"},
    {"id": "1411", "x": col584, "y": row102, entrance: "left"},
    {"id": "1412", "x": col584, "y": row082, entrance: "left"},
    {"id": "1413", "x": col584, "y": row063, entrance: "left"},
    {"id": "1414", "x": col584, "y": row043, entrance: "left"},

    {"id": "1501", "x": col604, "y": row316, entrance: "right"},
    {"id": "1502", "x": col604, "y": row297, entrance: "right"},
    {"id": "1503", "x": col604, "y": row238, entrance: "right"},
    {"id": "1504", "x": col604, "y": row219, entrance: "right"},
    {"id": "1505", "x": col604, "y": row160, entrance: "right"},
    {"id": "1506", "x": col604, "y": row141, entrance: "right"},
    {"id": "1507", "x": col604, "y": row121, entrance: "right"},
    {"id": "1508", "x": col604, "y": row063, entrance: "right"},
    {"id": "1509", "x": col604, "y": row043, entrance: "right"},

    {"id": "1601", "x": col643, "y": row316, entrance: "left"},
    {"id": "1602", "x": col643, "y": row297, entrance: "left"},
    {"id": "1603", "x": col643, "y": row238, entrance: "left"},
    {"id": "1604", "x": col643, "y": row219, entrance: "left"},
    {"id": "1605", "x": col643, "y": row160, entrance: "left"},
    {"id": "1606", "x": col643, "y": row141, entrance: "left"},
    {"id": "1607", "x": col643, "y": row121, entrance: "left"},
    {"id": "1608", "x": col643, "y": row063, entrance: "left"},
    {"id": "1609", "x": col643, "y": row043, entrance: "left"},

    {"id": "1701", "x": col662, "y": row316, entrance: "right"},
    {"id": "1702", "x": col662, "y": row297, entrance: "right"},
    {"id": "1703", "x": col662, "y": row277, entrance: "right"},
    {"id": "1704", "x": col662, "y": row258, entrance: "right"},
    {"id": "1705", "x": col662, "y": row238, entrance: "right"},
    {"id": "1706", "x": col662, "y": row219, entrance: "right"},
    {"id": "1707", "x": col662, "y": row180, entrance: "right"},
    {"id": "1708", "x": col662, "y": row160, entrance: "right"},
    {"id": "1709", "x": col662, "y": row141, entrance: "right"},
    {"id": "1710", "x": col662, "y": row121, entrance: "right"},
    {"id": "1711", "x": col662, "y": row102, entrance: "right"},
    {"id": "1712", "x": col662, "y": row082, entrance: "right"},
    {"id": "1713", "x": col662, "y": row063, entrance: "right"},
    {"id": "1714", "x": col662, "y": row043, entrance: "right"},

    {"id": "1801", "x": col701, "y": row316,entrance: "left"},
    {"id": "1802", "x": col701, "y": row297,entrance: "left"},
    {"id": "1803", "x": col701, "y": row238,entrance: "left"},
    {"id": "1804", "x": col701, "y": row219,entrance: "left"},
    {"id": "1805", "x": col701, "y": row160,entrance: "left"},
    {"id": "1806", "x": col701, "y": row141,entrance: "left"},
    {"id": "1807", "x": col701, "y": row121,entrance: "left"},
    {"id": "1808", "x": col701, "y": row063,entrance: "left"},
    {"id": "1809", "x": col701, "y": row043,entrance: "left"},

    {"id": "1901", "x": col720, "y": row316, entrance: "right"},
    {"id": "1902", "x": col720, "y": row297, entrance: "right"},
    {"id": "1903", "x": col720, "y": row238, entrance: "right"},
    {"id": "1904", "x": col720, "y": row219, entrance: "right"},
    {"id": "1905", "x": col720, "y": row160, entrance: "right"},
    {"id": "1906", "x": col720, "y": row141, entrance: "right"},
    {"id": "1907", "x": col720, "y": row121, entrance: "right"},
    {"id": "1908", "x": col720, "y": row063, entrance: "right"},
    {"id": "1909", "x": col720, "y": row043, entrance: "right"},

    {"id": "2001", "x": col779, "y": row316, entrance: "right"},
    {"id": "2002", "x": col779, "y": row297, entrance: "right"},
    {"id": "2003", "x": col779, "y": row258, entrance: "right"},
    {"id": "2004", "x": col779, "y": row238, entrance: "right"},
    {"id": "2005", "x": col779, "y": row219, entrance: "right"},
    {"id": "2006", "x": col779, "y": row180, entrance: "right"},
    {"id": "2007", "x": col779, "y": row160, entrance: "right"},
    {"id": "2008", "x": col779, "y": row141, entrance: "right"},
    {"id": "2009", "x": col779, "y": row121, entrance: "right"},
    {"id": "2010", "x": col779, "y": row063, entrance: "right"},
    {"id": "2011", "x": col779, "y": row043, entrance: "right"},

    {"id": "2101", "x": col818, "y": row316, entrance: "left"},
    {"id": "2102", "x": col818, "y": row297, entrance: "left"},
    {"id": "2103", "x": col818, "y": row238, entrance: "left"},
    {"id": "2104", "x": col818, "y": row219, entrance: "left"},
    {"id": "2105", "x": col818, "y": row160, entrance: "left"},
    {"id": "2106", "x": col818, "y": row141, entrance: "left"},
    {"id": "2107", "x": col818, "y": row121, entrance: "left"},
    {"id": "2108", "x": col818, "y": row063, entrance: "left"},

    {"id": "2201", "x": col837, "y": row316, entrance: "right"},
    {"id": "2202", "x": col837, "y": row297, entrance: "right"},
    {"id": "2203", "x": col837, "y": row277, entrance: "right"},
    {"id": "2204", "x": col837, "y": row258, entrance: "right"},
    {"id": "2205", "x": col837, "y": row238, entrance: "right"},
    {"id": "2206", "x": col837, "y": row219, entrance: "right"},
    {"id": "2207", "x": col837, "y": row180, entrance: "right"},
    {"id": "2208", "x": col837, "y": row160, entrance: "right"},
    {"id": "2209", "x": col837, "y": row141, entrance: "right"},
    {"id": "2210", "x": col837, "y": row121, entrance: "right"},
    {"id": "2211", "x": col837, "y": row102, entrance: "right"},
    {"id": "2212", "x": col837, "y": row082, entrance: "right"},
    {"id": "2213", "x": col837, "y": row063, entrance: "right"},

    {"id": "2301", "x": col876, "y": row316, entrance: "left"},
    {"id": "2302", "x": col876, "y": row297, entrance: "left"},
    {"id": "2303", "x": col876, "y": row238, entrance: "left"},
    {"id": "2304", "x": col876, "y": row219, entrance: "left"},
    {"id": "2305", "x": col876, "y": row160, entrance: "left"},
    {"id": "2306", "x": col876, "y": row141, entrance: "left"},
    {"id": "2307", "x": col876, "y": row121, entrance: "left"},
    {"id": "2308", "x": col876, "y": row063, entrance: "left"},

    {"id": "2401", "x": col896, "y": row316, entrance: "right"},
    {"id": "2402", "x": col896, "y": row297, entrance: "right"},
    {"id": "2403", "x": col896, "y": row238, entrance: "right"},
    {"id": "2404", "x": col896, "y": row219, entrance: "right"},
    {"id": "2405", "x": col896, "y": row160, entrance: "right"},
    {"id": "2406", "x": col896, "y": row141, entrance: "right"},
    {"id": "2407", "x": col896, "y": row121, entrance: "right"},
    {"id": "2408", "x": col896, "y": row063, entrance: "right"},
    {"id": "2409", "x": col896, "y": row043, entrance: "right"},

    {"id": "2501", "x": col945, "y": row316,entrance: "right"},
    {"id": "2502", "x": col945, "y": row297,entrance: "right"},
    {"id": "2503", "x": col945, "y": row277,entrance: "right"},
    {"id": "2504", "x": col945, "y": row258,entrance: "right"},
    {"id": "2505", "x": col945, "y": row238,entrance: "right"},
    {"id": "2506", "x": col945, "y": row219,entrance: "right"},
    {"id": "2507", "x": col945, "y": row180,entrance: "right"},
    {"id": "2508", "x": col945, "y": row160,entrance: "right"},
    {"id": "2509", "x": col945, "y": row141,entrance: "right"},
    {"id": "2510", "x": col945, "y": row121,entrance: "right"},
    {"id": "2511", "x": col945, "y": row102,entrance: "right"},
    {"id": "2512", "x": col945, "y": row082,entrance: "right"},
    {"id": "2513", "x": col945, "y": row063,entrance: "right"},
]

function Objects({handleObjectClick, className}: Readonly<ObjectsProps>) {
    return (
        <g id="Objects">
            {objects.map(o => <rect
                    key={o.id}
                    width="19.5"
                    height="19.5"
                    id={o.id}
                    fill="black"
                    opacity={0.2}
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
