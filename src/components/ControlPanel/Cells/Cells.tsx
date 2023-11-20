import { useContext } from "react";
import { AppContext } from "../../../context/context";
import Cell from "./Cell/Cell";
import { CellsContainer, StyledCells } from "./styles";

const Cells = () => {
  const { cells } = useContext(AppContext);
  if (!cells.length) return null;

  return (
    <CellsContainer>
      <StyledCells>
        {cells.map(({ value, uuid }) => (
          <Cell key={uuid} orderNumber={value} />
        ))}
      </StyledCells>
    </CellsContainer>
  );
};

export default Cells;
