import React from "react"
import Layout from "../components/layout";
import * as styles from './index.module.css';
import '../css/main.css';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {

    return (
        <>
            <Layout pageTitle={ 'Index' }>
                <StaticImage
                    width={ 400 }
                    alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                    src="https://s1.vika.cn/space/2022/04/29/00811ddbb3684b58868ab6efc499b250?attname=%E9%9B%B7%E6%A0%BC%E8%A5%BF.jpeg"
                />
            </Layout>
        </>
    );
};

export default IndexPage
