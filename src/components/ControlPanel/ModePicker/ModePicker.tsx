import { useContext, useState } from "react";
import { AppContext } from "../../../context/context";
import Selector from "./Selector/Selector";
import useCellsFetch from "../../../hooks/useCellsFetch";
import { ModePickerWrapper, StyledButton } from "./styles";

const ModePicker = () => {
  const { setCells, setHoveredCells } = useContext(AppContext);
  const [selectedMode, setSelectedMode] = useState("");
  const modesData = useCellsFetch();

  const startGame = () => {
    setCells(
      modesData.find((modeData) => modeData.id === selectedMode)
        ?.fields || []
    );
    setHoveredCells([]);
  };

  return (
    <ModePickerWrapper>
      <Selector
        setOption={setSelectedMode}
        options={modesData.map(({ id, name }) => ({
          value: id,
          name
        }))}
      />
      <StyledButton onClick={startGame}>Start</StyledButton>
    </ModePickerWrapper>
  );
};

export default ModePicker;
