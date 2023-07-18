import { Container, Form } from "./styles";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  return (
    <Container>
      <Logo />
      <Form>
        <div className="title-signup">Crie Sua Conta</div>

        <Input
          label="nome"
          type="text"
          title="Seu Nome"
          placeholder="Exemplo: Maria Da Silva"
        />
        <Input
          label="email"
          type="email"
          title="Email"
          placeholder="Exemplo: exemplo@email.com"
        />
        <Input
          label="password"
          type="password"
          title="Senha"
          placeholder="No mínimo 6 caracteres"
        />
        <Button title="Entrar" />
        <a href="#">Já tenho uma conta</a>
      </Form>
    </Container>
  );
}
