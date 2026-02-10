import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Projects } from "./components/Projects";

export function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
