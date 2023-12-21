import img1 from "../assets/images/thumbnail-project-1-large.webp";
import img2 from "../assets/images/thumbnail-project-2-large.webp";
import img3 from "../assets/images/thumbnail-project-3-large.webp";
import img4 from "../assets/images/thumbnail-project-4-large.webp";
import img5 from "../assets/images/thumbnail-project-5-large.webp";
import img6 from "../assets/images/thumbnail-project-6-large.webp";

function Main() {
  return (
    <main className="Main" id="Main">
      <section className="Skills">
        <article>
          <h2>HTML</h2>
          <p>4 Years Experience</p>
        </article>
        <article>
          <h2>CSS</h2>
          <p>4 Years Experience</p>
        </article>
        <article>
          <h2>JavaScript</h2>
          <p>4 Years Experience</p>
        </article>
        <article>
          <h2>Accessibility</h2>
          <p>4 Years Experience</p>
        </article>
        <article>
          <h2>React</h2>
          <p>3 Years Experience</p>
        </article>
        <article>
          <h2>Sass</h2>
          <p>3 Years Experience</p>
        </article>
      </section>
      <section className="Projects">
        <article>
          <h1> Projects</h1>
          <button>Contact me</button>
        </article>
        <div className="Projects-Gallery">
          <article>
            <img src={img1} alt="Design portfolio" />
            <h3>Design portfolio</h3>
            <p>HTML CSS</p>
          </article>
          <article>
            <img src={img2} alt="E-learning landing page" />
            <h3>E-learning landing page</h3>
            <p>HTML CSS</p>
          </article>
          <article>
            <img src={img3} alt="Todo web app" />
            <h3>Todo web app</h3>
            <p>HTML CSS JavaScript</p>
          </article>
          <article>
            <img src={img4} alt="Entertainment web app" />
            <h3>Entertainment web app</h3>
            <p>HTML CSS JavaScript</p>
          </article>
          <article>
            <img src={img5} alt="Memory Game" />
            <h3>Memory Game</h3>
            <p>HTML CSS JavaScript</p>
          </article>
          <article>
            <img src={img6} alt="Art gallery showcase" />
            <h3>Art gallery showcase</h3>
            <p>HTML CSS Javascript</p>
          </article>
        </div>
      </section>
    </main>
  );
}
export default Main;
