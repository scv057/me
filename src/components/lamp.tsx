import React, { useContext, useEffect, useMemo, useState } from "react";
import * as styles from './lamp.module.css';
import { ThemeContext } from './theme';


/**
 * @description theme controller
 */
const Lamp: React.FC = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <div className={ [ styles.lamp, theme === 'dark' && styles.shadow ].join(' ') }
             onClick={ () => {setTheme(theme === 'light' ? 'dark' : 'light');
        } }/>
    );
};

export default Lamp;
