function Button ({
    onClick,
    children,
}: {
    onClick: () => void;
    children : React.ReactNode;
}){
    return <button onClick={onClick}>{children} </button>
}

function PlayButton({movieName}:{movieName: string}){
    function handlePlayClick(){
        alert(`PLaying ${movieName}`)
    }
    return <button onClick={handlePlayClick}>Play "{movieName}" </button>
}

function UploadButton(){
   return <button onClick={() => alert("uploading")}>Upload image</button> 
}

export default function Toolbar(){
    return(
        <div>
            <PlayButton movieName="Conan"/>
            <UploadButton/>
        </div>
    )
}