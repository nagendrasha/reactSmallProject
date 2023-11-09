import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Enquiry = () => {

  const [ formdata, setFormdata ] = useState({
    name:"",
    phone:"",
    email:"",
    message:""
  });


  const handleInput = (e) => {

    const name = e.target.name;
    const value = e.target.value;

    console.log(name,value);

    setFormdata({...formdata,[name]:value});

  };
  console.log(formdata);



  return (
    <>
      <Grid container sx={{ display:'flex' , justifyContent:'center' }}>
        <Box sx={{ mt:5, p: 2 ,width:300,border:'1px solid black', borderRadius:'5px', textAlign:'center' }}>
          <Typography variant="h4">Get A Quote</Typography>
          <br />
          <br />
          <TextField id="outlined-basic" label="Name" variant="outlined" name="name" value={ formdata.name } onChange={handleInput} />
          <br />
          <br />
          <TextField id="outlined-basic" label="Phone" variant="outlined" name="phone" value={ formdata.phone } onChange={handleInput} />
          <br />
          <br />
          <TextField id="outlined-basic" label="email" variant="outlined" name="email" value={ formdata.email } onChange={handleInput} />
          <br />
          <br />
          <TextField id="outlined-basic" label="Msg" variant="outlined" name="message" value={ formdata.message } onChange={handleInput} />
          <br />
          <br />
          <Button variant="contained">Submit</Button>
        </Box>
      </Grid>
    </>
  );
};

export default Enquiry;
