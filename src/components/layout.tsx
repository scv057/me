import React from "react";
import * as styles from './layout.module.css'
import '../pages/index.module.css';
import Header from "./header";
import Lamp from "./lamp";
import Theme from "./theme";

interface IProps {
    pageTitle?: string;
    layout?: string
}

const Layout: React.FC<IProps> = (props) => {
    const { pageTitle, children } = props;

    return (
        <>
            <div className={ styles.background }>
                <main className={ styles.main }>
                    { children }
                </main>
            </div>
        </>
    );
};

const LRLayout:React.FC<IProps> = (props) => {
    const {pageTitle, children} = props;

    return (
        <>
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

const DefaultLayout: React.FC<IProps> = (props)=>{
    const { pageTitle, layout, children } = props;

    return (
        <>
            <Theme>
                <Lamp/>
                { layout === 'lr' ?
                    (<LRLayout pageTitle={ pageTitle || '' }>{ children }</LRLayout>) :
                    (<Layout pageTitle={ pageTitle || '' }>{ children }</Layout>) }
            </Theme>
        </>
    );
}

export default DefaultLayout;
