import { Link } from 'react-scroll'; // Importing Link from react-scroll
import { motion } from 'framer-motion'; // Importing motion from framer-motion
import { ReactTyped } from 'react-typed';
import logo1 from "../Assets/backg.jpg";

export default function Navbar() {
    const nameAnimation = {
        hidden: { opacity: 0, x: 100 }, // Start from the left
        show: { opacity: 1, x: 0, transition: { duration: 0.8 } }, // End at the original position
    };
    const nameAnimation1 = {
        hidden: { opacity: 0, x: -100 }, // Start from the right
        show: { opacity: 1, x: 0, transition: { duration: 0.8 } }, // End at the original position
    };

    return (
        <div>
            {/* Navbar section */}
            <div id='navbar' className="flex flex-col md:flex-row md:space-x-52 absolute mt-5 w-[100%] max-sm:space-x-0 max-sm:mt-2">
                {/* Portfolio heading */}
                <div className="flex justify-center">
                    <motion.h1 
                        className="text-4xl font-bold font-playwrite text-[#4A98A9] ml-5 flex flex-wrap max-sm:text-2xl max-sm:ml-3" 
                        initial="hidden" 
                        whileInView="show"
                        variants={nameAnimation1}
                    >
                        My Portfolio 
                        <p className="text-red-500">...</p>
                    </motion.h1>
                </div>
                
                {/* Navigation links */}
                <div className="flex justify-center max-sm:h-40">
                    <ul className="flex flex-col md:flex-row md:space-x-16 h-10 items-center justify-evenly font-semibold text-white list-disc max-sm:space-y-5 max-sm:mt-4 max-sm:list-none max-sm:text-sm">
                        <li className="hover:scale-125 cursor-pointer hover:text-orange-400 ">
                            <Link to="home" smooth={true} duration={1000}>Home</Link>
                        </li>
                        <li className="hover:scale-125 cursor-pointer hover:text-orange-400 ">
                            <Link to="about" smooth={true} duration={1000}>About Me</Link>
                        </li>
                        <li className="hover:scale-125 cursor-pointer hover:text-orange-400 ">
                            <Link to="skills" smooth={true} duration={1000}>Skills</Link>
                        </li>
                        <li className="hover:scale-125 cursor-pointer hover:text-orange-400 ">
                            <Link to="education" smooth={true} duration={1000}>Education</Link>
                        </li>
                        <li className="hover:scale-125 cursor-pointer hover:text-orange-400  ">
                            <Link to="contact" smooth={true} duration={1000}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Main heading section */}
            <div className="absolute top-[37%] right-[1%] w-full flex flex-col items-center  ">
                <motion.h1 
                    className="text-[150px] font-bold font-sans capitalize text-orange-500 max-sm:text-2xl "
                    initial="hidden" 
                    whileInView="show"
                    variants={nameAnimation}
                >
                    NABEEL AHMAD
                </motion.h1>
                
                <ReactTyped
                    className="text-4xl font-bold text-white font-pacifico text-center max-sm:text-[15px] max-sm:pl-2"
                    strings={["I'M A FRONTEND DEVELOPER..."]} // Combine strings with newline
                    typeSpeed={100} // Typing speed
                    backSpeed={50} // Backspace speed
                    loop={true} // Loop the typing animation
                    showCursor={true} // Show the cursor
                />
            </div>

            {/* Background image */}
            <div className="w-full">
                <img className="h-screen w-full object-cover max-sm:h-[500px]" src={logo1} alt="Background" />
            </div>
        </div>
    );
}
