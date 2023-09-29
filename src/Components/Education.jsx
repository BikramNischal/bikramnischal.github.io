import { FaGraduationCap } from "react-icons/fa";
import { Chrono } from "react-chrono";

export default function () {
    const items = [
        {
            title: "2019-present",
            cardTitle: "BSc CSIT Running (7th sem)",
            cardSubtitle: "Current Student At Amrit Science Campus"

        },
        {
            title: "2019",
            cardTitle: "Completed +2(HighSchool)",
            cardSubtitle: "Finished my HighSchool from DAV College"
        },
        {
            title: "2017",
            cardTitle: "Completed SEE",
            cardSubtitle: "Finished my SEE from Laboratory Secondary School"
        }
    ];


    return (
        <div className="p-2">
            <h3 className="w-[175px] my-3 p-1
                    font-bold text-center 
                    border-slate-500 border-2 rounded-full">
                <FaGraduationCap className="inline-block mr-3" /> EDUCATION 
            </h3>
            <div className="min-w-[250px] max-w-[300px] min-h-[300px]">
                <Chrono  mode="VERTICAL"
                    theme={{
                        primary: 'rgb(100,116,139)',
                        secondary: 'rgb(34,197,94)',
                        cardBgColor: 'rgba(0,0,0,0)',
                        titleColor: 'rgb(100,116,139)',
                        titleColorActive: 'rgb(34,197,94)',
                        cardTitleColor: 'rgb(100,116,139)'
                    }} hideControls>

                    <div className="min-w-[150px] max-w-[250px] max-h[50px]">
                        <p className="font-bold text-green-500">2019-Present</p>
                        <p className="font-bold text-xl">BSc CSIT Running (7th sem)</p>
                         <p>Currently Student At Amrit Science Campus</p>
                    </div>
                    <div className="min-w-[150px] max-w-[250px] max-h[50px]">
                        <p className="font-bold text-slate-300">2019</p>
                        <p className="font-bold text-xl">Completed +2(HighSchool)</p>
                         <p>Finished my HighSchool from DAV College</p>
                    </div>
                    <div className="min-w-[150px] max-w-[250px] max-h[50px]">
                        <p className="font-bold text-slate-300">2017</p>
                        <p className="font-bold text-xl">Completed SEE</p>
                         <p>Finished my SEE from Laboratory Secondary School</p>
                    </div>
                </Chrono>
            </div>
        </div>
    );
}