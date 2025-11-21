import { useState } from "react";


// Exemplo de formulário não controlado com useRef
export default function PesquisaState() {
    const [pesq, setPesq] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Você pesquisou por: ${pesq}`);
        setPesq('');
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPesq(e.target.value);
    }

    alert("Re-renderizou o formulário!")


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={pesq} onChange={handleChange} />
                <button type="submit">Pesquisar</button>
            </form>
        </>
    )
}