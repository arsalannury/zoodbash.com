import {createTheme,ThemeProvider} from '@mui/material/styles';


const theme = createTheme({
    components : {
        MuiTypography : {
            styleOverrides : {
                root : {
                    fontFamily: 'unset'
                }
            }
        }
    }
});

export default function TabComponentTheme({children}){
    return(
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
    )
}