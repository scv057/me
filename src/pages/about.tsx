import React from "react";
import { LRLayout } from "../components/layout";
import * as styles from './about.module.css';

const contents: Array<string | JSX.Element> = ['🀄️ My name is 谢杨浩', <>我在<a href={'http://www.baidu.com'}>等你</a></>];

const AboutPage = () => {

    return (
        <LRLayout pageTitle='About Andrew Xie'>
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
        </LRLayout>
    );
};

export default AboutPage;
