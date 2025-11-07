import Card from "./Card";

function Pet({ nome, raca, especie }: any) {
  return (
    <Card>
      <div>
        <b>Nome:</b> {nome}
      </div>
      <div>
        <b>Raça:</b> {raca}
      </div>
      <div>
        <b>Espécie:</b> {especie}
      </div>
    </Card>
  );
}

export default Pet;
