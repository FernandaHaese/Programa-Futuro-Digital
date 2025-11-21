import { useRef, useState } from "react";

export default function Ref() {
    const clickRef = useRef(0);
    const [clickState, setClickState] = useState(0);

    alert("Re-renderizou o componente!");

    const handleClickComState = () => {
        setClickState(clickState + 1);
    }

    const handleClickComRef = () => {
        clickRef.current += 1;
    }

    const handleMostrar = () => {
        alert(`O botão com ref foi clicado ${clickRef.current} vezes e o botão com state foi clicado ${clickState} vezes.`);
    }

    return (
        <>
            <button onClick={handleClickComRef}>Clique aqui (usa Ref)</button>
            <button onClick={handleClickComState}>Clique aqui (usa State)</button>
            <button onClick={handleMostrar}>Mostrar cliques</button>
        </>
    )
}