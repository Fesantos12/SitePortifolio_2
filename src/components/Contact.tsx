import { ReusableTitle } from "./Reusableitle";
import { Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <div className="w-full flex flex-col items-center px-6.5 pt-9 pb-5 gap-10">
      <ReusableTitle text="Contact" />
      <div className="w-full flex flex-col gap-15 items-center">
        <div className="w-full flex flex-col gap-7.5 items-center">
          <div>
            I am currently seeking employment, and I would appreciate it if you
            could contact me with any available job opportunities.
          </div>
          <a
            href="#"
            className="w-22.75 h-8.75 border-2 border-black rounded-md flex items-center justify-center"
          >
            Say Hello
          </a>
        </div>
        <div className="w-full flex gap-2 justify-center">
          <Github />
          <Linkedin />
        </div>
      </div>
    </div>
  );
};
