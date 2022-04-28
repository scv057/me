import React from "react";
import { Link } from "gatsby";
import Theme from "../components/theme";

interface IProps {
    pageTitle: string;
}

const Layout: React.FC<IProps> = (props) => {
    const {pageTitle, children} = props;

    return (
        <div>
            <title>{ pageTitle }</title>
            <Theme/>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{ pageTitle }</h1>
                { children }
            </main>
        </div>
    );
};

export default Layout;
