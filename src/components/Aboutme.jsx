import { SiAltiumdesigner } from "react-icons/si";
import { BsDatabaseFillGear }
  from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
const AboutMe = () => {
  return (
    <div className=" bg-[#110f17] py-4 text-gray-100">
      <h1 className="text-center text-2xl font-semibold underline decoration-[#5933D3] underline-offset-[12px] mb-5 my-2">About Me</h1>
      <div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4  md:px-2 mx-auto">
          <h1 className="grid items-center">
            <p className="grid grid-cols-2 items-center md:grid-cols-1 px-2 mx-auto">
              <span className="text-6xl font-semibold">3+</span>
              <span className="text-xl md:text-2xl font-semibold ">Years working Experience</span></p>
          </h1>
          <div className=" col-span-2">
            <p className="text-justify px-2 mx-auto">
              I&lsquo;m Bahati Zirimwabagabo, a results-driven Full-Stack Developer with a Computer Science background. Passionate about innovative technology, I bring expertise in JavaScript, React, Ruby on Rails, and collaborative coding to drive positive impact and deliver exceptional projects.
            </p>
            <p className="py-2 my-2 font-bold text-xl px-2 ">bahatizirimwabagabo@gmail.com</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 my-2 gap-2 px-2">
              <div className="bg-black py-2 px-3 rounded-xl grid gap-2 text-center place-items-center hover:scale-[95%] duration-300 hover:border-2 border-blue-400">
                <SiAltiumdesigner size={30} />
                <h1>UI/UX developer</h1>
              </div>
              <div className="bg-black py-2 px-3 rounded-xl grid gap-2 text-center place-items-center hover:scale-[95%] duration-300 hover:border-2 border-blue-400 ">
                <BsDatabaseFillGear size={30} />
                <h1>Back-End developer</h1>
              </div>
              <div className="bg-black py-2 px-3 rounded-xl  grid place-items-center gap-2 text-center hover:scale-[95%] duration-300 hover:border-2 border-blue-400">
                <FaLaptopCode size={30} />
                <h1>Full stack developer</h1>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default AboutMe;