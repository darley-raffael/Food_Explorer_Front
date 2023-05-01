import { Container, Form } from "./styles";
import { Logo } from "../../components/Logo"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignIn() {

  return (
    <Container >
      <Logo />
      <Form >
        <Input
          label="email"
          type="email"
          title="Email"
          placeholder="exemplo@email.com"
        />
        <Input
          label="password"
          type="password"
          title="Senha"
          placeholder="No mínimo 6 caracteres"
        />
        <Button title="Entrar" />
        <a href="#">Criar uma conta</a>
      </Form>
    </Container>
  )
}