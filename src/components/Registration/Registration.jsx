import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import PaidIcon from "@mui/icons-material/Paid";
import './register.css'


const Registration = () =>{
    return(
        <>
        <Box sx={{backgroundColor:'var(--background)',minHeight:'94vh'}}>
    <AppBar
        position="fixed"
       >
        <Toolbar sx={{ backgroundColor: "var(--primary)" }}>
          
          <PaidIcon sx={{ m: 1 }} fontSize="large" />
          <Typography variant="h6" component="div">
            Devlancers
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="container mt-5 pt-5 registerContainer">
        <div className="center-card bgsecondary rounded p-3">
         <h4 className="text-center">Choose a role</h4>
         <div className="d-flex">
            <div className="user role-card bgprimary m-2 rounded p-3 d-flex align-items-center flex-column">
                 <h4 className="text-center m-2 tsecondary">User</h4>
                 <div className="imgContainer">
                     <img src="" alt="" className="role-image"/>
                 </div>

            </div>
            <div className="company role-card bgprimary m-2 rounded p-3">
            <h4 className="text-center m-2 tsecondary">Company</h4>
            <div className="imgContainer">

            </div>


            </div>
         </div>
        </div>
      </div>
    </Box>
        </>
    )
}
export default Registration