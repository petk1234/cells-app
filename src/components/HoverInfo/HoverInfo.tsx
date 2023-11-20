import List from "./List/List";
import { HoverInfoWrapper } from "./styles";

const HoverInfo = () => {
  return (
    <HoverInfoWrapper>
      <h3 className="title">Hover squares</h3>
      <List />
    </HoverInfoWrapper>
  );
};

export default HoverInfo;
