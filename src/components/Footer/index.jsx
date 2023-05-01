import { Container } from "./style";
import logoFooter from "../../assets/footer_logo.svg"


export function Footer() {

  return (
    <Container >
      <div>
        <img src={logoFooter} alt="logo footer" />
        <p>food explorer</p>
      </div>
      <p>&copy; 2023 - Todos os direitos reservados</p>
    </Container>
  )
}