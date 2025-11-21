import React from "react";

interface BorderStyle {
  cor: string;
  espessura: number;
}

type RadiusValue = number | string;

interface FotoArrProps extends BorderStyle {
  raio: RadiusValue;
  src: string;
}

export default function FotoArrendondada(props: FotoArrProps) {
  return <img src={props.src} style={{ borderRadius: props.raio }} />;
}
