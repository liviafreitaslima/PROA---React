import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./assets/pages/Layout";
import Home from "./assets/pages/Home";
import Produtos from "./assets/pages/Produtos";
import Servicos from "./assets/pages/Servicos";
import Contatos from "./assets/pages/Contatos";
import NoPage from "./assets/pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="produtos" element={<Produtos />} />
          <Route path="servicos" element={<Servicos />} />
          <Route path="contatos" element={<Contatos />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
