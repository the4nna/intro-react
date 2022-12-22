import Container from "./container"

const MyButton = (
    {
        callback, texto
    } = props
) => {
    return <Container onClick={callback}> {texto}</Container>
}

export default MyButton