import Navbar from "./components/NavBar/NavBar";
import Intro from "./components/others/Intro";
import MouseChecker from "./components/others/MouseChecker";
import Skill from "./components/others/skill";

export default function Home() {
  return (
   <section className="">
      <Navbar />
      <MouseChecker />
      <Intro />
      <Skill />
   </section>
  );
}
