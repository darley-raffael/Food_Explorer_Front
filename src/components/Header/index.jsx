import { Container, HeaderLogo, Menu, Orders } from "./styles";
import menuOpen from "../../assets/menu-open.svg"
import ordersIcon from "../../assets/order-icon.svg"
import { Logo } from "../Logo";

export function Header({ isAdmin }) {

  return (
    <Container >
      <Menu >
        <img src={menuOpen} alt="ícone de três linhas  horizontais do menu hamburguer" />
      </Menu>

      <HeaderLogo >
        <Logo
          size="2.4rem"
          fontSize="2.2rem"
          justify="center"
          gap=".8rem"
        >
          {
            isAdmin ? <div>admin</div> : null
          }
        </Logo>
      </HeaderLogo>

      <Orders>
        <img src={ordersIcon} alt="ícone de pedidos feitos de prato" />
        <div>0</div>
      </Orders>

    </Container>
  )
}