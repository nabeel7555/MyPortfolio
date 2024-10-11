import React from "react";
import Slider from "react-slick";


export default function Slideshow() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500, // Change this to a lower value for faster transitions
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust autoplay speed if needed
    
      
  };
  return (
    <>    
    <div id="education" className=" w-[80%] m-auto border-0 h-screen p-36 max-sm:mt-[1250px] max-sm:h-[400px] max-sm:p-0">
    <h1 className="text-5xl text-white p-10 font-serif text-center max-sm:text-[30px]">Educational Background: <p className="w-[40%] h-1 bg-orange-400 ml-[18%] max-sm:ml-9 max-sm:w-[60%]"></p></h1>

      <Slider {...settings} className="bg-gray-600 rounded-3xl">
    
        <div className="  h-[250px] bg-orange-400 p-5 space-y-5 max-sm:space-y-2 max-sm:h-[180px] max-sm:p-2 rounded-3xl ">
            <h1 className="text-5xl font-playfair text-black font-extrabold max-sm:text-[14px] ml-8 max-sm:m-auto">MATRIC: <div className="w-[150px] h-1 bg-red-900 max-sm:w-[60px] max-sm:mt-0.5"></div></h1>
            <p className="text-3xl font-semibold   font-sans text-black  italic max-sm:text-[15px] max-sm:leading-tight  ">Peshawar Model School, Peshawar</p>
        </div>
        <div className="  h-[250px] bg-green-400 p-5 space-y-5 max-sm:space-y-2 max-sm:h-[180px] max-sm:p-2 rounded-3xl ">
            <h1 className="text-5xl font-playfair text-black font-extrabold max-sm:text-[14px] ml-8 max-sm:m-auto">COLLEGE: <div className="w-[150px] h-1 bg-red-900 max-sm:w-[60px] max-sm:mt-0.5"></div></h1>
            <p className="text-3xl font-semibold   font-sans text-black  italic  max-sm:text-[15px] max-sm:leading-tight ">Peshawar Model Degree College, Pesahwar</p>
        </div>
        <div className="  h-[250px] bg-blue-400 p-5 space-y-5 max-sm:space-y-2 max-sm:h-[180px] max-sm:p-2 rounded-3xl ">
            <h1 className="text-5xl font-playfair text-black font-extrabold max-sm:text-[14px] ml-8 max-sm:m-auto">UNIVERSITY: <div className="w-[150px] h-1 bg-red-900 max-sm:w-[60px] max-sm:mt-0.5"></div></h1>
            <p className="text-3xl font-semibold   font-sans text-black  italic  max-sm:text-[15px] max-sm:leading-tight ">University of Engineering & Technology, Peshawar</p>
        </div>
        
      </Slider>
    </div>
    </>

  );
}
