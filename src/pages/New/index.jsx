import {
  Container,
  Content,
  Form,
  InputType,
  SectionInput,
  Select,
  SelectWrapper,
} from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackButton } from "../../components/BackButton";
import { FiUpload, FiChevronDown } from "react-icons/fi";

export function New() {
  return (
    <Container>
      <Header />
      <Content>
        <BackButton small fontSize={"1.6"} />
        <Form>
          <header>
            <h2>Novo Prato</h2>
          </header>

          <SectionInput>
            <div className="title-section">Imagem do Prato</div>

            <label htmlFor="image">
              <FiUpload size={24} />
              <span>Selecione imagem</span>
              <input id="image" type="file" />
            </label>
          </SectionInput>

          <SectionInput>
            <div className="title-section">Nome</div>
            <InputType type="text" placeholder="Ex: Salada Ceasar" />
          </SectionInput>

          <SectionInput>
            <div className="title-section">Categoria</div>
            <SelectWrapper>
              <Select name="select-category">
                <option selected value="valor1">
                  Refeição
                </option>
                <option value="valor2">Sobremesa</option>
                <option value="valor3">Almoço</option>
              </Select>
              <FiChevronDown className="icon-down" size={24} />
            </SelectWrapper>
          </SectionInput>

          <SectionInput>
            <div className="title-section">Preço</div>
            <InputType type="number" placeholder="R$ 00,00" />
          </SectionInput>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}
