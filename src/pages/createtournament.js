import { Button, Divider, FormControl, Input, InputAdornment, InputLabel, Link, MenuItem, OutlinedInput, Paper, Select, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import { useState } from 'react'
import Navbar from '../components/navbar'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { DateTime } from 'luxon'
import Footer from '../components/footer'

async function createTournament(data) {
    fetch("localhost:8080/api/event/create", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => console.log(data))
}

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;

    const i = Math.floor(Math.log(bytes) / Math.log(k));



    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + i;
}

function CreateTournament() {
    const [date, setDate] = useState(new Date());
    const [amount, setAmount] = useState(0);
    const [invalidImg, setInvalidImg] = useState(false);

    const changeAmount = (event) => {
        let number = event.target.value;
        if (isNaN(number)) return;
        setAmount(Number(number))
    }

    const getBase64 = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        var promise = new Promise((res, rej) => {
            reader.onload = () => {
                res(reader.result)
            }
            reader.onerror = (error) => {
                rej(error)
            }
        });
        return promise;
    }

    const handleChange = (value) => {
        setDate(value)
    }

    const getImageSize = (file) => {
        var img = new Image();
        var promise = new Promise((res, rej) => {
            img.onload = function () {
                const imgWidth = img.naturalWidth;
                const imgHeight = img.naturalHeight;
    
                res({
                    width: imgWidth, 
                    height: imgHeight
                });
            };
        });
        getBase64(file).then(res => {
            img.src = res;
        })
        return promise;
    }

    return (<>
        <Navbar />
        <Container>
            <Paper sx={{
                padding: "10px",
                marginY: "50px",
                backgroundColor: "#f2f2f2",
                border: "1px solid #9c9c9c",
            }}>
                <Typography variant='h3' >
                    Event Information
                </Typography>
                <Divider />
                <Box component="form" id="eventForm" padding="15px" onSubmit={event => {
                    event.preventDefault();
                    var form = new FormData(document.forms.eventForm);
                    var data = {
                        name: form.get("event-name"),
                        description: form.get("event-description"),
                        date: form.get("event-date"),
                        img: form.get("event-img"),
                        name: form.get("event-name"),
                    }
                    console.log(form.get("event-img"))
                }}>
                    <Box marginBottom="10px">Please ensure you type all the infromation correctly.</Box>
                    <Box marginBottom="10px">
                        <FormControl fullWidth variant="outlined">
                            <OutlinedInput name="event-name" inputProps={{ style: { fontSize: "15px", fontWeight: "bold" } }} id="component-simple" placeholder="Name" />
                        </FormControl>
                    </Box>
                    <Box marginBottom="10px">
                        <FormControl fullWidth variant="outlined">
                            <OutlinedInput name="event-description" multiline minRows={2} id="component-simple" placeholder="Description" />
                        </FormControl>
                    </Box>
                    <Box marginBottom="20px">
                        <FormControl>
                            <InputLabel htmlFor="trying-tomake-unique">Tournament Winnings</InputLabel>
                            <OutlinedInput name="event-winnings" startAdornment={<InputAdornment position="start">$</InputAdornment>} id="trying-tomake-unique" label="Tournament Winnings" value={amount} onChange={changeAmount} />
                        </FormControl>
                    </Box>
                    <Box marginBottom="10px">
                        <FormControl variant="outlined">
                            <DesktopDatePicker
                                label="Event Date"
                                inputFormat="MM/dd/yyyy"
                                value={date}
                                onChange={handleChange}
                                renderInput={(params) => <TextField name='event-date' {...params} />}
                            />
                        </FormControl>
                    </Box>
                    <Box marginBottom="10px">
                        <Box display="block" marginBottom="5px">Upload Image Thumbnail</Box>
                        <Box display="block" marginBottom="5px">Image Must be Under </Box>
                        <input type="file" id="myFile" onChange={(event) => {
                            let file = event.target.files[0];
                            let size = formatBytes(file.size).split(" ");
                            if (size[0] > 1&&size[1] >= 2){
                                console.log("MAX")
                                event.preventDefault()
                                return;
                            }
                            getImageSize(file).then(res => {
                                if (res.width) {

                                }
                            })
                        }} name="event-img" />
                    </Box>

                    <Button type="submit" variant='contained'><Box fontWeight="bold">Create Event</Box></Button>
                </Box>
            </Paper>
        </Container>
        <Footer />
    </>)
}

export default CreateTournament