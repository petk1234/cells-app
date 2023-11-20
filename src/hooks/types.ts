export interface ModeInfo {
  id: string;
  field: number;
  name: string;
}

export interface Cell {
  value: number;
  uuid: string;
}

export interface ModeUpdatedInfo extends ModeInfo {
  fields: Cell[];
}
