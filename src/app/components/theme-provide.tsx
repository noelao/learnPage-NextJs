"use client";

import { createContext, useContext } from "react";

type Thema = {
  colors: {
    primary: string;
    secondary: string;
  }
}

const defaultTheme: Thema = {
    colors: {
        primary: "#007bff",
        secondary: "#6c757d"
    }
}
const ThemeContext = createContext<Thema>(defaultTheme);

export const ThemeProvider = ({ children } : { children: React.ReactNode }) => {
    return (
        <ThemeContext.Provider value={defaultTheme}>
            {children}
        </ThemeContext.Provider>
        // boleh dihapus .Provider-nya
    )
}

export const useThema = () => useContext(ThemeContext);