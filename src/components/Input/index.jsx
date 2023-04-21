import { Container } from "./styles";


export function Input({ label, type, title, ...rest }) {

  return (
    <Container>
      <label htmlFor={label}>
        {title}
      </label>
      <input type={type} id={label} {...rest} />
    </Container>
  )
}