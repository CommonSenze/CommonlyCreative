import { Button, Container, Divider, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Navbar from '../components/navbar'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


async function getRegisteredTournaments(){
    const tournaments = await fetch("localhost:8080/api/event/list").then(res => res.json());

    if (tournaments === undefined|| tournaments.length === 0) return;
    
    tournaments.forEach(tournament => {
        console.log(tournament)
    });
}

function getTournamentInformation(tournament){
    // Connect to database and uptain tournament information
}

function Tournament(props) {
    

    return (<Grid item xs={props.size}>
        <Paper sx={{
            padding: "10px",
            backgroundColor: "#f2f2f2",
            border: "1px solid #9c9c9c",
        }}>
            <Box display="flex">
                <Box width="40%" padding="5px"><img src="images/minecraftwallpaper.png" width="100%" style={{ borderRadius: "5px" }} /></Box>
                <Box flex="1 1 auto" marginLeft="20px" paddingRight="5px">
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ display: { xs: 'inline' }, fontWeight: "bold", }}
                    >
                        Minecraft
                    </Typography>
                    <Divider sx={{ marginY: "10px" }} />
                    <Box display="flex" justifyContent="space-between">
                        <Typography
                            variant="body1"
                            component="div"
                            sx={{ display: { xs: 'inline' }, fontWeight: "bold", }}
                        >
                            Date: TBA
                        </Typography>
                        <Typography
                            variant="body1"
                            component="div"
                            sx={{ display: { xs: 'inline' }, fontWeight: "bold", }}
                        >
                            Currently Enrolled: {props.enrolled}
                        </Typography>
                    </Box>
                    <Box>
                        {props.children}
                    </Box>
                    <Box display="flex" justifyContent="end"><Button variant='contained'>Enroll Here</Button></Box>
                </Box>
            </Box>
        </Paper>
    </Grid>)
}

function TournamentsPage(props) {
    const navigate = useNavigate();
    return (<>
        <Navbar />
        <Container maxWidth="xl">
            <Grid container spacing={2} sx={{
                paddingY: "50px",
            }}>
                <Grid item xs={12}>
                    <Container>
                        <Paper sx={{
                            padding: "10px",
                            backgroundColor: "#f2f2f2",
                            border: "1px solid #9c9c9c",
                        }}>

                            <Typography
                                variant="h2"
                                component="div"
                                sx={{ display: { xs: 'inline' }, fontWeight: "bold", }}
                            >
                                Event
                            </Typography>
                            <Divider sx={{ marginY: "10px" }} />
                            <Typography
                                variant="body"
                                component="div"
                                sx={{ display: { xs: 'inline' }, }}
                            >
                                This is where you will be updated on tournament information and other event inquiries.
                            </Typography>
                            <Box display="flex" justifyContent="end"><Button variant='contained' onClick={() => navigate("/create-event")}>Create Tournament</Button></Box>
                        </Paper>
                    </Container>
                </Grid>
                <Tournament size={8}>
                    The minecraft tournament will be a Soup PvP Hardcore Games event that will be a last man standing.
                </Tournament>
            </Grid>
        </Container>
    </>)
}

export default TournamentsPage