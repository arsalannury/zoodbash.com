import {createTheme,ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    components : {
        MuiTooltip : {
            styleOverrides : {
                tooltip : {
                    fontFamily: 'unset',
                    fontSize: '.8em'
                }
            }
        }
    }
})

export default function TooltipTheme({children}) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}