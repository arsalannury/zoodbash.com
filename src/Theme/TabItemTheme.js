import {createTheme,ThemeProvider} from '@mui/material/styles';


const theme = createTheme({
    components : {
        MuiTypography : {
            styleOverrides : {
                root : {
                    fontFamily: 'font-sans',
                    color: '#1976d2',
                    fontSize: '.8em'
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