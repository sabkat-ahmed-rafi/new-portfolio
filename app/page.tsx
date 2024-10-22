import Navbar from "./components/NavBar/NavBar";
import Intro from "./components/others/Intro";
import MouseChecker from "./components/others/MouseChecker";

export default function Home() {
  return (
   <section className="">
      <Navbar />
      <MouseChecker />
      <Intro />
   </section>
  );
}
