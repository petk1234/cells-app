import styled from "styled-components";

export const StyledCells = styled.div`
  display: flex;
  max-width: 250px;
  flex-wrap: wrap;
  border-left: 1px solid black;
  .hovered-cell {
    background-color: #2ba9f5;
  }
`;

export const CellsContainer = styled.div`
  overflow-y: auto;
`;

export const StyledCell = styled.div`
  width: 50px;
  height: 50px;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  box-sizing: border-box;

  &:nth-child(-n + 5) {
    border-top: 1px solid black;
  }
`;
