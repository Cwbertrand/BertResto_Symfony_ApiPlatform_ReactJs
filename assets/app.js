import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

import App from "./react/routes/App";
import './styles/fonts.css'



const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif',
    }
});
ReactDOM.createRoot(document.getElementById('root'))
.render(
    <React.StrictMode>
        <ThemeProvider theme={theme} >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
)