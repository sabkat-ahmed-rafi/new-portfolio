import Education from "./components/Education/Education";
import EmailBox from "./components/EmailBox/EmailBox";
import Footer from "./components/Footer/Footer";
import { VelocityScroll } from "./components/magicui/scroll-based-velocity";
import Navbar from "./components/NavBar/NavBar";
import Intro from "./components/others/Intro";
import Skill from "./components/others/Skill";
import Projects from "./components/project/Projects";

export default function Home() {
  return (
   <section>
      <Navbar />
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
      <Education/>
      <EmailBox />
      <Footer />
   </section>
  );
}
