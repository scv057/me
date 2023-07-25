import React from "react"
import Layout from "../components/layout";
import * as styles from './index.module.css';
import '../css/main.css';
import { StaticImage } from 'gatsby-plugin-image';
import Nav from "../components/nav";

const Mid = ()=>{
    return <>
        <StaticImage className={ [ styles.avatar, "aspect-square" ].join(" ") }
                   src="https://s1.vika.cn/space/2022/05/05/2c7a8d84127b49ab870d110a958dc9bb?attname=images.jpeg"
                   alt="avatar"/>
        <p className={ "text-4xl" }> Andrew Xie </p>
        <p className={ "text-2xl" }>Frontend Developer who is unemployed </p>
        <Nav/>
    </>;
}

const IndexPage = () => {
    return (
        <>
            <Layout pageTitle={ 'Index' }
                    type={'mid'}
                    slots={{mid: <Mid/>}} />
        </>
    );
};

export default IndexPage
