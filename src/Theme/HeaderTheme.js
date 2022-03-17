import { createTheme, ThemeProvider} from '@mui/material/styles';


const theme = createTheme({
    components : {
           MuiTypography : {
            styleOverrides : {
                root : {
                    fontFamily : 'font-sans' , 
                    fontSize: '.9em'
                }
            }
        }
    }
})


function HeaderTheme({children}) {
  return (
      <>
      <ThemeProvider theme={theme}>
          {children}
      </ThemeProvider>
      </>
  )
}

export default HeaderTheme