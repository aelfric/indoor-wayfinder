import floorPlan from "@/assets/img/floorplan-clean.svg";
import { ReactNode, useRef } from "react";
interface MapBackgroundProps {
  children: ReactNode;
}

function MapBackground({ children }: Readonly<MapBackgroundProps>) {

  const svgRef = useRef<SVGSVGElement>(null);
  
// Can be used to get mouse position in SVG coordinates
// just put it inside the MapBackground component and click somewhere on the map to get the coordinates
// can be very useful for adding new objects or positions
  // const getMousePositionSVG = async (event: MouseEvent) => {
  //   const point = svgRef.current?.createSVGPoint();
  //   if (point) {
  //     point.x = event.clientX;
  //     point.y = event.clientY;
  //     const transformedPoint = point.matrixTransform(
  //       svgRef.current?.getScreenCTM()?.inverse()
  //     );
  //     await navigator.clipboard.writeText(JSON.stringify({id: "", x: transformedPoint.x, y: transformedPoint.y}) + ",");
  //   }
  // };
  // useEffect(() => {
  //   svgRef.current?.addEventListener("click", getMousePositionSVG);
  // }, []);

  return (
    <svg
      //same as mall-floor-plan.svg viewBox
      viewBox="0 0 1044.1178 440.32001"
      className="lg:h-[85vh] lg:w-[75vw] h-[85dvh]"
      ref={svgRef}
    >
      <image id="background" width="100%" height="100%" href={floorPlan} />
      {children}
    </svg>
  );
}

export default MapBackground;
