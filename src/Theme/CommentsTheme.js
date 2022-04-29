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