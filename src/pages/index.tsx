import React from "react"
import Layout from "../components/layout";
import '../css/index.css';
import Theme from "../components/theme";
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
