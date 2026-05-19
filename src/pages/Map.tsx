import IndoorMapWrapper from "@/components/IndoorMapWrapper";
import MobileRouteDetails from "@/components/MobileRouteDetails";
import Toolbar from "@/components/Toolbar";
import React, { createContext, useEffect, useState } from "react";
import { isDesktop, isMobile } from "react-device-detect";
import {
  Category,
  MapDataContextType,
  NavigationContextType,
  ObjectItem,
} from "../utils/types";
import Sidebar from "@/components/Sidebar";
import db from "@/assets/db.json";
import { navigateToObject } from "@/utils/navigationHelper.ts";
import { useNavigationSearchParams } from "../hooks/useNavigationSearchParams";

export const NavigationContext = createContext<NavigationContextType | null>(
  null,
);
export const MapDataContext = createContext<MapDataContextType | null>(null);

function Map() {
  const {startPosition, endPosition} = useNavigationSearchParams();
  const DEFAULT_POSITION = "ent36";
  const navigation = React.useMemo(
    () => ({
      start: startPosition ?? DEFAULT_POSITION,
      end: endPosition ?? "",
    }),
    [startPosition, endPosition],
  );

  useEffect(() => {
    if (endPosition) {
      navigateToObject(endPosition, navigation);
    }
  }, [navigation]);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const navigationValue: NavigationContextType = React.useMemo(
    () => ({
      navigation,
      isEditMode,
      setIsEditMode,
    }),
    [navigation, isEditMode, setIsEditMode],
  );
  const categories: Category[] = db.categories;
  const objects = (): ObjectItem[] => {
    const objectsData: ObjectItem[] = db.objects;
    // Add categoryName to each object
    objectsData.forEach((obj) => {
      obj.categoryName = categories.find(
        (cat) => cat.id === obj.categoryId,
      )?.name;
    });
    return objectsData;
  };

  const mapData = React.useMemo(
    () => ({ objects: objects(), categories }),
    [objects, categories],
  );
  return (
    <MapDataContext.Provider value={mapData}>
      <NavigationContext.Provider value={navigationValue}>
        <div className="flex bg-gray-100 text-gray-800 relative overflow-hidden w-full h-screen">
          {isDesktop && <Sidebar />}
          <main
            className={`flex w-full ${isDesktop && "-ml-96"} justify-center grow flex-col md:p-10 p-2 transition-all duration-150 ease-in lg:ml-0`}
          >
            <Toolbar />
            <div className="center w-full h-full">
              <IndoorMapWrapper />
            </div>
          </main>
          {navigation.end && isMobile && <MobileRouteDetails />}
        </div>
      </NavigationContext.Provider>
    </MapDataContext.Provider>
  );
}

export default Map;
