import { useState } from "react";

function API() {
  const [dog, setDog] = useState("");

  const fetchDog = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    setDog(data.message || "");
  };

  return (
    <>
      <div>
        <h3>Display single random image from all dogs collection!</h3>
        <button onClick={fetchDog}>Fetch!</button>
        <br /> <br />
        <img src={dog} alt="Imagem" />
      </div>
    </>
  );
}

export default API;
