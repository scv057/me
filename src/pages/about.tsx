import React from "react";
import DefaultLayout from "../components/layout";
import * as styles from './about.module.css';

const contents: Array<string | JSX.Element> = ['🀄️ My name is 谢杨浩', <>我在<a href={'http://www.baidu.com'}>等你</a></>];

const AboutPage = () => {

    return (
        <DefaultLayout layout={"lr"} pageTitle='About Andrew Xie'>
            <article>
                <h2>说点什么</h2>
                <ol>
                    {
                        contents.map((content, index) => {
                            return <li key={ index }>{ content }</li>;
                        })
                    }
                </ol>
            </article>
        </DefaultLayout>
    );
};

export default AboutPage;
