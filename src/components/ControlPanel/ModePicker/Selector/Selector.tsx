import { StyledSelector } from "../styles";
import { Props } from "./types";

const Selector = ({ options, setOption }: Props) => {
  const handleSetOption = (e: any) => {
    setOption(e.target.value);
  };
  return (
    <StyledSelector
      defaultValue="Pick mode"
      onChange={handleSetOption}
      name="select">
      <option hidden disabled>
        Pick mode
      </option>
      {options.map(({ name, value }) => (
        <option key={name} value={value}>
          {name}
        </option>
      ))}
    </StyledSelector>
  );
};

export default Selector;
