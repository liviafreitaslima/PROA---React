import "./News.css";

function News() {
  return (
    <>
      <section className="news">
        <h3>Newsletter</h3>
        <p>Receba nossas novidades por email!</p>
        <form action="" method="post">
          <input type="text" placeholder="Digite seu nome" />
          <input type="email" placeholder="Digite seu email" />
          <button>Cadastrar-se</button>
        </form>
      </section>
    </>
  );
}

export default News;
