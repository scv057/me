import React, { useEffect, useMemo, useState } from "react";
import '../css/var.css';
import { createContext } from "react";

const ThemeContext = createContext({});

const Theme: React.FC = (props) => {
    const {children} = props;

    const defaultTheme: string = useMemo(() => {
        return localStorage.getItem('theme') || 'light';
    }, []);

    const [ theme, setTheme ] = useState(defaultTheme);

    useEffect(()=>{
        localStorage.setItem('theme', theme);
        document.querySelector(':root')?.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={ {theme, setTheme} }>
            { children }
        </ThemeContext.Provider>
    );
};

export default Theme;

export { ThemeContext };
