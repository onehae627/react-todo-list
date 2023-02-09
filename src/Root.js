import React,{ useEffect } from "react";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import { HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import App from "./App";
import { immerable } from "immer";


const muiThemePaletteKeys = [
    "background",
    "common",
    "error",
    "grey",
    "info",
    "primary",
    "secondary",
    "success",
    "text",
    "warning",
  ];


export default function Root() {
    const theme = createTheme({
        typography: {
          fontFamily: ["GmarketSansMedium"]
        },
        palette: {
          primary: {
            main: "#1c8c3a",
            contrastText: "#ffffff"
          }
        }
    });

    useEffect(() => {
        const r = document.querySelector(':root');
        
        muiThemePaletteKeys.forEach((paletteKey) => {
          const themeColorObj = theme.palette[paletteKey];
          
          for ( const key in themeColorObj ) {
            if (Object.hasOwnProperty.call(themeColorObj, key)) {
              const colorVal = themeColorObj[key];
              r.style.setProperty(`--mui-color-${paletteKey}-${key}`, colorVal);
            }
          }
        });
      }, [theme.palette]);

      return (
        <>
        <ThemeProvider theme={theme}>
             <CssBaseline />
             <RecoilRoot>
                <HashRouter>
                 <App />
                </HashRouter>
             </RecoilRoot>
        </ThemeProvider>
        </>
      );
    
}