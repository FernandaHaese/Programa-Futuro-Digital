import { useRef, useState } from "react";

export default function Pesquisa() {
  const refCor = useRef<HTMLInputElement>(null);
  const [cor, setCor] = useState("rgba(225, 0, 0, 0)");

  const handleMudarCor = (e: any) => {
    e.preventDefault();
    if (refCor.current) {
      setCor(refCor.current.value);
    }

    return (
      <>
        <form onSubmit={handleMudarCor}>
          <input type="color" ref={refCor} />
          <button type="submit">Mudar Cor</button>
        </form>
        <p style={{ color: cor }}>Minha cor é {cor}</p>
      </>
    );
  };
}
