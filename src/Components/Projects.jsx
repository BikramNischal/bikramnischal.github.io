import { BsFillGridFill } from "react-icons/bs";
import ProjectDisplay from "./ProjectDisplay";


export default function Projects() {

    return (
        <div className="p-2">
            <h3 className="w-[150px] my-3 mb-5 p-1
                    font-bold text-center 
                    border-slate-500 border-2 rounded-full">
                <BsFillGridFill className="inline-block mr-3" /> PROJECTS
            </h3>
            <div className="flex flex-wrap gap-2 justify-evenly items-center md:gap-[20px]">
                <div>
                    <ProjectDisplay isLive={true}
                        imgsrc="weather-app.png" 
                        codelink="https://github.com/BikramNischal/weather-app" 
                        demolink="https://weather-app-by-bikramnischal.netlify.app/" />
                    <p className="text-xs font-bold text-slate-300 hover:underline md:text-xl">Weather App</p>
                </div>
                <div>
                    <ProjectDisplay isLive={false}
                        imgsrc="randomwalk.png" 
                        codelink="https://github.com/BikramNischal/1000steps" />
                    <p className="text-xs font-bold text-slate-300 hover:underline md:text-xl">Random Walk Graph</p>
                </div>
                <div>
                    <ProjectDisplay isLive={false}
                        imgsrc="news-home-page.png" 
                        codelink="https://github.com/BikramNischal/news-homepage" />
                    <p className="text-xs font-bold text-slate-300 hover:underline md:text-xl">News Website Home Page</p>
                </div>
            </div>
        </div>
    );
}