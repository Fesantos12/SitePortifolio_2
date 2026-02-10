import { Github, SquareArrowOutUpRight } from "lucide-react";

type ReusableCardProps = {
  title: string;
  description: string;
  technologies: string[];
  img: string;
};

export const ReusableCard = ({
  title,
  description,
  technologies,
  img,
}: ReusableCardProps) => {
  return (
    <div className="w-full flex items-start gap-4">
      <div className="mt-2">
        <div className="w-20 h-15 bg-gray-400 rounded-md">
          <img src={img} className="w-full h-full rounded-md"></img>
        </div>
      </div>
      <div className="flex flex-col items-start gap-1.5">
        <div className="text-[20px]">{title}</div>
        <div className="text-sm">{description}</div>
        <div className="w-full h-0.5 bg-black"></div>
        <div className="w-ful flex flex-col gap-2">
          <div>{technologies.join(" ")}</div>
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
    </div>
  );
};
