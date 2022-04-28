import React, {useEffect, useState} from "react"
import {ThemeContext, useTheme} from "../hooks/useTheme";
import '../css/index.css';

const IndexPage = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const doc = document.documentElement;
        doc.dataset.theme = theme;
    }, [theme]);


    return (
        <ThemeContext.Provider value={theme}>
            <main style={{backgroundColor: 'var(--background-color)'}}>
                <title>
                    Home
                </title>
                <h1 style={{color: 'var(--font-color)'}}>Welcome to my Gatsby site</h1>
                <p>
                    love u guys
                </p>
                <p>{theme}</p>
                <button onClick={()=>{
                    setTheme(preTheme=>{
                        return preTheme === 'dark' ? 'light' : 'dark';
                    })
                }}>change</button>
            </main>
        </ThemeContext.Provider>
    );
}

export default IndexPage
