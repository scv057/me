import React, {useState} from "react";
import Layout from "../components/layout";
import * as styles from './about.module.css';
import { Link } from "gatsby";

const AboutPage = ()=>{
    const [name, setName] = useState('Andrew Xie');
    return (
        <Layout pageTitle='About Me'>
            <p className={styles.content}>
                I'm { name }
                <p>
                    <Link to={ '/about' }>About</Link>
                    <Link to={ '/' }>Index</Link>
                </p>
            </p>
        </Layout>
    );
}

export default AboutPage;
