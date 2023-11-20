interface Option {
  value: string;
  name: string;
}

export interface Props {
  options: Option[];
  setOption: React.Dispatch<React.SetStateAction<Option["value"]>>;
}
