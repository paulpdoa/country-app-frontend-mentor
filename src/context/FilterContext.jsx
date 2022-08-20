import { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({children}) => {
    const [country,setCountry] = useState('');
    const [region,setRegion] = useState('');

    const value = { country,setCountry,region,setRegion };

    return (
        <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
    )
}