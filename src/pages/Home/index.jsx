import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import dishesIcon from "../../assets/dishes_logo.png"
import { Main } from "./styles";


export function Home() {

  return (
    <>
      <Header />
      <Main >
        <div className="content">
          <img src={dishesIcon} alt="ícones de vários pratos" />
          <div className="content-box">
            <h4>Sabores inigaláveis</h4>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>

      </Main>

      <Footer />
    </>
  )
}