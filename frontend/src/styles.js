import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        // mode: 'dark',
        primary: {
        main: '#0F1924',
          dark: '#343541',
          light: '#FFFFFF',
        },
        secondary: {
          main: '#0F1924',
          dark: '#018786',
          light: '#67DABC',
        },
        background: {
          default: '#121212',
          paper: '#1E1E1E',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B3B3B3',
        },
      },
      components: {
        MuiTextField: {
          styleOverrides: {
            root: {
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#B0B8C4',
                  },
              '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: '#FFFFFF', // hover border color
              },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#90CAF9', // selected/focused border color
              },
              // You can add more overrides here
            },
          },
        },
        MuiInputLabel: {
            styleOverrides: {
              root: {

                color: '#FFFFFF',
                "&.Mui-focused": {
                    "color": "#90CAF9",
                    "&.Mui-focused": {
                      "color": "#90CAF9"
                    }
                  }
                }
              },
          
          },
        MuiFormHelperText: {
              styleOverrides: {
                root: {
                  color: '#FFFFFF', 
                },
              },
            },
      },
})