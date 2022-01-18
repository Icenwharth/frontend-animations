//styles
import { StyledCustomButton } from "./styles";

export default function CustomButton({ text, onClick, type }) {
  return (
    <StyledCustomButton type={type} onClick={onClick}>
      {text}
    </StyledCustomButton>
  );
}
