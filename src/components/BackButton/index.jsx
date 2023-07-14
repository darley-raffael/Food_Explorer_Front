import setLeft from "../../assets/set_left.svg";
import setLeftLarge from "../../assets/set_left_large.svg";
import { Container } from "./styles";

export function BackButton({ href, small = false, fontSize }) {
  return (
    <Container href={href} fontSize={fontSize}>
      <img src={small ? setLeft : setLeftLarge} alt="seta navegação esquerda" />
      <span>voltar</span>
    </Container>
  );
}
