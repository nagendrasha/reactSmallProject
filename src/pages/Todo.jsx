import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../componants/Header'

const Todo = () => {
  const [item,setItem]=useState('')
  const [data, setData]=useState([]);
  const addItem=()=>{
    const local = JSON.parse(localStorage.getItem('TODO_ITEM'));
    if(local==null){
      localStorage.setItem('TODO_ITEM',JSON.stringify([]))
    }
    if(local!=null){
      const newArr = JSON.stringify([...local,item]);
      localStorage.setItem('TODO_ITEM',newArr);
      setData(JSON.parse(localStorage.getItem('TODO_ITEM')))
    }
    setItem('');
  }

  useEffect(()=>{
    const getLocal = JSON.parse(localStorage.getItem('TODO_ITEM'));
    console.log(getLocal)
    if(getLocal==null || getLocal==undefined){
      localStorage.setItem('TODO_ITEM',JSON.stringify([]))
    }
    if(getLocal!=null || getLocal!=undefined){
      setData(JSON.parse(localStorage.getItem('TODO_ITEM')));
    }
    
  })

  // console.log(store)
  return (
    <>
    <Header name={"Todo"} />
    <Grid container sx={{display:'flex', justifyContent:'center' , mt:'50px'}}>
        <Grid item sx={{width:'350px'}}>
        <Paper sx={{padding:'10px'}} elevation={3}>
          <Typography fontWeight={800} fontSize='25px' align='center'>Todo App</Typography>
            <br />
            <TextField value={item} id="outlined-basic" type='text' onChange={((e)=>setItem(e.target.value))} label="Enter Todo"  variant="outlined" fullWidth />
            <br /><br />
            <Box sx={{display:'flex',justifyContent:'center'}}>
            <Button variant='contained' onClick={addItem} >Submit</Button>
            </Box>
            </Paper>
        </Grid>
        <Grid item sx={{width:'450px',mt:5}}>
          {
            data.map((ele,i)=>{return(
              <Typography align='center'>{i+1 } { ele}</Typography>
            )})
          }
        </Grid>
    </Grid>
    </>
  )
}

export default Todo
