import styled from "styled-components";

export const StyledCustomButton = styled.button`
  background: ${(props) => {
    switch (props.type) {
      case "action":
        return "#154AE1";
      case "bad-action":
        return "#D55413";
      default:
        return "#22D513";
    }
  }};
  width: 100px;
  height: 25px;
  border-radius: 5px;
  border: none;
  margin: 0px 10px;
  font-weight: bold;
  cursor: pointer;
`;
