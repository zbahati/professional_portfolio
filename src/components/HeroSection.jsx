import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import profilePicture from '../assets/Bahati-Professional.jpg';

const HeroSection = () => {
  return (

    <div className="grid -z-20 text-white bg-gradient-to-r to-slate-700 from-black grid-cols-1 md:grid-cols-2 items-center">
      <div className="sm:py-3">
        <div className="mx-auto px-2">
          <div className="grid gap-3 py-5 md:py-2 ">
            <h1>🖐Hi, I'm <span className="text-[#5833d3ee] text-xl font-semibold">Bahati zirimwabagabo</span></h1>
            <h1 className="font-bold text-4xl">Full-stack Developer</h1>
          </div>
          <div className="py-3">
            <p className="text-justify ">Computer science graduate and skilled full-stack web developer. Proficient in React, Redux, Ruby on Rails, PHP, Laravel, Python, MySQL, and Postgresql. Unique in collaboration, fast learning, and driving team success</p>
          </div>
          <div className="flex items-center gap-4 py-3">
            <span>Follow me</span>
            <Link to="https://www.linkedin.com/in/zirimwabagabo-bahati/" target="_blank" className="cursor-pointer hover:bg-gray-600 duration-300 p-2 hover:rounded-full"><FaLinkedin size={20} /></Link>
            <Link to="https://github.com/zbahati" target="_blank" className="cursor-pointer hover:bg-gray-600 duration-300 p-2 hover:rounded-full"><FaGithub size={20} /></Link>
          </div>
          <button type="button" className=" bg-[#5933D3] px-4 py-3 rounded-xl  text-xl hover:scale-95 duration-300 hover:bg-[#3f20a4]">Download CV</button>
        </div>
      </div>
      <img src={profilePicture} alt="my picture" className="h-3/4 object-cover w-3/4 rounded-full shadow-2xl shadow-white ring-4 mx-auto order-first md:order-last mt-24 hover:scale-[95%] hover:ring-white hover:shadow-xl duration-300" />
    </div>

  );
}

export default HeroSection;