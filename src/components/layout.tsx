import React from "react";
import * as styles from './layout.module.css'
import '../pages/index.module.css';
import Theme from "./theme";

interface IProps {
    pageTitle: string;
}

const Layout: React.FC<IProps> = (props) => {
    const {pageTitle, children} = props;
    const arr = new Array(100).fill(1);
    return (
        <>
            <Theme/>
            <div className={styles.layout}>
                <title>{ pageTitle }</title>
                <h1>{ pageTitle }</h1>
                { children }
            </div>
            <div className={ styles.grid }>
                <div className={styles.gridHighlight} />
                { arr.map((value, index) => {
                    return (
                        <div className={ styles.item } key={ index }/>
                    )
                }) }
            </div>
        </>
    );
};

export default Layout;
