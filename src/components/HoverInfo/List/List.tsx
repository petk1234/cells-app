import { useContext } from "react";
import { AppContext } from "../../../context/context";
import ListEl from "../ListEl/ListEl";
import { StyledList } from "./styles";

const List = () => {
  const { hoveredCells } = useContext(AppContext);

  return (
    <StyledList>
      {hoveredCells.map((hoveredCell) => (
        <ListEl key={hoveredCell} orderNumber={hoveredCell} />
      ))}
    </StyledList>
  );
};

export default List;
