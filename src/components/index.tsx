export default function hello(props: {message: string; name: string}){
    function handleClick(message : string, name: string){
        alert(`${message}  ${name}`)
    }
    const {message, name} = props;
    return (
        <>
        <h1>Tân Nguyễn</h1>
        <button onClick={() => handleClick(message, name)}>Click me</button>
        </>
    );
}
