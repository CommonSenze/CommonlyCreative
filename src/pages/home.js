import React from 'react'
import { Box, Button, Divider, Grid, Paper, Typography } from '@mui/material'
import Navbar from '../components/navbar'
import { Container } from '@mui/system'
import Signup from '../components/signup'
import Footer from '../components/footer'

function GridItem(props) {
    const { size, header } = props;
    return (<Grid item xs={12} lg={size}>
        <Paper sx={{
            padding: "10px",
            backgroundColor: "#f2f2f2",
            border: "1px solid #9c9c9c",
            ...props.sx
        }}>
            <Typography
                variant={header.size}
                component="div"
                sx={{ display: { xs: 'inline' }, fontWeight: "bold", }}
            >
                {header.text}
            </Typography>
            <Divider sx={{ marginY: "10px" }} />
            {props.children}
        </Paper>
    </Grid>)
}

function HomePage(props) {
    return (
        <Box display="flex" alignContent="center" justifyContent="center" alignItems="center" flexDirection="column">
            <Navbar />
            <Container maxWidth="xl">
                <Grid container spacing={2} sx={{
                    paddingY: "50px",
                }}>
                    <GridItem size={5} header={{
                        size: "h4",
                        text: "Welcome!"
                    }} sx={{
                        height: "100%"
                    }}>
                        <Box paddingX='5px'>
                            From the CommonlyCreative staff and I, CommonSenze, I welcome you to the CommonlyCreative Website!
                            Please forgive its amateur layout. I am in the process of reteaching myself React JS.
                        </Box>
                        <Divider sx={{ marginY: "4px" }} />
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ display: { xs: 'inline' }, fontWeight: "bold", }}
                        >
                            Website Info
                        </Typography>
                        <Box paddingX="5px">
                            From the CommonlyCreative staff and I, CommonSenze, I welcome you to the CommonlyCreative Website!
                            Please forgive its amateur layout. I am in the process of reteaching myself React JS.
                        </Box>
                    </GridItem>
                    <GridItem size={4} header={{
                        size: "h5",
                        text: "Link Accounts"
                    }}>
                        <Box paddingX='5px'>Be sure to log in to be able to get a more personalized experience.</Box>
                        <Signup />
                    </GridItem>
                    <GridItem size={3} header={{
                        size: "h5",
                        text: "Link Accounts"
                    }}>
                        <Box paddingX='5px'>Be sure to log in to be able to get a more personalized experience.</Box>
                        <Signup />
                    </GridItem>
                    {/* Row 2 */}
                    <GridItem size={9} header={{
                        size: "h4",
                        text: "Community Post"
                    }}>
                        <Box marginBottom="10px" paddingRight="10px" paddingLeft="5px" display="flex" justifyContent="space-between">
                            <Box>All updates involving CommonlyCreative will be posted here.</Box>
                            <Button variant='contained' color="secondary"><Box fontWeight="bold">Create Post</Box></Button>
                        </Box>
                    </GridItem>
                    <Grid container item xs={12} lg={3} spacing={2}>
                        <GridItem size={12} header={{
                            size: "h5",
                            text: "We're Hiring!"
                        }}>
                            <Box marginBottom="10px" paddingX='5px'>
                                We're currently in need of people to join the CommonlyCreative team.
                                While on our team, you'll get hands on experience with how it is to set up events,
                                moderate an audience, and even see how to orchestrate other large scale projects.
                                You're help will be critical to ensure CommonSenze's goal is fulfilled, to give great
                                entertainment to you guys.
                                If you have the free time to help assist us in anyway, than please fill out this form.
                                We'd love to have you join the team and help us.
                            </Box>
                            <Button variant='contained' color="secondary"><Box fontWeight="bold">Apply Here</Box></Button>
                        </GridItem>
                        <GridItem size={12} header={{
                            size: "h5",
                            text: "Join Stream!"
                        }}>
                            <Box paddingX="5px">
                                <Box>If I'm streaming, be sure to check me out!</Box>
                                <Box display="flex" justifyContent="center">
                                    <a href="https://twitch.tv/commonsenze" style={{ display: "contents", }}>
                                        <img src="images/twitchtextlogo.png" width="50%" />
                                    </a>
                                </Box>
                            </Box>
                        </GridItem>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </Box>
    )
}

export default HomePage