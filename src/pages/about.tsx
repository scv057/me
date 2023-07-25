import React from "react";
import Layout from "../components/layout";
// import * as styles from './about.module.css';
import Nav from "../components/nav";

const contents: Array<string | JSX.Element> = ['🀄️ My name is 谢杨浩', <>我在<a href={'http://www.baidu.com'}>等你</a></>];

const Content = () => {

    return <article>
        <h2>说点什么</h2>
        <ol>
            {
                contents.map((content, index) => {
                    return <li key={ index }>{ content }</li>;
                })
            }
        </ol>
    </article>
};


const AboutPage = () => {

    return (
        <Layout layout={ "lr" }
                pageTitle='About Andrew Xie'
                slots={ {left: <Nav direction={"col"}/>,
                    right: <Content/>} }/>
    );
};

export default AboutPage;
