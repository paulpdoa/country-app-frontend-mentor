import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

const CountryCard = ({ country }) => {
  
  const { isDark } = useContext(ThemeContext);

  return (
    <Link to={`/detail/${country.name.common}`} className={`rounded-md shadow-md overflow-hidden ${isDark ? 'bg-dark-blue text-white' : 'bg-white'} w-full`}>
        <img className="w-full h-[150px]" src={country.flags.png} alt={country.name.common} />
        <div className="flex flex-col p-5">
            <h3 className="font-bold text-lg">{country.name.common}</h3>
            <h4 className="font-bold mt-3">Population: <span className="font-medium">{country.population}</span></h4>
            <h4 className="font-bold">Region: <span className="font-medium">{country.region}</span></h4>
            <h4 className="font-bold">Capital: <span className="font-medium">{country.capital}</span></h4>
        </div>
    </Link>
  )
}

export default CountryCard;