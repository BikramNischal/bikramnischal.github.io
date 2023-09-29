

export default function ProjectDisplay(props) {

    const notLive = <div className="m-0 p-0 absolute bottom-2 flex justify-center items-start">
        <a href={props.codelink} target="_blank"
            className="inline-block w-[100px] h-[25px] mx-1
            bg-slate-100 rounded-full  
            font-bold text-center text-zinc-800
            hover:text-green-500">
            Code</a>

    </div>;

    const Live = <div className="m-0 p-0 absolute bottom-2 flex justify-center items-start">
        <a href={props.codelink} target="_blank"
            className="inline-block w-[100px] h-[25px] mx-1
            bg-slate-100 rounded-full  
            font-bold text-center text-zinc-800
            hover:text-green-500">
            Code</a>

        <a href={props.demolink}  target="_blank"
            className="inline-block w-[100px] h-[25px] mx-1
            bg-slate-100 rounded-full  
            font-bold text-center text-zinc-800
            hover:text-green-500">
            Demo</a>

    </div>
    const buttons = (props.isLive) ? Live : notLive;


    return (
        <div className="p-0 rounded-2xl relative border-4 hover:border-green-500">
            <img src={props.imgsrc} className="rounded-xl m-0 h-full w-full" />
            {buttons}
        </div>
    );
}