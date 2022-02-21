import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
function HeaderComponent(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{background: 'white'}}>
        <Toolbar>
          <Typography variant="h6" component="div" color={'InfoText'} sx={{ flexGrow: 1 }}>
            LorDev
          </Typography>
          <Button color="info">Home</Button>
          <Button color="info">Our Project</Button>
          <Button color="info">Service</Button>
          <Button color="info">FeedBack</Button>
          <Button color="info">FAQ</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

HeaderComponent.propTypes = {}

export default HeaderComponent
