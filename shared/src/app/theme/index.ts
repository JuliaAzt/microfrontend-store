import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#02d72f",
    },
    secondary: {
      main: "#1B2126",
    },
  },
  components: {
    MuiCard: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            padding: "16px 32px",
            borderRadius: "16px",
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderColor: "#02d72f",
          },
        },
      ],
    },

    MuiButton: {
      variants: [
        {
          props: {},
          style: {
            textTransform: "none",
            borderRadius: "40px",
            boxShadow: "none",
            cursor: "pointer",
            "&:hover": {
              boxShadow: "none",
            },
          },
        },
        {
          props: { variant: "contained" },
          style: {
            color: "white",
          },
        },
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            backgroundColor: "#1B2126",
            color: "white",
          },
        },
        {
          props: { variant: "text" },
          style: {
            color: "secondary",

            "&:hover": {
              backgroundColor: "transparent",
              color: "#02d72f",
            },
          },
        },
      ],
    },
  },
});

export default theme;
