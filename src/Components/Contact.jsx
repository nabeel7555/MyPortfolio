export default function Contact() {
    return (
        <div id="contact" className="h-[60vh] w-full bg-[#111111] overflow-hidden flex flex-col items-center p-5">
            {/* Top gray line */}
            <div className="w-full border-2 border-gray-500 mb-2" />

            <div className="marquee-wrapper">
                <div className="marquee-content text-[150px] text-[#717171] font-bold hover:text-orange-500 font-bebas max-sm:text-[80px]">
                    <span>LET’S TALK —— LET’S COLLABORATE </span>
                    <span>LET’S TALK —— LET’S COLLABORATE </span> {/* To make the Marquee Duplicate */}
                </div>
            </div>

            {/* Bottom gray line */}
            <div className="w-full border-2 border-gray-500 mt-2" />

            <p className="text-orange-400 text-4xl flex justify-center gap-5 mt-5 font-playfair max-sm:text-[22px]">
                Mobile No: <span className="text-blue-400">03349649838</span>
            </p>
            <p className="text-orange-400 text-4xl flex justify-center gap-5 font-playfair max-sm:text-[22px] ">
                Gmail: <span className="text-blue-400 cursor-pointer">nabeelpips@gmail.com</span>
            </p>
            <p className="text-orange-400 text-4xl flex justify-center gap-5 font-playfair max-sm:text-[22px]">
                LinkedIn: 
                <a 
                    className="text-blue-400 underline cursor-pointer max-sm:text-[16px] max-sm:leading-7" // Styling for the link
                    href="https://www.linkedin.com/in/nabeel-ahmad-a60a03304" 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    www.linkedin.com/in/nabeel-ahmad-a60a03304
                </a>
            </p>
            
        </div>
    );
}
