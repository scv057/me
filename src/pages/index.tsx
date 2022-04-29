import React from "react"
import Layout from "../components/layout";
import * as styles from './index.module.css';
import '../css/main.css';
import { Link } from "gatsby";

const IndexPage = () => {

    return (
        <>
            <Layout pageTitle={ 'sb' }>
                <p>
                    <Link to={ '/about' }>About</Link>
                    <Link to={ '/' }>Index</Link>
                </p>
            </Layout>
        </>
    );
};

export default IndexPage
