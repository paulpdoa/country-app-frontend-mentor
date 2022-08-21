import { useParams,useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Detail = () => {
  
  const navigate = useNavigate();
  const { country } = useParams();
  const [countryDetail,setCountryDetail] = useState(null);
  const { isDark } = useContext(ThemeContext);

  // use this to get the first key of an object in the native name
  const native = countryDetail !== null && Object.keys(countryDetail.name.nativeName)[0];
  const currency = countryDetail !== null && Object.keys(countryDetail.currencies)[0];
  const languages = countryDetail !== null && Object.keys(countryDetail.languages);

  // just extract the data and turn in into an array
  const languagesData = countryDetail !== null && languages.map(language => {
    return countryDetail.languages[language];
  });
  
  // Fetch specific country from the api
  useEffect(() => {
    const abortCont = new AbortController();

    const fetchCountry = async () => {
      const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
      const data = await res.json();

      setCountryDetail(data[0]);
      console.log(data[0])
    }
    fetchCountry();

    return () => abortCont.abort();
  },[]);

  return (
    <>
      <button className={`p-2 shadow-xl ${isDark ? 'bg-dark-blue text-white' : 'border-gray-200 border'}  flex items-center justify-center w-[100px] rounded-md gap-2 mt-20 mx-32 absolute md:left-0 md:top-20 -left-20 top-5`} onClick={() => navigate(-1)}><BsArrowLeft />Back</button>
      { countryDetail === null ? <div className="text-center">Loading...</div> : 
      <div className={`${isDark ? 'bg-very-dark-blue-bg text-white' : 'bg-very-light-gray'} container mx-auto flex md:flex-row flex-col justify-around items-center md:h-screen h-full`}>
        <img className="md:w-[500px] md:h-[300px] mt-32" src={countryDetail.flags.png} alt={countryDetail.name.common} />
        <div className="flex flex-col md:w-auto w-4/5">
          <h1 className="font-bold md:text-3xl text-2xl md:mt-0 mt-10">{countryDetail.name.common}</h1>
          <div className="grid md:grid-cols-2 grid-cols-1 mt-5">
            <div>
              <h2 className="font-bold">Native Name: <span className="font-medium">{countryDetail.name.nativeName[native].common}</span></h2>
              <h2 className="font-bold">Population: <span className="font-medium">{countryDetail.population}</span></h2>
              <h2 className="font-bold">Region: <span className="font-medium">{countryDetail.region}</span></h2>
              <h2 className="font-bold">Sub Region: <span className="font-medium">{countryDetail.subregion}</span></h2>
              <h2 className="font-bold">Capital: <span className="font-medium">{countryDetail.capital[0]}</span></h2>
            </div>
            <div className="md:mt-0 mt-10">
              <h2 className="font-bold">Top Level Domain: <span className="font-medium">{countryDetail.tld[0]}</span></h2>
              <h2 className="font-bold">Currencies: <span className="font-medium">{countryDetail.currencies[currency].name}</span></h2>
              <h2 className="font-bold">Languages: <span className="font-medium">{languagesData.join(', ')}</span></h2>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-2 md:items-center items-start md:mt-20 mt-10 md:mb-0 mb-10">
            <h2 className="font-bold">Border Countries:</h2>
            <div className="flex md:flex-row gap-5 flex-wrap">
              {countryDetail !== null && countryDetail.borders === undefined ? <h3>None</h3> : countryDetail.borders.map((border,key) => {
                return <div key={key} className={`font-medium ${isDark ? 'bg-dark-blue' : 'bg-white'} shadow-xl py-1 w-[70px] text-center rounded-md`}>{border}</div>
              })}
            </div>
          </div>
        </div>
      </div>
      }
    </>
  )
}

export default Detail