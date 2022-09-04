import {useEffect, useState} from 'react'
import {Card, CardContent, Typography, Button} from '@mui/material'

export default function GuestList() {

    const [guests, setGuest] = useState([])

    const loadGuest = async () => {
        const res = await fetch('http://localhost:3333/guest')
        const data =  await res.json()
        setGuest(data)
        // console.log(data)
    }

    useEffect(()=>{
        loadGuest()
    },[])

    const handleDelete = async (id) => {
        console.log(id)
        const res = await fetch(`http://localhost:3333/guest/${id}`, {
            method: "DELETE",
        })

        const data = await res.json()
        // console.log(data)

        window.location.reload(true)
    }

    const handleUpdate = async (id) => {

    } 

  return (
    <>
        <h1>[Admin page] Guest List</h1>
        {
            guests.map(guest => (
                <Card style={{marginBottom: '.7rem' , backgroundColor: '#00539CFF'}}>
                    <CardContent style={{display: "flex", justifyContent: "space-between"}}>
                        <div style={{color: "white"}}>
                            <Typography>{guest.nama}</Typography>
                            <Typography>{guest.note}</Typography>
                        </div>
                        <div>
                            <Button variant='contained' color="inherit" onClick={()=>console.log('edit')}>
                                Edit 
                            </Button>

                            <Button variant='contained' color="inherit" onClick={()=>handleDelete(guest.id)} style={{marginLeft: ".5rem"}}>
                                Delete 
                            </Button>
                        </div>

                    </CardContent>
                </Card>
            ))
        }
    </>
  )
}
