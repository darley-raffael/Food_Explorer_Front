import { Container, ImageDish, NavQuantity } from "./styles";
import { CounterDishes } from "../CounterDishes";
import { Button } from "../Button";
import heartLike from "../../assets/hearth_like_icon.svg";
import comida from "../../assets/Mask_group.png";

export function Card() {
  return (
    <Container className="current-item">
      <img
        className="icon-favorite"
        src={heartLike}
        alt="ícone em forma de coração para dar like"
      />
      <ImageDish src={comida} alt="" />
      <h2>Suco de Maracujá {">"}</h2>
      <div>R$ 49,97</div>

      <NavQuantity>
        <CounterDishes />
        <Button title="incluir" />
      </NavQuantity>
    </Container>
  );
}
