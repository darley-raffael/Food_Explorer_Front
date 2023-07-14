import { Content, ImgDish, Main, OrderDish } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import saladDish from "../../assets/Mask_group.png";
import { CounterDishes } from "../../components/CounterDishes";
import { Button } from "../../components/Button";
import iconOrder from "../../assets/order-icon.svg";
import { Tags } from "../../components/Tags";
import { BackButton } from "../../components/BackButton";

export function Dish() {
  return (
    <>
      <Header />
      <Main>
        <BackButton />
        <ImgDish src={saladDish} />

        <Content>
          <section>
            <h3>Salada Ravanello</h3>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
            </p>

            <div>
              <Tags ingredient="tomate" />
              <Tags ingredient="cebola" />
              <Tags ingredient="pão naan" />
              <Tags ingredient="alface" />
              <Tags ingredient="pepino" />
              <Tags ingredient="rabanete" />
            </div>
          </section>

          <OrderDish>
            <CounterDishes />
            <Button
              icon={iconOrder}
              alt="Ícone de pedido"
              title={`pedir - R$ 25,00`}
            />
          </OrderDish>
        </Content>
      </Main>

      <Footer />
    </>
  );
}
