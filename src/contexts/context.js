'use client';

import { createContext, useContext, useState } from "react";
import StyledComponentsRegistry from "@/lib/jslib";

const ThemeContext = createContext({})

export const ThemeContextProvider = ({ children }) => {
    const [color, setColor] = useState('red');

    const onLoaded = () => setColor('loaded');

    return (
        <>
            <StyledComponentsRegistry onLoaded={onLoaded} />
            <ThemeContext.Provider value={{ color, setColor }}>
                {children}
            </ThemeContext.Provider>
        </>
    )
};

export const useThemeContext = () => useContext(ThemeContext);