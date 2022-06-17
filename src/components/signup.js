import { Button, FormControl, Input, InputLabel, Link, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Signup() {
    return (
        <Box component="form" padding="15px">
            <Box marginBottom="10px">
                <FormControl fullWidth variant="outlined">
                    <TextField id="component-simple" label="Discord Tag" variant="outlined" />
                </FormControl>
            </Box>
            <Box marginBottom="10px">
                <FormControl fullWidth variant="outlined">
                    <TextField id="component-simple" label="Password" type="password" variant="outlined" />
                </FormControl>
            </Box>
            <Box marginBottom="10px">
                <FormControl fullWidth variant="outlined">
                    <TextField id="component-simple" label="Confirm Password" type="password" variant="outlined" />
                </FormControl>
            </Box>
            <Button variant='contained'><Box fontWeight="bold">Sign Up</Box></Button>
            <Box marginTop="10px">Already have an account? <Link href="#" underline="none">Log in</Link></Box>
        </Box>
    )
}

export default Signup