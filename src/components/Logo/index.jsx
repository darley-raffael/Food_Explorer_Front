import { Container } from "./styles";
import iconLogo from "../../assets/iconLogo.svg";

export function Logo({ size, fontSize, justify, children, ...rest }) {
  return (
    <Container size={size} fontSize={fontSize} justify={justify} {...rest}>
      <img src={iconLogo} alt="logo da Food Explorer" />
      <span>food explorer</span>
      {children}
    </Container>
  );
}
