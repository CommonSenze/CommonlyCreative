import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TournamentsPage from "./pages/tournaments";
import HomePage from "./pages/home";
import CreateTournament from "./pages/createtournament";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';

const theme = createTheme({
    palette: {
        secondary: {
            main: "#ff4a4a"
        }
    },
    typography: {
        fontFamily: 'Work Sans',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            
          @font-face {
            font-family: 'Work Sans', sans-serif;
            font-style: normal;
            font-display: swap;
          }
        `,
        },
        MuiTabs: {
            button: {
                backgroundColor: "red"
            }
        }
    },
});

const Router = (props) => {

    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterLuxon}>
                <CssBaseline />
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route exact path="/events" element={<TournamentsPage />} />
                        <Route exact path="/create-event" element={<CreateTournament />} />
                        {/* <Route exact path="/forums/:subcategory" component={forums} />
                    <Route exact path="/forums/:subcategory/create-thread" component={forums} />
                    <Route
                        exact
                        path="/forums/:category/:thread"
                        component={forums}
                    />
                    <Route exact path="/" component={home} />
                    <Route exact path="/login" component={login} />
                    <Route exact path="/search" component={search} />
                    {/* <PrivateRoute exact path="/cool" isAuth={false} component={settings} /> */}
                        {/* <PrivateRoute exact path="/dashboard" isAuth={true} component={dashboard} /> */}
                        {/* <Route
                        path="/profile/:username"
                        render={(props) => {
                            return <Profile {...props} />;
                        }}
                    />
                    <Route component={fourzerofour} /> */}
                    </Routes>
                </BrowserRouter>
            </LocalizationProvider>
        </ThemeProvider>
    );
};

export default Router;
