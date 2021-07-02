import React, { useEffect, useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import Checkbox from "@material-ui/core/Checkbox";
import {
  createMuiTheme,
  ThemeProvider,
  withStyles,
  makeStyles,
} from "@material-ui/core/styles";
import { FormControlLabel } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { blue, red } from "@material-ui/core/colors";
import "@fontsource/roboto";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Slide from "@material-ui/core/Slide";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

// const useStyles = makeStyles({
//   root:{
//     background:"red",
//     border :0,
//     borderRadius:0,
//     color: 'white',
//     padding : '0 30px'
//   }
// })

const theme = createMuiTheme({
  palette: {
    type: "light",
    background: {
      paper: "#000",
      default: "#000",
    },
    primary: {
      main: blue[600],
    },
    secondary: {
      main: blue[300],
    },
  },
  typography: {
    // color: "white",
    button: {
      textTransform: "none", // button not capitalize
    },
  },
  // shadows: ["none"],
  // type: "light",

  // root: {
  //   textDecoration: "none",
  // },

  overrides: {
    MuiPaper: {
      root: {
        boxShadow: "none",
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: "rgba(255, 0, 0, 0.75)",
      },
    },
    MuiAppBar: {
      root: {
        background: "black",
        boxShadow: "none",
        color: "white",
      },
      colorPrimary: {
        backgroundColor: "transparent",
      },
    },
    MuiIconButton: {
      root: {
        marginLeft: -12,
        marginRight: 5,
        color: "white",
      },
    },
  },
});

// const WhiteTextTypography = withStyles({
//   root: {
//     color: "#FFFFFF",
//   },
// })(Typography);

function CheckBoxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            "aria-label": "secondary checkbox",
          }}
        />
      }
      label="Zgadzam się na warunki"
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbarButtons: {
    marginLeft: "auto",
  },
  appBarTransparent: {
    backgroundColor: "transparent",
  },
  appBarSolid: {
    backgroundColor: "rgba(67, 129, 168)",
  },
}));

export default function App() {
  const classes = useStyles();

  const [navBackground, setNavBackground] = useState("appBarTransparent");
  const navRef = React.useRef();
  //navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 310;
      if (show) {
        setNavBackground("appBarSolid");
      } else {
        setNavBackground("appBarTransparent");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <div className="App" style={{ backgroundColor: "white" }}>
          <header className="App-header">
            <AppBar position="fixed" className={classes[navRef.current]}>
              <Toolbar>
                <IconButton
                  edge="start"
                  // className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  // className={classes.title}
                >
                  B24U
                </Typography>
                <div className="App-menu-buttons">
                  <Button color="inherit">Login</Button>
                </div>
              </Toolbar>
            </AppBar>
            <p>Lorem ipsum</p>
          </header>
          <body className="App-body">
            <img src={logo} className="App-logo" alt="logo" />
            <div style={{ padding: 20, width: "80%" }}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
              >
                <Grid item xs>
                  <Paper style={{ height: 175, minWidth: 150, width: "100%" }}>
                    tekst 1
                  </Paper>
                </Grid>
                <Grid item xs>
                  <Paper style={{ height: 175, minWidth: 150, width: "100%" }}>
                    tekst 2
                  </Paper>
                </Grid>
                <Grid item xs>
                  <Paper style={{ height: 175, minWidth: 150, width: "100%" }}>
                    tekst 3
                  </Paper>
                </Grid>
              </Grid>
            </div>
            <TextField
              variant="outlined"
              color="secondary"
              type="email"
              label="Imię"
              placeholder="Tutaj wpisz swoje imię"
            />
            <CheckBoxExample />
            <ButtonGroup>
              {/* <WhiteTextTypography> */}
              <Button
                startIcon={<SaveIcon />}
                color="primary"
                variant="contained"
                size="small"
              >
                Zapisz
              </Button>
              <Button
                startIcon={<CancelIcon />}
                // color="secondary"
                variant="contained"
                size="small"
              >
                Anuluj
              </Button>
              {/* </WhiteTextTypography> */}
            </ButtonGroup>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </body>
        </div>
      </div>
    </ThemeProvider>
  );
}
