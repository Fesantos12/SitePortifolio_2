import { ReusableTitle } from "./Reusableitle";
import { Github } from "lucide-react";
import { SquareArrowOutUpRight } from "lucide-react";
import { ReusableCard } from "./ReusableCard";
import LoginNature from "../assets/LoginNature.jpeg";
import NetflixCLone from "../assets/NetflixProject.jpeg";
import { BlurFade } from "@/components/ui/blur-fade";
import SistemaMatchPoint from "../assets/ProjetoSistemaMatchPoint.png";

export const Projects = () => {
  return (
    <div
      id="Projects"
      className="w-full h-screen px-6.5 py-9 flex flex-col items-center justify-between bg-gray-300 md:py-30 md:px-63.75 md:gap-12.5"
    >
      <ReusableTitle text="Projects" />
      <BlurFade className="w-full flex flex-col items-center md:flex-row md:gap-5">
        <div className="w-full h-56 bg-gray-400 rounded-2xl md:w-150 md:h-70">
          <img
            src={SistemaMatchPoint}
            alt="Sistema MatchPoint"
            className="w-full h-full rounded-2xl"
          />
        </div>
        <div className="w-full flex flex-col items-start gap-4 mt-4 md:flex-1">
          <div className="text-[20px] md:text-3xl">
            Sistema de Cadastro de Alunos MatchPoint
          </div>
          <div className="text-sm">
            A student registration project built with ReactJS and a Node JS
            back-end, using a Postgres database and Docker.
          </div>
          <div className="w-full h-0.5 bg-black"></div>
          <div className="w-ful flex flex-col gap-2">
            <div>HTML CSS JS</div>
            <div className="w-full flex">
              <a href="#">
                <Github className="w-5 h-5" />
              </a>
              <a href="#">
                <SquareArrowOutUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </BlurFade>

      <BlurFade className="w-full flex flex-col gap-10 md:justify-center">
        <ReusableTitle text="Other Projects" />
        <div className="flex flex-col gap-6.25 md:flex-row md:justify-between">
          <ReusableCard
            img={LoginNature}
            title="LoginNature"
            description="A simple landing page made with React JS, Tailwind CSS, and TypeScript."
            technologies={["ReactJS", "Tailwind", "TypeScript"]}
          />
          <ReusableCard
            img={NetflixCLone}
            title="Netflix Clone"
            description="A Netflix clone built with React, TypeScript, and Tailwind CSS."
            technologies={["React", "TypeScript", "Tailwind"]}
          />
        </div>
      </BlurFade>
    </div>
  );
};
