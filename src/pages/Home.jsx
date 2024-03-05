import Networks from "../components/Networks";
import { CiMenuBurger } from "react-icons/ci";

function Home() {
  return (
    <section className="home">
      <div className="home__info">
        <h1>Davlatov Muhriddin</h1>
        <h3>I am mern stack developer</h3>
        <button>Download Resume</button>
      </div>
      <Networks />
    </section>
  );
}

export default Home;
