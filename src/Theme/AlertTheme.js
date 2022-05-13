import { createTheme, ThemeProvider} from '@mui/material/styles';


const theme = createTheme({
    components : {
        MuiPaper : {
            styleOverrides : {
                root : {
                    margin: '40px'
                }
            }
        },
        MuiAlert: {
            styleOverrides : {
                message : {
                    fontFamily: 'font-sans',
                    color: "#4caf50",
                    marginRight: '10px'
                }
            }
        }
    }
})

export const AlertTheme = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}