import { createContext, useState } from "react";
import { Cell } from "../hooks/types";
import { AppContextType, AppContextProviderType } from "./types";

export const AppContext = createContext<AppContextType>({
  cells: [],
  setCells: () => {},
  hoveredCells: [],
  setHoveredCells: () => {}
});

export const AppContextProvider = ({
  children
}: AppContextProviderType) => {
  const [cells, setCells] = useState<Cell[]>([]);
  const [hoveredCells, setHoveredCells] = useState<number[]>([]);

  return (
    <AppContext.Provider
      value={{ cells, setCells, hoveredCells, setHoveredCells }}>
      {children}
    </AppContext.Provider>
  );
};
