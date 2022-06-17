import { Divider, Link, Typography } from '@mui/material'
import { Box, fontFamily } from '@mui/system'
import EmailIcon from '@mui/icons-material/Email';
import React from 'react'

function Footer() {
    return (<>
        <Box width="100%" sx={{
            bgcolor: "#d8dcf0",
            paddingX: "10%",
            paddingY: "50px"
        }}>
            <Box display="flex" justifyContent="space-between">
                <Box>
                    <Box sx={{ display: {md: "flex", xs: "none"}}} alignItems="center">
                        <Typography variant='h4' sx={{
                            fontFamily: "Red Hat Display",
                            fontWeight: "bold",
                        }}>CommonlyCreative</Typography>
                    </Box>
                    <Box marginTop="15px">
                        <Box display="flex"><EmailIcon sx={{ marginRight: "10px" }} /><Link href="mailto: amariwillis.2000@gmail.com" underline="none" color="inherit">amariwillis.2000@gmail.com</Link></Box>
                    </Box>
                </Box>
                <Box sx={{ display: {xs: "none", md: "inherit"}}}>
                    <img src="images/CreativesIcon.png" width="100%" style={{ maxWidth: "150px"}} />
                </Box>
            </Box>
            <Box display="flex" alignItems="center" marginTop="20px">
                <Box>
                    <Typography variant='h6' sx={{
                        fontFamily: "Red Hat Display",
                        fontWeight: "bold",
                    }}>General</Typography>
                    <Box><Link href="#" underline="none" color="inherit">Terms And Conditions</Link></Box>
                </Box>
            </Box>
        </Box>
    </>)
}

export default Footer