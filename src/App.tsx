import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";

export function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <About/>
      <Experience/>
    </>
  )
}

