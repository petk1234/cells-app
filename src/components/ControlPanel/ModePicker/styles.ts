import styled from "styled-components";

export const ModePickerWrapper = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: end;
  width: 270px;
`;

export const StyledSelector = styled.select`
  height: 35px;
  width: 150px;
  outline: none;
`;

export const StyledButton = styled.button`
  height: 35px;
  background-color: #0075d8;
  color: #fff;
  display: flex;
  align-items: center;
  outline: none !important;
  box-shadow: none !important;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset !important;
  }
`;
