import {FaBarsStaggered, FaCode, FaMobileScreen} from "react-icons/fa6";


export default function Services(){

    return(
        <div className="p-2">
            <h3 className="w-[150px] p-1 my-3
                    font-bold text-center 
                    border-slate-500 border-2 rounded-full">
                <FaBarsStaggered className="inline-block mr-3" /> SERVICES 
            </h3>
            <h3 className="text-2xl mb-3">My <span className="text-green-500">Specializations</span></h3>
            <div className="p-2 mb-3 border-slate-500 border-2 rounded-xl md:p-4">
                <h3 className=" mb-2
                    flex justify-between items-center
                    text-lg">
                        Front-End Development <FaCode  className="text-green-500"/></h3>
                <p className="text-md text-slate-300">I create Front-End(UI) of a website according to give design.</p>
            </div>
            <div className="p-2 mb-3 border-slate-500 border-2 rounded-xl md:p-4 ">
                <h3 className=" mb-2
                    flex justify-between items-center
                    text-lg group-hover:text-green-500">
                        Responsive Development <FaMobileScreen  className="text-green-500"/></h3>
                <p className="text-md text-slate-300">I can make website look good in both Mobile and Desktop.</p>
            </div>
        </div>
    );
}

