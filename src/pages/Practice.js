import React, { useEffect, useState } from "react";
import Header from "../componants/Header";
import axios from "axios";
import { Box, Grid } from "@mui/material";

const Practice = () => {

    const [ user,setUser ] = useState([]);

    const userHandler = async ()  =>{
            try {
              const data = await axios.get("https://dummyjson.com/users");
              setUser(data.data.users)
              
            } catch (err) {
              console.log(err);
            }
    }

    console.log(user);
  useEffect(()=>{
    userHandler()
  }, []);

  return (
    <>
      <Header />
      <Grid container>
      <Box>
       
      </Box>
      </Grid>
    </>
  );
};

export default Practice;
