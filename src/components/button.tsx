import React from "react";
import * as styles from './button.module.css';
import { Link } from "gatsby";
import { ILinkProps } from './header';

interface Interface {
    href: string;
    type: string;
}

const LinkButton: React.FC<Interface> = (props) => {
    const {href, children} = props;

    return (
        <li>
            <Link className={styles.link} to={ href } >{ children }</Link>
        </li>
    );
};

export const ButtonGroup: React.FC<{ links:Array<ILinkProps> }> = (props) => {
    const {links} = props;

    return(
        <li>
            {
                links.map(({href, content}, index)=>{
                    return <Link key={index} className={styles.link} to={ href } >{ content }</Link>;
                })
            }
        </li>
    )
}

const Button: React.FC<Interface> = (props) => {
    const {type} = props;
    switch (type) {
        case 'link':
            return <LinkButton { ...props }/>
        default:
            return <LinkButton { ...props }/>;
    }
}

export default Button;
