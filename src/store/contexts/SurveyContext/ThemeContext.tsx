import { createContext, FC, ReactNode, useState } from "react";

interface IThemeContext {
    dark: boolean;
    toggleDark?: () => void;
  }
  
  const defaultState = {
    dark: false,
  };
  
  const ThemeContext = createContext<IThemeContext>(defaultState);


  export const ThemeProvider = ({ children }: {children: ReactNode}) => {
    const [dark, setDark] = useState(defaultState.dark);
  
    const toggleDark = () => {
        console.log(19)
      setDark(!dark);
    };
  
    return (
      <ThemeContext.Provider
        value={{
          dark,
          toggleDark,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  };
  
  export default ThemeContext;