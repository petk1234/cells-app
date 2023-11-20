import { Cell } from "../hooks/types";

export interface AppContextProviderType {
  children: React.ReactNode;
}

export interface AppContextType {
  cells: Cell[];
  setCells: React.Dispatch<React.SetStateAction<Cell[]>>;
  hoveredCells: number[];
  setHoveredCells: React.Dispatch<React.SetStateAction<number[]>>;
}
