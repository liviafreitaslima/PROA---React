import { Outlet, Link } from "react-router-dom";
import "../components/nav/Nav.css";

function Layout() {
  return (
    <>
      <nav className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/servicos">Serviços</Link>
          </li>
          <li>
            <Link to="/contatos">Contatos</Link>
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

      <Outlet />
    </>
  );
}

export default Layout;
