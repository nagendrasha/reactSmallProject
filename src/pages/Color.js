import { Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import Header from '../componants/Header';

const Color = () => {

const [color,setColor] = useState('');


  return (
    <>
        <Header/>
        <Grid container sx={{ display:'flex', justifyContent:'center', width:800,height:500,backgroundColor:color }}>

        </Grid>
        <Button variant='contained' onClick={(()=>{setColor('red')})}>Red</Button>
        <Button variant='contained' onClick={(()=>{setColor('green')})} >Green</Button>
        <Button variant='contained' onClick={(()=>{setColor('yellow')})}>Yellow</Button>
        <Button variant='contained' onClick={(()=>{setColor('black')})}>Black</Button>
        <Button variant='contained' onClick={(()=>{setColor('orange')})}>Orange</Button>
    </>
  )
}

export default Color
