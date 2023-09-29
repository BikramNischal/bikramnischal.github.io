import About from "./About"
import Education from "./Education"
import Introduction from "./Introduction" 
import Projects from "./Projects"
import Services from "./Services"
import Skills from "./Skills"

export default function(){
    return(
        <div className="md:ml-[390px] lg:ml-[500px] lg:max-w-[600px]">
            <Introduction />
            <About />
            <Education />
            <Services />
            <Skills />
            <Projects />
        </div>
    )
}