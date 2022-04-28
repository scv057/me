import React, {useState} from "react";
import Layout from "../components/layout";

const AboutPage = ()=>{
    const [name, setName] = useState('Andrew Xie');
    return (
        <Layout pageTitle='About Me'>
            <p style={{color: 'var(--font-color)', backgroundColor: 'var(--background-color)'}}>
                I'm { name }
            </p>
        </Layout>
    );
}

export default AboutPage;
