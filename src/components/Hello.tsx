export default function Hello(props: { message: string; name: string }) {
    function handleClick(message: string, name: string) {
        alert(`${message} :::: ${name}`);
    }

    const { message, name } = props;
    return (
        <div>
            <h1>Hello World!</h1>
            <button onClick={() => handleClick(message, name)}>Click me!</button>
        </div>
    );
}
