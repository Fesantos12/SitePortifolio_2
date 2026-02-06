import { BlurFade } from "./ui/blur-fade"

type ReusableTitleProps = {
    text: string;
}

export const ReusableTitle = ({ text }: ReusableTitleProps) => {
    return (
        <BlurFade delay={0.25} inView className="w-full flex items-center justify-center gap-2">
                <div className="w-full h-0.5 bg-black"></div>
                <div className="font-normal text-3xl w-full text-center">{text}</div>
                <div className="w-full h-0.5 bg-black"></div>
        </BlurFade>
    )
}