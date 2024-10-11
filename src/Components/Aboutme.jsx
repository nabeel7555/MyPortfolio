import { motion } from "framer-motion";

export default function Aboutus() {
    // Define the animation variants
    const slideIn = {
        hidden: { opacity: 0, x: 100 }, // Start from the left
        show: { opacity: 1, x: 0, transition: { duration: 0.8 } }, // End at the original position
    };

    const slideInRight = {
        hidden: { opacity: 0, x: -100 }, // Start from the right
        show: { opacity: 1, x: 0, transition: { duration: 0.8 } }, // End at the original position
    };

    return (
        <div id="about" className="h-screen bg-black relative max-sm:absolute max-sm:w-full max-sm:h-[1000px]" >
            <div className="text-[grey] h-screen overflow-hidden leading-tight p-5 max-sm:h-full ">
                <motion.div 
                    className="font-bebas text-[250px] font-bold  max-sm:text-[150px]"
                    initial="hidden" 
                    whileInView="show"
                    variants={slideIn}
                >
                    FRONT — END
                </motion.div>
                <motion.div 
                    className="font-bebas text-[250px] font-bold max-sm:text-[95px] "
                    initial="hidden" 
                    whileInView="show"
                    variants={slideInRight}
                >
                    DEVELOPER
                </motion.div>
            </div>
            <div className="text-[orange] text-[20px] absolute bottom-20 right-[3%] text-justify w-1/3 font-thin max-sm:absolute max-sm:w-1/2 max-sm:h-[200px] max-sm:right-[10%] max-sm:leading-tight max-sm:top-[58%] max-sm:mt-5Y">
                About
                <span className="text-2xl text-[grey] font-normal tracking-tighter max-sm:text-[15px] max-sm:leading-tight max-sm:flex max-sm:flex-wrap ">
                    ..A dynamic and motivated Frontend Developer with a solid foundation in
                    Electrical Engineering and a recent certification in Web Development
                    from NAVTTC. Proficient in HTML, CSS, Tailwind, JavaScript, and React, I
                    have a passion for creating visually appealing and user-friendly web
                    applications. Eager to apply my technical skills and innovative mindset
                    in a collaborative environment, I am driven by a commitment to
                    delivering high-quality solutions and continuously learning.
                </span>
            </div>
        </div>
    );
}
