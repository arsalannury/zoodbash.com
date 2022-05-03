import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: "font-sans",
          fontSize: ".8em",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          fontFamily: "font-sans",
          fontSize: ".8em",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          margin: "10px 0 0 0",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "font-sans",
          fontSize: ".8em",
        },
      },
    },
  },
});

export default function TextFieldTheme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
