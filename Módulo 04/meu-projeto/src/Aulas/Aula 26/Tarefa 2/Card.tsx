function Card({ children }: { children: any }) {
  return (
    <div style={{ border: "solid black 2px", borderRadius: "2px" }}>
      {children}
    </div>
  );
}

export default Card;
