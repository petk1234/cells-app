import Cells from "./Cells/Cells";
import ModePicker from "./ModePicker/ModePicker";
import { ControlPanelWrapper } from "./styles";

const ControlPanel = () => {
  return (
    <ControlPanelWrapper>
      <ModePicker />
      <Cells />
    </ControlPanelWrapper>
  );
};

export default ControlPanel;
