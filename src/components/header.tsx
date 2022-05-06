import React from "react";
import Button, { ButtonGroup } from "./button";
import Icons from '../icons/icons';
import * as styles from './header.module.css';

export interface ILinkProps {
    content: any;
    href: string;
}

interface IHeaderProps {
    direction ?: string;

}
const {TwitterIcon, GithubIcon,YoutubeIcon} = Icons;

const textLinks: Array<ILinkProps> = [
    {content: 'Index', href: '/'},
    {content: 'About', href: '/about'},
    {content: 'Writings', href: '/blog'},
    {content: 'Talks', href: '/talk'},
    {content: 'Notes', href: '/note'},
    {content: 'Newsletter', href: '/newsletter'}];

const iconLinks = [ {content: <TwitterIcon/>, href: '/about'},
    {content: <GithubIcon/>, href: '/'},
    {content: <YoutubeIcon/>, href: '/'} ];


const Header:React.FC<IHeaderProps> = (props) => {
    const {direction = 'row'} = props;

    return (
        <nav>
            <ul className={ [styles.header, direction==='col' && styles.col].join(' ') }>
                {
                    textLinks.map(
                        ({href, content}, index) => {
                            return <Button href={ href } type={ 'link' } key={ index }>{ content }</Button>;
                        })
                }
                {
                    <ButtonGroup links={ iconLinks }/>
                }
            </ul>
        </nav>
    );
}

export default Header;
