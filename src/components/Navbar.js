import React from 'react'
import {AppBar, Container, Toolbar, Typography, Box, Button} from '@mui/material'
import {Link, useNavigate} from 'react-router-dom'
export default function Navbar() {
    const navigate = useNavigate()
  return (
    <div>
        <Box sx={{flexGrow: 1}}>
            <AppBar position='static' color='transparent'>
                <Container>
                    <Toolbar>
                        <Typography variant='h6' sx={{flexGrow: 1}}>
                            <Link to='/' style={{textDecoration:'none', color: '#00539CFF'}}>
                                Guest Web
                            </Link>
                        </Typography>
                        <Button variant='contained' color='secondary' onClick={() => navigate('/guest/add')}>
                            New Guest
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    </div>
  )
}
