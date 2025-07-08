import { useState } from "react";

const Contador = () => {
  const [contador, aumentar_contador] = useState(0);

  return (
    <>
      <p>Contando en: {contador}</p>
      <button onClick={() => aumentar_contador(contador + 1)}>Click me!</button>
    </>
  );
};

export default Contador;
