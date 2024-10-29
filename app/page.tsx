import { VelocityScroll } from "./components/magicui/scroll-based-velocity";
import Navbar from "./components/NavBar/NavBar";
import Intro from "./components/others/Intro";
import MouseChecker from "./components/others/MouseChecker";
import Skill from "./components/others/Skill";
import Projects from "./components/project/Projects";

export default function Home() {
  return (
   <section className="">
      <Navbar />
      <MouseChecker />
      <Intro />
      <div className="lg:mt-60 md:mt-0 mt-5">
      <VelocityScroll
      text="I used to have a life… then I started coding."
      default_velocity={5}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-blace drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
      </div>
      <Skill />
      <Projects />
   </section>
  );
}
