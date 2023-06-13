"use client"

import { createContext, useState } from "react"

interface IThemeContext {
    mode: string;
    toggle: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
    mode: "dark",
    toggle: () => {},

});

export const ThemeProvider = ({ children } : {children: React.ReactNode}) => {
    const [mode, setMode] = useState("dark");

    const toggle = () => {
        setMode(prev => prev === "dark" ? "light" : "dark");
    }

    return (
        <ThemeContext.Provider value={{toggle, mode}}>
            <div className={`theme ${mode}`}>{children}</div>
        </ThemeContext.Provider>
    )
    
}