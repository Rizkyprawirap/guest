import React from 'react'
import {Grid, Card, Typography, CardContent, TextField, Button, CircularProgress} from '@mui/material'
import {useState, useEffect} from 'react'
import {useNavigate}from 'react-router-dom'


export default function GuestForm() {

    const [guest, setGuest] = useState({
        nama: '',
        address: '',
        phone: '',
        note: '',
    })

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)

        // console.log(guest)
        const res = await fetch('http://localhost:3333/guest', {
            method: 'POST',
            body: JSON.stringify(guest),
            headers:{ "Content-Type": "application/json" },
        })

        const data = await res.json()
        // console.log(data)
        setLoading(false)
        navigate('/')
    }

    const handleChange = e => 
        setGuest({...guest, [e.target.name] : e.target.value})
    

  return (
    <Grid container direction='column' alignItems= 'center' justifyContent='center'>
        <Grid item xs={3}>
            <Card sx={{mt: 5}} style={{padding: "1rem"}}>
                <Typography variant='5' textAlign='center' color='#00539CFF'>
                    Register
                </Typography>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <TextField variant='filled' label='Enter your name' sx={{display: 'block', margin: '.5rem 0'}} inputProps={{style: {color:'black'}}} name="nama" onChange={handleChange}/>
                        <TextField variant='filled' label='Enter your address' sx={{display: 'block', margin: '.5rem 0'}} name="address" onChange={handleChange}/>
                        <TextField variant='filled' label='Enter your phonenumber' sx={{display: 'block', margin: '.5rem 0'}} name="phone" onChange={handleChange}/>
                        <TextField variant='filled' label='Enter your note' multiline rows={4} sx={{display: 'block', margin: '.5rem 0'}} name="note" onChange={handleChange}/>

                        <Button variant='contained' color='secondary' type='submit' disabled={!guest.nama || !guest.address || !guest.phone || !guest.note}>
                            {loading ? <CircularProgress
                                color= 'inherit'
                                size = {24}
                            /> : 'Submit'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
  )
}
