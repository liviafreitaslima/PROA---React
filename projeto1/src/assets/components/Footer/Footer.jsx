import "./Footer.css";
import { useState } from 'react'

function Footer() {

  const [count, setCount] = useState (0);

  return (
    <>
      <footer className="direitos">
        <p>©NodeShop - Todos direitos reservados.</p>
        <button onClick={() => setCount((count) => count + 1)}>Registre sua Visita! Visitantes: {count}</button>
      </footer>
      
    </>
  );
}

export default Footer;
