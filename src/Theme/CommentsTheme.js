import { createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    components : {
        MuiTypography : {
            styleOverrides : {
                root : {
                    fontFamily : "font-sans",
                    textAlign : 'right',
                    fontSize : '.8em'
                }
            }
        },
        MuiTouchRipple : {
            styleOverrides : {
                root : {
                    fontFamily : "font-sans",
                    fontSize : '.8em'
                }
            }
        },
        MuiButton : {
            styleOverrides : {
                root : {
                    fontFamily : "font-sans",
                    fontSize : '.8em',
                    margin : '20px 0 0 0'
                }
            }
        }
    }
})

function CommentsTheme({children}) {
  return (
   <ThemeProvider theme={theme}>
        {children}
   </ThemeProvider>
  )
}

export default CommentsTheme