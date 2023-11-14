import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Header from '../componants/Header';

const Textutils = () => {

const [ text,setText ] = useState('');


const handleUpClick = () =>{
  let newText = text.toUpperCase();
  setText(newText);
}

const handleLoClick = () =>{
  let newText = text.toLowerCase();
  setText(newText);
}
const handleOnChange = (event) =>{
  setText(event.target.value);

}
  

  return (
    <>
     <Header name={"TextUtils"} />
    <Grid container sx={{display:'flex', justifyContent:'center' , mt:'50px'}}>
        <Grid item sx={{width:'600px',textAlign:'center'}}>
        <Paper sx={{padding:'10px'}} elevation={3}>
          <Typography variant='h4'>Text Converter</Typography>
            <br />
            <TextField
          id="outlined-multiline-static"
          label="Enter Some text Here"
          multiline
          value={text}
          onChange={handleOnChange}
          rows={4}
          style={{width:'80%'}}
          
        />
        <br/><br/>
            <Box sx={{display:'flex',justifyContent:'center'}}>
            
            <Button variant='contained' onClick={handleUpClick} sx={{mr:2}}>UpperCase</Button>
            
            <Button variant='contained' sx={{ backgroundColor:'red' }} onClick={handleLoClick} >LowerCase</Button>
            </Box>
            </Paper>
        </Grid>
    </Grid>


    </>
  )
}

export default Textutils;
