import { StyledListEl } from "./styles";
import { Props } from "./types";

const ListEl = ({ orderNumber }: Props) => {
  const row = Math.ceil(orderNumber / 5 + 0.01);
  const column =
    (orderNumber + 1) % 5 === 0 ? 5 : (orderNumber + 1) % 5;
  return (
    <StyledListEl>
      <span>row {row}</span>
      <span>column {column}</span>
    </StyledListEl>
  );
};

export default ListEl;
