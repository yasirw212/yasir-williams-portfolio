import { createTheme } from "@mui/material"
import React from "react"

export const tokens = 
    {
        primary: {
            100: "#dfdfdf",
            200: "#c0c0c0",
            300: "#a0a0a0",
            400: "#818181",
            500: "#616161",
            600: "#4e4e4e",
            700: "#3a3a3a",
            800: "#272727",
            900: "#131313"
        },
        
        secondary: {
            100: "#ccdce9",
            200: "#99b8d3",
            300: "#6695be",
            400: "#3371a8",
            500: "#004e92",
            600: "#003e75",
            700: "#002f58",
            800: "#001f3a",
            900: "#00101d"
        },
}





const themeSettings = () => {
    const colors = tokens

    return {
        palette: {
            background: {
                default: colors.primary[100]
            },
            primary: {
                main: colors.primary[500]
            },
            secondary: {
                main: colors.secondary[700]
            }
        },
        typography: {
            fontFamily: ['Manrope', 'sans-serif'].join(','),
            fontSize: 12,
            h1: {
                fontFamily: ['Manrope', 'sans-serif'].join(','),
                fontSize: 40,
            },
            h2: {
                fontFamily: ['Manrope', 'sans-serif'].join(','),
                fontSize: 32,
            },
            h3: {
                fontFamily: ['Manrope', 'sans-serif'].join(','),
                fontSize: 24,
            },
            h4: {
                fontFamily: ['Manrope', 'sans-serif'].join(','),
                fontSize: 20,
            },
            h5: {
                fontFamily: ['Manrope', 'sans-serif'].join(','),
                fontSize: 16,
            },
            h6: {
                fontFamily: ['Manrope', 'sans-serif'].join(','),
                fontSize: 14,
            }
        }
    }
}

const themeContext = React.createContext()

function ThemeContextProvider(props){

    const theme = React.useMemo(() => createTheme(themeSettings()), [])

    return (
        <themeContext.Provider value={{theme: theme}}>
            {props.children}
        </themeContext.Provider>
    )
}

export {themeContext, ThemeContextProvider}