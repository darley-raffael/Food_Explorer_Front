import { Container } from "./styles";


export function Button({ title, loading = false, ...rest }) {


  return (
    <Container className="bg-tomato-100" type="button" disabled={loading} {...rest}>
      {loading ? "Carregando" : title}
    </Container>
  )
}