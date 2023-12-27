import { Link } from "react-router-dom";
import { FaBars, FaGithub } from "react-icons/fa";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaRegWindowClose } from "react-icons/fa";
import logo from '../assets/zbLogo.png';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const menuItems = [
    {
      id: 1,
      name: 'About'
    },
    {
      id: 2,
      name: 'Skills'
    },
    {
      id: 3,
      name: 'Projects'
    },
    {
      id: 4,
      name: 'Contact'
    },
  ];

  return (
    <header className={nav ? 'bg-[#110F17] h-screen text-gray-300 text-xl' : 'bg-white sm:bg-[#110F17]  text-gray-300 text-xl md:py-2'}>
      <img src={logo} alt="portfolio logo" className="w-16 h-16 md:hidden rounded-lg absolute top-4 left-4" />
      <button type="button" onClick={() => setNav(!nav)} className="md:hidden absolute top-4 right-4 z-10 cursor-pointer hover:scale-[95%] duration-300 hover:bg-gray-300 p-2 rounded-full"> {nav ? <FaRegWindowClose size={40} className="hover:text-black duration-300" /> : <FaBars size={40} className="hover:text-black" />}</button>
      <nav className={nav ? 'mx-auto px-4 grid grid-cols-1 duration-300 absolute left-0 gap-4 sm:grid-cols-4' : 'mx-auto px-4 hidden sm:grid gap-4 sm:grid-cols-4'}>
        <img src={logo} alt="portfolio logo" className="hidden md:grid w-16 h-16 rounded-lg" />
        <ul className="col-span-2 flex flex-col  gap-12 my-28 md:my-0 md:flex-row md:gap-7 md:justify-center md:items-center">
          {menuItems.map(menu => (
            <li key={menu.id} className="hover:underline underline-offset-8 decoration-[#5933D3] cursor-pointer hover:scale-[99%] duration-300 hover:text-gray-500"> <Link to={`#${menu.name}`} id={menu.name}>{menu.name}</Link></li>
          ))}
        </ul>
        <div className="flex justify-end gap-5 items-center">
          <Link to="https://github.com/zbahati" target="_blank" className="cursor-pointer hover:bg-gray-600 duration-300 p-2 hover:rounded-full"><FaGithub size={20} /></Link>
          <Link to="https://www.linkedin.com/in/zirimwabagabo-bahati/" target="_blank" className="cursor-pointer hover:bg-gray-600 duration-300 p-2 hover:rounded-full "><FaLinkedin size={20} /></Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;