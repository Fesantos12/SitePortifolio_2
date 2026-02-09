import { ReusableTitle } from "./Reusableitle"
import { Github } from 'lucide-react';
import { SquareArrowOutUpRight } from 'lucide-react';
import { ReusableCard } from "./ReusableCard";
import LoginNature from '../assets/LoginNature.jpeg'
import NetflixCLone from '../assets/NetflixProject.jpeg'

export const Projects = () => {
    return (
        <div className="w-full h-screen px-6.5 py-9 flex flex-col items-center justify-between bg-gray-300">
            <ReusableTitle text="Projects"/>
            <div className="w-full flex flex-col items-center">
                <div className="w-full h-56 bg-gray-400"></div>
                 <div className="w-full flex flex-col items-start gap-4 mt-4">
                <div className="text-[20px]">Project Name</div>
                <div className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum 
                    felis vivamus facilisis ligula
                </div>
                <div className="w-full h-0.5 bg-black"></div>
                <div className="w-ful flex flex-col gap-2">
                    <div>HTML CSS JS</div>
                    <div className="w-full flex">
                        <a href="#"><Github className="w-5 h-5"/></a>
                        <a href="#"><SquareArrowOutUpRight className="w-5 h-5"/></a>
                    </div>
                </div>
                </div>
            </div>

            <div className="w-full flex flex-col gap-10">
                <ReusableTitle text="Other Projects"/>
                <ReusableCard img={LoginNature} title="LoginNature" description="A simple landing page made with React JS, Tailwind CSS, and TypeScript." technologies={["ReactJS", "Tailwind", "TypeScript"]}/>
                <ReusableCard img={NetflixCLone} title="Netflix Clone" description="A Netflix clone built with React, TypeScript, and Tailwind CSS." technologies={["React", "TypeScript", "Tailwind"]}/>
            </div>
           
        </div>
    )
}