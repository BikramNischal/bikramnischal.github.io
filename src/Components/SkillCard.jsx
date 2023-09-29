


export default function SkillCard(props) {

    return (
        <div className="w-[125px] h-[150px]  
            flex flex-col justify-center items-center
            border-slate-500 border-2 rounded-full
            hover:text-green-500 hover:border-green-500">
            <props.icon className="text-7xl"/>
            <p>{props.lang}</p>
        </div>
    );
}