import React from "react";
import * as styles from './layout.module.css'
import '../pages/index.module.css';
import Theme from "./theme";
import Header from "./header";

interface IProps {
    pageTitle?: string;
}

const Layout: React.FC<IProps> = (props) => {
    const { children} = props;

    return (
        <>
            <Theme/>
            <div className={ styles.background }>
                <main className={styles.main}>
                    { children }
                </main>
            </div>
        </>
    );
};

export const LRLayout:React.FC<IProps> = (props) => {
    const {pageTitle, children} = props;

    return (
        <>
            <Theme/>
            <header className={ styles.header }>
                <Header direction="col"/>
            </header>
            <div className={ styles.background }>
                <main style={{marginTop: '1.5em'}}>
                    <title>{ pageTitle }</title>
                    <h1>{ pageTitle }</h1>
                    <div className={ styles.main } style={{alignItems: 'normal'}}>
                        { children }
                    </div>
                </main>
            </div>
        </>
    );
}

export default Layout;
