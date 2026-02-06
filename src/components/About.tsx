import Img from "@/assets/eu ia.jpeg";
import { BlurFade } from "@/components/ui/blur-fade"

export const About = () => {
    return (
        <>
            <div className="w-full h-screen px-6.5 py-9 bg-gray-300 flex flex-col items-center justify-around">
                <BlurFade delay={0.25} inView className="w-full flex items-center justify-center gap-2">
                    <div className="w-23.25 h-0.5 bg-black"></div>
                    <div className="font-normal text-3xl">About Me</div>
                    <div className="w-23.25 h-0.5 bg-black"></div>
                </BlurFade>
                <BlurFade delay={0.25} inView>
                    My name is Fellipe, I'm 24 years old, I've been studying programming for almost 6 years and I'm 
                    constantly seeking improvement in the field. <br/><br/>

                    I started studying programming in 2020 with a 100-hour HTML and CSS course, followed by a JavaScript 
                    course on Udemy. Then I took a ReactJS course, also on Udemy, but since I wanted to broaden my 
                    knowledge, I took courses on React Native, NextJS, and NodeJS on YouTube. <br/><br/>

                    Currently, I'm looking for a job as a Junior Developer and I'm always studying and practicing to 
                    reach my goal. <br/><br/>
                </BlurFade>
                <BlurFade delay={0.25} inView className="w-37.5 h-37.5 rounded-md bg-gray-400">
                    <img src={Img} alt="Foto de Fellipe" width={150} height={150} className="rounded-md w-37.5 h-37.5"/>
                </BlurFade>
            </div>
        </>
    )
}