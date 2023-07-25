import React from "react";
import * as styles from './label.module.css';

interface ILabelProps {
    text: string;
}

const Label: React.FC<ILabelProps> = (props) => {
    const {text} = props;
    return (
        <div className={ styles.label }>
            { text }
        </div>
    )
};

export default Label
