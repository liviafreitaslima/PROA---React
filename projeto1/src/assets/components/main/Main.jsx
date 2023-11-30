import "./Main.css";

function Main() {
  return (
    <>
      <main className="principal">
        <article className="sobre">
          <h2>Sobre Nós</h2>
          <img
            src="src\assets\components\main\pessoas.png"
            alt="Um casal caucasiano dentro de uma loja de informática, homem com camisa social azul clara e mulher com camisa social azul clara com as mãos em cima do balcão. Logo a frente há um vendedor de roupa social branca apresentando um laptop para ambos enquanto todos sorriem."
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            non. Quos suscipit porro provident recusandae, eius perspiciatis
            corporis voluptates nobis, aliquam at animi assumenda incidunt omnis
            iusto laudantium non. Voluptatem.
          </p>
          <p>
            Ipsam tenetur commodi officiis perferendis recusandae odio impedit
            nam nihil at, consectetur inventore, delectus similique tempore
            harum unde esse? Vitae, totam impedit mollitia assumenda ullam
            soluta esse architecto natus animi?
          </p>
          <p>
            Ad iste sunt, maiores minus nostrum veritatis vel quas deleniti
            accusantium quisquam inventore quasi voluptates, velit voluptate
            officiis similique! Obcaecati, tempora iusto id adipisci ut
            veritatis alias quam architecto repellat.
          </p>
          <p>
            Labore magnam magni ab eaque nulla fugit, nisi quo totam ullam
            dolores ratione vero, sapiente dolorum maiores. Necessitatibus
            perferendis numquam a laboriosam, dolor porro reprehenderit
            temporibus incidunt nulla unde dolores!
          </p>
          <p>
            Distinctio expedita, debitis consequatur est unde numquam soluta ut
            voluptas dolore assumenda fugiat esse ipsum explicabo ullam omnis?
            Aut, reiciendis! Eius eum totam iste reiciendis in tempore aperiam
            ab vero.
          </p>
          <p>
            Nisi quisquam eligendi nihil rem dolores blanditiis esse, temporibus
            qui omnis, rerum veritatis non nulla cupiditate assumenda, nam
            facilis ut id dolore odit? Aut explicabo obcaecati ex non vel ea?
          </p>
          <p>
            Quam autem neque assumenda excepturi, suscipit deleniti alias iure
            quas sit quidem sed quis ex iusto, quisquam provident possimus
            explicabo totam et ut molestiae fugit perferendis dignissimos non.
            At, error.
          </p>
        </article>
        <aside className="onde">
          <h2>Onde Estamos</h2>
          <p> R. Tito, 54 - Vila Romana, São Paulo - SP, 05051-000</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1225692600747!2d-46.69439568941209!3d-23.52809357873437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1692994895092!5m2!1spt-BR!2sbr"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <h2>Contatos</h2>
          <ul>
            <li>
              <i className="fa-solid fa-phone"></i>Telefone:(11) 2888-5500
            </li>
            <li>
              <i className="fa-brands fa-whatsapp"></i>Whatsapp: 11 95123 4567
            </li>
            <li>
              <i className="fa-regular fa-envelope"></i>
              nodeshop.informatica@gmail.com
            </li>
          </ul>
        </aside>
      </main>
    </>
  );
}

export default Main;
