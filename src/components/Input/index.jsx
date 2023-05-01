import { Container } from "./styles";



export function Input({ label, icon: Icon, type, title, ...rest }) {

  return (
    <Container>
      <label htmlFor={label}>
        {title}
      </label>
      <div>

        {
          Icon && <Icon size={20} />
        }
        <input type={type} id={label} {...rest} />
      </div>
    </Container>
  )
}