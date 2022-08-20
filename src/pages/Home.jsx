import { useEffect,useState,useContext } from 'react';
import CountryCard from '../components/CountryCard';
import Action from '../components/Action';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FilterContext } from '../context/FilterContext';
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {

  const [countries,setCountries] = useState(null);
  const { region,country: searchedCountry } = useContext(FilterContext); 
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    const abortCont = new AbortController();

    const fetchCountries = async () => {
      const res = await fetch('https://restcountries.com/v3.1/all');
      const data = await res.json();
      console.log(data);
      setCountries(data);
    }
    fetchCountries();

    return () => abortCont.abort();
  },[])

  return (
    <div className={`p-5 ${isDark ? 'bg-very-dark-blue-bg' : 'bg-very-light-gray'} h-full`}>
      <Action />
      <div className="container mx-auto gap-y-14 grid md:grid-cols-4 grid-cols-1 justify-items-center gap-10 md:px-20 px-10">
         { countries === null ? 
          <div className={`h-screen ${isDark ? 'text-white' : 'text-black'} flex justify-center items-center absolute w-full`}>
            <h1 className="text-4xl flex items-center justify-center gap-2"><AiOutlineLoading3Quarters className="text-5xl animate-spin" />Loading</h1>
          </div>
         : 
         countries.filter(country => {
          if(region !== '') {
            return country.region.toLowerCase() === region.toLowerCase();
          } else if(searchedCountry !== '') {
            return country.name.common.toLowerCase().includes(searchedCountry.toLowerCase())
          }
          return country;
         }).map((country,key) => {
            return <CountryCard country={country} key={key} />
         }) }
      </div>
    </div>
  )
}

export default Home