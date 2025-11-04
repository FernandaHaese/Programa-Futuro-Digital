import Card from "./Card";

function Pet({ nome, raca, especie }: any) {
  return (
    <Card>
      <div>
        <b>Nome do pet:</b> {nome}
      </div>
      <div>
        <b>Raça do pet:</b> {raca}
      </div>
      <div>
        <b>Espécie do pet:</b> {especie}
      </div>
    </Card>
  );
}

export default Pet;
