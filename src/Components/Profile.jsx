import {FaFacebook, FaTwitter, FaGithub, FaEnvelope} from "react-icons/fa"

export default function () {
    return (
        <div className="max-w-[350px] px-2 py-4 mx-auto mb-[50px]
                flex flex-col items-center gap-[50px]  
                border-slate-500 rounded-2xl  
                md:border-2 md:fixed md:p-[30px] ">
            <div className="w-full flex justify-between items-center">
                <h1 className="inline-block w-1/2 text-xl font-bold">Nischal Bikram Bhandar</h1>
                <p className="text-sm font-bold md:text-md">Web Developer</p>
            </div>
            <img src="profilepic.jpg" alt="Nischal Photo"
                className="m-auto rounded-lg md:w-4/5" />

            <div className="m-auto md:text-xl">
                <p>bikram.bh10@gmail.com</p>
                <p>Base in Kathmandu, Nepal</p>
            </div>
            <div className="w-full m-auto flex justify-evenly">
                <a href="https://www.facebook.com/bikram.nischal58" 
                        className="text-2xl grid place-items-center w-[40px] h-[40px] 
                            border-slate-500 rounded-full border-2 
                            hover:border-green-500 hover:text-green-500">
                        <FaFacebook /></a>
                <a href="https://twitter.com/nischal_bikram" 
                        className="text-2xl grid place-items-center w-[40px] h-[40px]
                            border-slate-500 rounded-full border-2 
                            hover:border-green-500 hover:text-green-500">
                        <FaTwitter /></a>
                <a href ="https://github.com/BikramNischal"
                    className="text-2xl grid place-items-center w-[40px] h-[40px]
                            border-slate-500 rounded-full border-2 
                            hover:border-green-500 hover:text-green-500">
                    <FaGithub /></a>
            </div>
        </div>
    )
}