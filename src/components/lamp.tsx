import React from "react";
import * as styles from './lamp.module.css';

interface IProps {
    changeTheme: Function;
    theme: string;
}

const Lamp: React.FC<IProps> = (props) => {
    const {changeTheme, theme} = props;

    return (
        <div className={ [ styles.lamp, theme === 'dark' && styles.shadow ].join(' ') } onClick={ () => {
            changeTheme();
        } }/>
    );
};

export default Lamp;
