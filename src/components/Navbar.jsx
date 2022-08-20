import { BsMoon,BsMoonFill } from 'react-icons/bs';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {

  const { setIsDark,isDark } = useContext(ThemeContext);

  return (
    <div className={`shadow-md w-full ${isDark ? 'bg-dark-blue text-white' : 'bg-white'}`}>
      <nav className="container mx-auto flex justify-between items-center py-5 md:px-20 px-5 w-full">
        <h1 className="md:text-xl text-lg font-[800]">Where in the world?</h1>
        <button onClick={() => setIsDark(!isDark)} className="cursor-pointer font-[600] text-base flex gap-2 items-center">{ isDark ? <><BsMoonFill />Light Mode</> : <><BsMoon />Dark Mode</>}</button>
      </nav>
    </div>
  )
}

export default Navbar