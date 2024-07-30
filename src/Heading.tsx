interface Props {
    size: string,
    color: string,
}

function Heading(props: Props) {
    return (
        <h1
            style={{
                color: props.color, fontSize: props.size
            }}
        >Hello, TypeScript!</h1>
    )
}

export default Heading;