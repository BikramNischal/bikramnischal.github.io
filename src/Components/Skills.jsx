import {GiJuggler} from "react-icons/gi";
import {BiLogoHtml5, BiLogoCss3,BiLogoTypescript,BiLogoJavascript, BiLogoReact,BiLogoPython, BiLogoCPlusPlus} from "react-icons/bi";
import SkillCard from "./SkillCard";

export default function Skills(){

    return(
        <div className="p-2">
            <h3 className="w-[150px] p-1 my-3 mb-5
                    font-bold text-center 
                    border-slate-500 border-2 rounded-full">
                <GiJuggler className="inline-block mr-3 text-slate-500" /> MY SKILLS 
            </h3>
            <div className="flex gap-2 justify-evenly flex-wrap">
                <SkillCard icon={BiLogoHtml5} lang="HTML" />
                <SkillCard icon={BiLogoCss3} lang="CSS" /> 
                <SkillCard icon={BiLogoJavascript} lang="JavaScript" />
                <SkillCard icon={BiLogoTypescript} lang="TypeScript" /> 
                <SkillCard icon={BiLogoReact} lang="React" />
                <SkillCard icon={BiLogoPython} lang="Python" />
                <SkillCard icon={BiLogoCPlusPlus} lang="C++" />
            </div>
        </div>
    );
}