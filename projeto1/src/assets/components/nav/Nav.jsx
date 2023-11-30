import "./Nav.css";

function Nav() {
  return (
    <>
      <nav className="menu">
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="produtos.html">Produtos</a>
          </li>
          <li>
            <a href="servicos.html">Serviços</a>
          </li>
          <li>
            <a href="contatos.html">Contatos</a>
          </li>
        </ul>
        <div className="social-icons">
          <a href="https://">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://">
            <i className="fa-brands fa-google"></i>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Nav;
