const MyComponent = (
    { children, azul = "blue" } = props
) => {
    return <h2 style={{ color: azul }}> {children} </h2>
}

export default MyComponent