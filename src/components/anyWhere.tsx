import React, { useContext } from "react";
import { ThemeContext } from "./theme";

type IProps = {

}

const AnyWhere: React.FC<IProps> = () => {
    const {theme} = useContext(ThemeContext);

    console.log(`render`);

    return (
        <div>{ theme }</div>
    );
};

export default AnyWhere;
