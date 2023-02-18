import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import "./Home.css";
import PaidIcon from "@mui/icons-material/Paid";
import { Box } from "@mui/system";


const Home = () => {

  return (
    <>

    <Box sx={{backgroundColor:'var(--secondary)',minHeight:'100vh'}}>
    <AppBar
        position="fixed"
       >
        <Toolbar sx={{ backgroundColor: "var(--primary)" }}>
          <PaidIcon sx={{ m: 1 }} fontSize="large" />
          <Typography variant="h6" component="div"  sx={{ flexGrow: 1 }}>
            Devlancers
          </Typography> 
          

        {/* <Button variant="outlined" color="secondary" >Login</Button> */}
        <button className=" btn btn-light" sx={{color:'var(--secondary)'}}>Login</button>

        </Toolbar>
      </AppBar>
      <div className="container mt-5 pt-5">
        homepage
        Sign up
      </div>
    </Box>
      
    </>
  );
};

export default Home;