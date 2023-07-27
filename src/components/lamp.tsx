import React, { useContext, useEffect, useMemo, useState } from "react";
import * as styles from './lamp.module.css';
import { ThemeContext } from './theme';
import classNames from "classnames";


/**
 * @description theme controller
 */
const Lamp: React.FC = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <div className={ classNames( styles.lamp, "z-10", (theme === 'dark' && styles.shadow))}
        // <div className={ [ styles.lamp, theme === 'dark' && styles.shadow ].join(' ') }
             onClick={ () => {
                 setTheme(theme === 'light' ? 'dark' : 'light');
             } }/>
    );
};

export default Lamp;
