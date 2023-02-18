import { ethers } from "ethers";
import React, {useEffect, useState} from "react";
import './App.css';
import { createTheme ,ThemeProvider} from '@mui/material/styles';
import { Button } from "@mui/material";
import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard"
import Layout from "./components/Layout/Layout"
import Credits from "./components/Credits/Credits";
import Activities from './components/Activities/Activities'
import Registration from "./components/Registration/Registration";


import CreditFi from './artifacts/contracts/CreditFi.sol/CreditFi.json'

const SERVICE_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";



function App() {

  const [account, setAccount ] = useState(null) 
  const [provider, setProvider] = useState(null)
  const [service, setService] = useState(null)
  const [login,setLogin] = useState(true)
  const [isUser,setIsUser] = useState(true)
  const [isRegistered,setIsRegistered] = useState(false)
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#00ADB5',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: '#0066ff',
        main: '#393E46',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
      },
      divider: {main:'#393e46'},
      background: {
        paper: "#222831",
        default:"#222831"
      }
  
      
    },
  });




  const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
  }

  // const loadBlockchainData = async () => {
  //   const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'})
  //   const account = ethers.utils.getAddress(accounts[0])
  //   setAccount(account)


  //   //connect to blockchain
  //   const provider = new ethers.providers.Web3Provider(window.ethereum)
  //   setProvider(provider)

  //   // const network = await provider.getNetwork() 

  //   const service = new ethers.Contract(
  //     SERVICE_ADDRESS,
  //     Service.abi,
  //     provider
  //   )

  //   setService(service)

  // }


  
  // useEffect(() => {
  //   loadBlockchainData()
  // }, [])


  return (
          <>
          <ThemeProvider theme={theme}>
          <BrowserRouter>
        <Routes>
          {login ? (
            <>
            {!isRegistered?<>
              <Route
                  path='/'
                  element={
                   <Registration/>
                  }
                />
              
            </>:<>
            <Route path="/" element={<Layout login={login} isUser={isUser}/>}>
                <Route
                  index
                  element={
                    <Dashboard isUser={isUser}/>
                  }
                />
                <Route
                  path='/credits'
                  element={
                    <Credits/>
                  }
                />
                 <Route
                  path='/activities'
                  element={
                    <Activities/>
                  }
                />
                
                
              </Route>
            </>}
              
            
            
            
             

              
            </>
          ) : (
            <>
             
                <Route
                  index
                  element={
                    <Home/>
                  }
                />
                
                
            </>
          )}
        </Routes>
      </BrowserRouter>
          </ThemeProvider>
         
       
          </>
        
 
  );
}

export default App;
