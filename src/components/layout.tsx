import React from "react";
import '../pages/index.module.css';
import Lamp from "./lamp";
import Theme from "./theme";
import classNames from "classnames";

interface IProps {
    type?: string;
    layout?: string;
    slots: object;
}

const MidLayout: React.FC = ({slots: {mid}}) => {
    return <div
        className={ classNames("container", "mx-auto", "px-2") }>
        { mid }
    </div>;
};

const LRLayout: React.FC = ({slots: {left, right}}) => {
    return <div
        className={ classNames("container", "max-auto", "px-2") }>
        <div className={ classNames("flex", "flex-row", "flex-wrap", "py-4") }>
            <aside className={ classNames("w-full", "sm:w-1/3", "md:w-1/4", "px-2") }>
                <div className="sticky top-0 p-4 w-full">
                    { left }
                </div>
            </aside>
            <main role="main" className={ classNames("w-full", "sm:w-2/3", "md:w-3/4", "pt-1", "px-2") }>
                { right }
            </main>
        </div>
    </div>
};

const Layout: React.FC<IProps> = (props)=>{
    const { layout, slots } = props;

    return (
        <>
            <Theme>
                <div className={ classNames("--x-prose", "dark:--x-prose-invert") }>
                    <Lamp/>
                    { layout === 'lr' ?
                        (<LRLayout
                            slots={ slots }
                        >
                        </LRLayout>) :
                        (<MidLayout
                            slots={ slots }
                        >
                        </MidLayout>) }
                </div>
            </Theme>
        </>
    );
}

export default Layout;
