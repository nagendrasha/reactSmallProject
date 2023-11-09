import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Header from '../componants/Header'
import SendIcon from '@mui/icons-material/Send';

const Home = () => {
  const [age, setAge] = useState(0);
  const [msg, setMsg] = useState("")
  const random=()=>{
    if(age<18){
      setMsg("You Are't Eliglible For Vote")
    }
    if(age>10 && age>=18){
      setMsg("You are Eligable")
    }
    if(age>=60){
      setMsg("Rip")
    }
    if(age<10){
      setMsg("You are Under age")
    }
    if(age<0){
      setMsg("Invalid Age Input")
    }
  }

  return (
    <>
    <Header/>
    <Grid container sx={{display:'flex', justifyContent:'center' , mt:'50px'}}>
        <Grid item>
        <Paper sx={{padding:'10px'}} elevation={3}>

            <Typography variant='h4'>
                {msg}
            </Typography>
            <br />
            <TextField id="outlined-basic" onChange={((e)=>setAge(e.target.value))} label="Enter Number"  variant="outlined" fullWidth />
            <br /><br />
            <Button variant='contained' onClick={random} endIcon={<SendIcon/>}>Submit</Button>
            </Paper>
        </Grid>
    </Grid>
    </>
  )
}

export default Home
