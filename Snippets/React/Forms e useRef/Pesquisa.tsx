import { useRef } from "react";


// Exemplo de formulário não controlado com useRef
export default function Pesquisa() {
    const refPesq = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (refPesq.current) {
            alert(`Você pesquisou por: ${refPesq.current.value}`);
            refPesq.current.value = '';
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={refPesq} />
                <button type="submit">Pesquisar</button>
            </form>
        </>
    )
}