import { Container } from "./styles";
import { Icon } from "./styles";

export function Button({ title, loading = false, icon, alt, ...rest }) {


  return (
    <Container className="bg-tomato-100" type="button" disabled={loading} {...rest}>
      {icon && <Icon src={icon} alt={alt} />}
      {loading ? "Carregando" : title}
    </Container>
  )
}