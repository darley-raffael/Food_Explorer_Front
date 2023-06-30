import { Container, Counter } from "./styles";
import iconDown from "../../assets/down_icon.svg";
import iconUp from "../../assets/up_icon.svg";
import { useState } from "react";

export function CounterDishes() {
  const [count, setCount] = useState(1);

  function handleIncrement() {
    if (count >= 9) return;
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count <= 1) return;
    setCount(count - 1);
  }

  return (
    <Container>
      <Counter>
        <img
          src={iconDown}
          onClick={handleDecrement}
          alt="ícone tirar items carrinho"
        />
      </Counter>
      <p>0{count}</p>
      <Counter>
        <img
          src={iconUp}
          onClick={handleIncrement}
          alt="ícone tirar items carrinho"
        />
      </Counter>
    </Container>
  );
}
