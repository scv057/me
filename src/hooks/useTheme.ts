import React, {useContext} from "react";


interface IColorMap {
    [key: string]: IColorMap;
}

interface IColors {
    [key: string]: string | [number, number, number];
}

const colorMap: IColorMap = {
    dark: {

    },
    light: {

    }
}

export const ThemeContext = React.createContext<string>('light');

export function useTheme() {
    const theme = useContext(ThemeContext);

    return colorMap[theme];
}
