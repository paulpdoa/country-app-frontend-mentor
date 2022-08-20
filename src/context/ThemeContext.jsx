import { createContext,useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [isDark,setIsDark] = useState(false);
    const value = {
        isDark,
        setIsDark
    }
    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
}