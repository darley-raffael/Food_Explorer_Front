import { Container } from "./styles";


export function Button({ title, loading = false, ...rest }) {


  return (
    <Container color={"#9d2f2f44"} type="button" disabled={loading} {...rest}>
      {loading ? "Carregando" : title}
    </Container>
  )
}