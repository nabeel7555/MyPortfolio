import html from "../Assets/html.png";
import css from "../Assets/css.png";
import tailwind from "../Assets/tailwind.png";
import react from "../Assets/react.png";

const data = [
    { img: html, description: "HTML", level: 70 },
    { img: css, description: "CSS", level: 75 },
    { img: tailwind, description: "Tailwind CSS", level: 75 },
    { img: react, description: "REACT", level: 60 }
];

export default function Skills() {
    return (
        <>
            <div id="skills" className="max-sm:relative max-sm:top-[1000px] max-sm:h-[1500px] max-sm:bg-slate-950">
                <div>
                    <h1 className="text-5xl text-center font-bold font-playfair text-white p-10 bg-slate-950">
                        Front End Skills...
                        <div className="w-[10%] h-1 bg-orange-500 ml-[41%] max-sm:w-[40%] max-sm:ml-[25%]"></div>
                    </h1>
                </div>
                <div className="flex justify-around items-center p-10 bg-slate-950 max-sm:flex-col max-sm:p-0 gap-5 overflow-hidden">
                    {
                        data.map((i) => (
                            <div  className="relative w-1/4 max-sm:w-full max-sm:p-5">
                                <div className="w-full h-[80%] border-4 border-red-900 p-5 hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out max-sm:border-4 max-sm:border-red-800 group max-sm:w-[60%] max-sm:m-auto ">
                                    <img className="bg-white w-[70%] h-[50%] border-4 border-red-400 p-2 m-auto object-contain max-sm:w-full" src={i.img} alt={i.description} />
                                    <div className="space-y-10 p-2 max-sm:space-y-0">
                                        <h1 className="text-white text-3xl font-semibold text-center mt-5">{i.description}</h1>
                                        <div className="flex space-x-3 justify-center p-5">
                                            <p className="text-white -mt-2.5">Level</p>
                                            <div className={`w-[70%] h-1 bg-white relative transition-opacity duration-300`}>
                                                <div
                                                    className="h-full bg-orange-500"
                                                    style={{ width: i.level + "%" }} // Set width dynamically based on skill level
                                                ></div>
                                            </div>
                                            <p className="text-white -mt-2.5">{i.level}%</p>
                                        </div>
                                    </div>
                                </div>
                                {/* This div will hide the other progress lines when hovering over the card */}
                                <div className="absolute inset-0 bg-slate-950 group-hover:block hidden"></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

