import React from "react"
import Layout from "../components/layout";
import * as styles from './index.module.css';
import '../css/main.css';
import { StaticImage } from 'gatsby-plugin-image';
import Header from "../components/header";

const IndexPage = () => {

    return (
        <>
            <Layout pageTitle={ 'Index' }>
                <StaticImage className={ styles.avatar }
                             src="https://s1.vika.cn/space/2022/05/05/2c7a8d84127b49ab870d110a958dc9bb?attname=images.jpeg"
                             alt="avatar"/>
                <h1 className={ styles.title }> Andrew Xie </h1>
                <h2 className={ styles.des }>Frontend Developer who is unemployed </h2>
                <Header/>
            </Layout>
        </>
    );
};

export default IndexPage
