import { Container, Counter } from "./styles";
import iconDown from "../../assets/down_icon.svg"
import iconUp from "../../assets/up_icon.svg"


export function CounterDishes() {

  return (
    <Container>
      <Counter >
        <img src={iconDown} alt="ícone tirar items carrinho" />
      </Counter>
      <p>01</p>
      <Counter>
        <img src={iconUp} alt="ícone tirar items carrinho" />
      </Counter>
    </Container>
  )
}