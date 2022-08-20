import { useContext } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { FilterContext } from '../context/FilterContext';
import { ThemeContext } from '../context/ThemeContext';

const Action = () => {

    const { region,setRegion,setCountry } = useContext(FilterContext);
    const { isDark } = useContext(ThemeContext);
     
    const searchCountry = (e) => {
        const searched = e.target.value;
        // everytime that i type, the list of countries will be filtered
        // pass it to the home component
        setCountry(searched);
    }

  return (
    <div className="container mx-auto flex md:flex-row md:gap-0 gap-10 flex-col md:items-center items-start justify-between md:px-20 px-2 md:py-10 py-5">
        <div className={`rounded-md flex items-center shadow-md md:w-[40%] w-full ${isDark ? 'bg-dark-blue' : 'bg-white'}`}>
            <button className={`text-xl px-5 ${isDark ? 'text-white' : 'text-black'}`}><AiOutlineSearch /></button>
            <input className={`w-full h-full p-5 bg-transparent outline-none ${isDark ? 'placeholder:text-white text-white' : 'placeholder:text-black text-black'}`} type="text" placeholder="Search for a country..." onChange={searchCountry} />
        </div>
        <select className={`p-5 md:w-[15%] w-1/2 outline-none rounded-md shadow-md cursor-pointer text-gray-400 ${isDark ? 'bg-dark-blue' : 'bg-white'}`} onChange={(e) => setRegion(e.target.value)} value={region}>
            <option hidden>Filter by Region</option>
            <option value="">All</option>
            <option value="africa">Africa</option>
            <option value="americas">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
    </div>
  )
}

export default Action