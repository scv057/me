import React, {useEffect, useState} from "react"
import Layout from "../components/layout";

const css_var = `var()`

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p style={{color: 'var(--font-color)', backgroundColor: 'var(--background-color)'}}>I'm making this by following the Gatsby Tutorial.</p>
        </Layout>
    );
};

export default IndexPage
