import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import "./Home.css";
import PaidIcon from "@mui/icons-material/Paid";
import { Box } from "@mui/system";
import {ethers} from 'ethers';
import CreditFi from '../.././artifacts/contracts/CreditFi.sol/CreditFi.json'

const CREDITFI_ADDRESS = "0x56Fd5C5f08F7E1a93C364a0D30Dc4dE78b6A882a";
let user;

const Home = ({setAccount,setLogin,setProvider,setBackend,isRegistered,setIsRegistered}) => {
  const connect = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'})
    const account = ethers.utils.getAddress(accounts[0])
    setAccount(account)
    setLogin(true)

    //connect to blockchain
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    setProvider(provider)

    const signer = provider.getSigner();

    // const network = await provider.getNetwork() 

    const backend = new ethers.Contract(
      CREDITFI_ADDRESS,
      CreditFi.abi,
      signer
    )
  
    // console.log(backend.createUser)
    setBackend(backend)
    console.log(backend)
    // const address =await backend.signer.getAddress()
    // console.log(address);
    user = await backend.users(account)
    console.log(user)
    // setIsRegistered(true)


 
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