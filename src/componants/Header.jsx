import HomeIcon from '@mui/icons-material/Home';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();
  
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="larger"
              color="inherit"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <HomeIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}
              onClick={()=>{navigate("/")}}>
              TextUtils
            </Typography>
            <Button color="inherit" onClick={()=>{navigate("/color")}} >Color Changer</Button>
            <Button color="inherit" onClick={()=>{navigate("/counter")}} >Counter</Button>
            <Button color="inherit" onClick={()=>{navigate("/todo")}} >Todo</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
