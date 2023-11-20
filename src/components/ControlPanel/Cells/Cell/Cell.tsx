import { useContext } from "react";
import { StyledCell } from "../styles";
import { AppContext } from "../../../../context/context";
import { Props } from "./types";

const Cell = ({ orderNumber }: Props) => {
  const { hoveredCells, setHoveredCells } = useContext(AppContext);
  const handleCellStatus = () => {
    setHoveredCells(
      hoveredCells.includes(orderNumber)
        ? hoveredCells.filter(
            (hoveredCell) => hoveredCell !== orderNumber
          )
        : [...hoveredCells, orderNumber]
    );
  };
  return (
    <StyledCell
      onMouseEnter={handleCellStatus}
      className={
        hoveredCells.includes(orderNumber) ? "hovered-cell" : ""
      }
    />
  );
};

export default Cell;
