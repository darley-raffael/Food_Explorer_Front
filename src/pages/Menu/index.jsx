import { Divider, Main, MenuHeader } from "./styles";
import menuClose from "../../assets/menu_close.svg"
import { FiSearch } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Footer } from "../../components/Footer"


export function Menu() {


  return (
    <>
      <MenuHeader >
        <div>
          <a href="#">
            <img src={menuClose} alt="icone menu fechar" />
          </a>
          <span>Menu</span>
        </div>
      </MenuHeader>

      <Main >
        <Input
          icon={FiSearch}
          placeholder="Busque por pratos ou ingredientes"
        />

        <ul>
          <li><a href="#">Meus Favoritos</a></li>
          <Divider />
          <li><a href="#">Sair</a></li>
          <Divider />
        </ul>

      </Main>
      <Footer />
    </>
  )
}