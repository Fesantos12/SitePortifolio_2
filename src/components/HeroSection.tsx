import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { ChevronsDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="w-full h-[calc(100vh-90px)] px-6.5 py-9 flex flex-col items-center justify-center gap-20">
      <AnimatedGridPattern className="h-[calc(100vh-90px)] mt-22.5" />
      <div className="w-full flex flex-col items-center gap-2">
        <TypingAnimation className="text-4xl font-bold md:text-[72px]" loop>
          Hi, I’m Fellipe Santos
        </TypingAnimation>
        <div className="text-[20px] font-light md:text-2xl">
          I'm Full-Stack Developer
        </div>
      </div>
      <ChevronsDown height={32} width={32} />
    </section>
  );
};
