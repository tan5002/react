// component Button
function Button({
    onClick,
    children,
}: {
    onClick: () => void;
    children: React.ReactNode;
}) {
    return <button onClick={onClick}>{children}</button>;
}

// component PlayButton sử dụng Button
function PlayButton({ movieName }: { movieName: string }) {
    function handlePlayClick() {
        alert(`Playing ${movieName}!`);
    }

    return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;
}

// component UploadButton sử dụng Button
function UploadButton() {
    return <Button onClick={() => alert("Uploading!")}>Upload Image</Button>;
}
export default function Toolbar() {
    return (
        <div>
            <PlayButton movieName="Pi's Life" />
            <UploadButton />
        </div>
    );
}
