import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext, useState} from "react";

interface useThemeResult {
    theme?: Theme
    toggleTheme?: () => void;
}

export function useTheme(): useThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

        if (setTheme !== undefined) {
            console.log(2)
            setTheme(newTheme);
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        }
        console.log(3)
    }

    return {theme, toggleTheme};
}