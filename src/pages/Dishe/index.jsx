import { Content, ImgDishe, Main, OrderDishe } from "./styles";
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer";
import setLeft from "../../assets/set_left.svg"
import saladDishe from "../../assets/Mask_group.png"
import { CounterDishes } from "../../components/CounterDishes";
import { Button } from "../../components/Button"
import iconOrder from "../../assets/order-icon.svg"
import { Tags } from "../../components/Tags";




export function Dishe() {

  return (
    <>
      <Header />
      <Main>
        <a href="#">
          <img src={setLeft} alt="seta navegação esquerda" />
          <span>voltar</span>
        </a>

        <ImgDishe
          src={saladDishe}
        />

        <Content >
          <section>

            <h3>Salada Ravanello</h3>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

            <div>
              <Tags ingredient="tomate" />
              <Tags ingredient="cebola" />
              <Tags ingredient="pão naan" />
              <Tags ingredient="alface" />
              <Tags ingredient="pepino" />
              <Tags ingredient="rabanete" />

            </div>
          </section>

          <OrderDishe>
            <CounterDishes />
            <Button
              icon={iconOrder}
              alt="Ícone de pedido"
              title={`pedir - R$ 25,00`}
            />
          </OrderDishe>
        </Content>
      </Main>

      <Footer />
    </>
  )
}