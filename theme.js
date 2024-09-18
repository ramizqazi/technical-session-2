import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#2D2D2D",
          fontFamily: "Montserrat",
        },
      },
    },
  },
});

export default theme;
