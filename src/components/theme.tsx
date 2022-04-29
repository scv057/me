import React, { useEffect, useState } from "react";
import '../css/var.css';
import * as styles from './theme.module.css';


const Theme: React.FC = (props) => {
    const [ theme, setTheme ] = useState('');

    useEffect(() => {
        if (!theme) {
            const themeMode = localStorage.getItem('themeMode');
            setTheme(themeMode || 'light');
            localStorage.setItem('themeMode', theme);
            return;
        }
        const doc = document.documentElement;
        doc.dataset.theme = theme;
        localStorage.setItem('themeMode', theme);
    }, [ theme ]);

    useEffect(() => {
        const themeMedia = window.matchMedia("(prefers-color-scheme: light)") as MediaQueryList;
        const themeChangeHandler = (e: { matches: boolean; }) => {
            e.matches ? setTheme('light') : setTheme('dark');
        };
        themeMedia.addListener(themeChangeHandler);
        return themeMedia.addListener(themeChangeHandler);
    }, [])

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <div className={styles.theme}>
            {theme}
            <button onClick={ changeTheme }>toggle</button>
        </div>
    )
};

export default Theme;
