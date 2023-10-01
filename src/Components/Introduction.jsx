import {FaHome} from "react-icons/fa";


export default function(){
    return(
        <div className="p-2">
            <h3 className="w-[200px] my-3 p-1
                    font-bold text-center 
                    border-slate-500 border-2 rounded-full">
                <FaHome className="inline-block mr-3"/>INTRODUCTON
            </h3>
            <p className="my-3 text-3xl font-semibold md:text-5xl">
                Hello from <span className="text-green-500">Nischal</span>, your web developer!
            </p>
            <p className="text-md text-zinc-300">
                I'm a web developer with a passion for creating innovative and user-friendly websites.
            </p>
        </div>
    )
}