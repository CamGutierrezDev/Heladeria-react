// theme/index.js
import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#EC69B0', // Rosa vibrante
        },
        secondary: {
            main: '#fdc20c', // Amarillo dorado
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#FFFFFF', // Blanco
        },
        text: {
            primary: '#000000', // Negro para texto principal
        },
    },
    typography: {
        fontFamily: 'Open Sans, sans-serif', // Tipografía moderna y legible
    },
});
