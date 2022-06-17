import { AppBar, Box, Button, Drawer, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tab, Tabs, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import React, { PureComponent } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from '@mui/system';
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';

function checkValue(value) {
    for (const page in pages) {
        if (value === pages[page]) return value;
    }
    return false;
}

const pages = {
    statistics: "/statistics",
    tournaments: "/events"
}



export default function Navbar(props) {
    const navigate = useNavigate();
    const [page, setPage] = useState(window.location.pathname);
    const [drawer, setDrawer] = useState(false);

    function changePage(value) {
        setPage(value)
    }

    function toggleDrawer(value) {
        setDrawer(value);
    }

    useEffect(() => {
        navigate(page)
    }, [page])

    const loadDrawer = () => {
        return (<Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
        >
            <List>
                <ListItem key="Login" disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <LoginIcon />
                        </ListItemIcon>
                        <ListItemText primary="Login" />
                    </ListItemButton>
                </ListItem>
                <ListItem key="SignUp" disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AssignmentIndIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sign Up" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>)
    }

    const mobileViewOnly = {
        sx: { display: { xs: "flex", lg: "none" } }
    }

    const desktopViewOnly = {
        sx: { display: { xs: "none", lg: "contents" } }
    }

    return (
        <AppBar position="static" sx={{ boxShadow: "none", bgcolor: "transparent", borderBottom: "1px solid #d1d1d1", color: "black" }}>
            <Container maxWidth="xl">
                <Box sx={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
                    <Box sx={{ flexGrow: 1, display: "flex", flex: "1 1 auto", alignContent: "end", justifyContent: "left", alignItems: "center" }}>
                        <Link href='/' display="contents" color="inherit" underline='none'>
                            <img src='logo192.png' style={{ maxWidth: '60px', margin: "10px", marginLeft: "20px" }} />
                            <Box {...desktopViewOnly}>
                                <Typography
                                    variant="h3"
                                    noWrap
                                    component="div"
                                    sx={{ display: { xs: 'inline' } }}
                                >
                                    Commonly
                                </Typography>
                                <Typography
                                    variant="h3"
                                    noWrap
                                    component="div"
                                    sx={{ display: { xs: 'inline' }, fontWeight: "bold" }}
                                >
                                    Creative
                                </Typography>
                            </Box>
                        </Link>
                        <Box {...desktopViewOnly} display="contents">
                            <Tabs
                                textColor="secondary"
                                indicatorColor="secondary"
                                aria-label="secondary tabs example"
                                value={checkValue(page)}
                                sx={[{
                                    marginLeft: "40px",
                                    height: "100%",
                                    fontWeight: "bold",
                                    '& .MuiTabs-flexContainer': {
                                        height: "100%",
                                    },
                                }, (theme) => ({
                                    '& button': {
                                        "&:hover": {
                                            color: theme.palette.secondary.main,
                                            opacity: 0.6
                                        }
                                    }
                                })]}
                            >
                                <Tab value={pages.statistics} label="Statistics" onClick={() => { changePage(pages.statistics) }} />
                                <Tab value={pages.tournaments} label="Tournaments" onClick={() => { changePage(pages.tournaments) }} />
                            </Tabs>
                        </Box>
                    </Box>
                    <Box {...desktopViewOnly}>
                        <Box sx={{ display: "flex", alignContent: "center", justifyContent: "center", alignItems: "center", marginRight: "30px" }}>
                            <Button color="inherit" variant="outlined" size="large">Login</Button>
                            <Button color="inherit" variant="contained" size="large" sx={{
                                backgroundColor: "#ff4a4a",
                                boxShadow: "none",
                                color: "white",
                                marginLeft: "10px",
                                "&:hover": {
                                    backgroundColor: "#b83232",
                                    boxShadow: "none",
                                }
                            }}>Sign Up</Button>
                        </Box>
                    </Box>
                    <Box {...mobileViewOnly}>
                            <Button
                                variant="soft"
                                color="neutral"
                                endIcon={<KeyboardArrowDown fontSize="lg" />}
                                onClick={() => toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </Button>
                            <Drawer
                                anchor="right"
                                open={drawer}
                                onClose={() => toggleDrawer(false)}
                            >
                                {loadDrawer()}
                            </Drawer>
                        </Box>
                </Box>
            </Container>
        </AppBar>
    )
}