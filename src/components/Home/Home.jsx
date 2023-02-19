import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import "./Home.css";
import PaidIcon from "@mui/icons-material/Paid";
import { Box } from "@mui/system";
import {ethers} from 'ethers';
import CreditFi from '../.././artifacts/contracts/CreditFi.sol/CreditFi.json'

let user;

const Home = ({setAccount,setLogin,setProvider,setBackend,isRegistered,setIsRegistered}) => {
  const connect = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'})
    const account = ethers.utils.getAddress(accounts[0])
    setAccount(account)
    setLogin(true)
    localStorage.setItem('login',account)

    //connect to blockchain



 
  }

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
        <button className=" btn btn-light" sx={{color:'var(--secondary)'}} onClick={connect}>Login</button>

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