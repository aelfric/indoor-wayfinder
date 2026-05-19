import { useSearchParams } from "react-router-dom";
import { useCallback } from "react";

export function useNavigationSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const startPosition = searchParams.get("position");
  const endPosition = searchParams.get("end");

  const setEnd = useCallback(
    (end: string) =>
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        newParams.set("end", end);
        return newParams;
      }),
    [setSearchParams],
  );

  const setStart = useCallback(
    (start: string) =>
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        newParams.set("position", start);
        return newParams;
      }),
    [setSearchParams],
  );

  return {
    startPosition,
    setStart,
    endPosition,
    setEnd,
  };
}
