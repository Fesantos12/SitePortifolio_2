import { ReusableTitle } from "./Reusableitle";
import { BlurFade } from "@/components/ui/blur-fade";
import SistemaMatchPoint from "../assets/ProjetoSistemaMatchPoint.png";

export const Experience = () => {
  return (
    <div
      id="Experience"
      className="w-full h-screen px-6.5 py-9 flex flex-col items-center justify-around md:py-30 md:px-63.75 md:gap-12.5"
    >
      <ReusableTitle text="Experience" />

      <BlurFade className="w-full flex flex-col items-start md:items-center">
        <div className="w-full h-60 bg-gray-400 mb-20 rounded-2xl md:h-100 md:w-[90%]">
          <img
            src={SistemaMatchPoint}
            alt="Sistema MatchPoint"
            className="w-full h-full rounded-2xl"
          />
        </div>
        <div className="md:flex md:flex-row md:gap-6.5 md:items-center">
          <div className="md:flex md:flex-col md:gap-3 md:text-end">
            <div className="font-normal text-[20px]">
              Sistema de Cadastro de Alunos
            </div>

            <div className="w-full h-0.5 bg-black max-md:hidden"></div>

            <div className="font-normal text-[12px]">
              Projeto MatchPoint / Nov 2025 - Dec 2025
            </div>
          </div>

          <div className="w-0.5 h-full bg-black max-md:hidden"></div>

          <ul className="px-10 list-disc mt-4 flex flex-col gap-4">
            <li>
              Back-end built with Node.js and Express to register, edit, delete,
              and list registered students.
            </li>
            <li>
              Database built with PostgreSQL and Docker to store the data of
              registered students.
            </li>
            <li>
              Front-End built with ReactJS to consume the API and display the
              data of registered students.
            </li>
          </ul>
        </div>
      </BlurFade>
    </div>
  );
};
