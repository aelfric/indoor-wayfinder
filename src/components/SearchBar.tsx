import Tooltip from "@/components/ui/Tooltip";
import {
  navigateToObject,
  navigateWithDelay as navigationTestAll,
} from "@/utils/navigationHelper";
import { useContext, useRef, useState } from "react";
import { FiCircle, FiNavigation } from "react-icons/fi";
import { MapDataContext, NavigationContext } from "../pages/Map";
import { MapDataContextType, NavigationContextType } from "../utils/types";

function SearchBar() {
  const { objects } = useContext(MapDataContext) as MapDataContextType;
  const [isInputInvalid, setIsInputInvalid] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { navigation, setNavigation } = useContext(
    NavigationContext,
  ) as NavigationContextType;

  function handleSearch(inputValue: string) {
    const matchingObject = objects.find(
      (obj) => obj.name.toLowerCase() === inputValue.trim().toLowerCase(),
    );
    if (!matchingObject) {
      //? To test the navigation feature
      if (inputValue === "Test") {
        const delay = 500;
        navigationTestAll(objects, 0, delay, navigation, setNavigation);
        return;
      } else {
        setIsInputInvalid(true);
        return;
      }
    }
    navigateToObject(matchingObject.name, navigation, setNavigation);
  }

  return (
    <form
      className="md:w-96 w-full flex flex-row"
      onSubmit={(e) => {
        handleSearch(inputRef.current?.value ?? "");
        e.preventDefault();
      }}
    >
      <div className="flex flex-inline rounded w-full">
        <div className="h-12 w-12 center flex-none rounded-l bg-white text-blue-500 text-[8px] ">
          <div className="w-full h-8 center border-gray-300 border-r">
            <FiCircle />
          </div>
        </div>
        <div className="flex w-full relative">
          <input
            id={"search"}
            className={`h-12 p-4 w-full flex-none text-gray-900 text-sm md:text-md bg-white ${
              isInputInvalid && "input-error"
            } `}
            autoComplete={"false"}
            placeholder="Search"
            ref={inputRef}
            list={"objects"}
            onInput={()=> isInputInvalid ? setIsInputInvalid(false) : null}
          />

          <datalist id={"objects"}>
            {objects.map((o) => (
              <option value={o.name} key={o.name} />
            ))}
          </datalist>
        </div>

        <div className="">
          <Tooltip content="Search" className="bg-blue-500">
            <button
              className="h-12 w-12 flex flex-none center justify-center rounded-r bg-blue-500 text-white"
              type={"submit"}
              aria-label="search"
            >
              <FiNavigation />
            </button>
          </Tooltip>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
