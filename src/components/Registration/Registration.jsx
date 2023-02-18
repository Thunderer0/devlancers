import { AppBar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextareaAutosize, TextField, Toolbar, Typography } from "@mui/material"
import PaidIcon from "@mui/icons-material/Paid";
import './register.css'
import { useState } from "react";



const Registration = () =>{
  const [userModal,setUserModal] = useState(false)
  const [companyModal,setCompanyModal] = useState(false)
  const [userDetails,setUserDetails] = useState({})
  const [companyDetails,setCompanyDetails] = useState({})
  const handleChangeUser = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserDetails(values => ({...values, [name]: value}))
  }
  const handleChangeCompany = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCompanyDetails(values => ({...values, [name]: value}))
  }
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
         <h4 className="text-center p-2">Choose a role</h4>
         <div className="d-flex">
          
          <div className="user role-card bgprimary m-2 rounded p-3 d-flex align-items-center flex-column" onClick={()=>{setUserModal(true)}}>
                 <h4 className="text-center m-2 tsecondary">User</h4>
                 <div className="imgContainer p-3">
                     <img src="https://img.freepik.com/premium-vector/young-smiling-man-adam-avatar-3d-vector-people-character-illustration-cartoon-minimal-style_365941-687.jpg?w=2000" alt="" className="role-image"/>
                 </div>
                <p className="tsecondary text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vitae ipsum odio harum aliquid, dolore id quos quo aspernatur odit hic necessitatibus quod corporis. </p>
            </div>
          
            
            <div className="company role-card bgprimary m-2 rounded p-3 d-flex align-items-center flex-column"
            onClick={()=>{setCompanyModal(true)}}>
            <h4 className="text-center m-2 tsecondary">Company</h4>
            <div className="imgContainer p-3">
            <img src="https://as2.ftcdn.net/v2/jpg/02/60/12/11/1000_F_260121137_3To0EdxvWR3f5IqiwqkmGvHN9MSOM4HG.jpg" alt="" className="role-image"/>
            </div>
            <p className="tsecondary text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vitae ipsum odio harum aliquid, dolore id quos quo aspernatur odit hic necessitatibus quod corporis. </p>


            </div>
         </div>
        </div>
      </div>
    </Box>
    {/* user model */}
    <Dialog
        open={userModal}
        onClose={() => {
          setUserModal(false);
        }}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth="md">
        <DialogTitle id="scroll-dialog-title">
          Your Profile Details
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            <div className="py-2">
            <TextField
              id="filled-basic"
              label="Name"
              variant="filled"
              fullWidth
              sx={{width:'800px'}}
              name="name"
              value={userDetails.name || ""}
              onChange={handleChangeUser}
            />
            </div>
            <div className="py-2">
            <TextField
              id="filled-basic"
              label="Email"
              variant="filled"
              type="email"
              fullWidth
              sx={{width:'800px'}}
              name="email"
              value={userDetails.email || ""}
              onChange={handleChangeUser}
            />
            </div>
            <div className="py-2">
            <TextField
              id="filled-basic"
              label="Phone Number"
              variant="filled"
              type="phone"
              fullWidth
              sx={{width:'800px'}}
              name="phone"
              value={userDetails.phone || ""}
              onChange={handleChangeUser}
            />
            </div>
            <div className="py-2">
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="Describe about yourself"
              style={{ width: 800 ,padding:'5px'}}
              name="description"
              value={userDetails.description || ""}
              onChange={handleChangeUser}
            />
            </div>
            <div className="pb-2">
            <label for="formFileLg" class="form-label">Profile Picture</label>
            <input class="form-control form-control-lg w-100" id="formFileLg" type="file" onChange={(e)=>{
              setUserDetails(values => ({...values, 'doc':e.target.files[0]}))
            }}/>
            </div>
            
           
            
           
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setUserModal(false);
            }}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              setUserModal(false);
            }}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    {/* company model */}
    <Dialog
        open={companyModal}
        onClose={() => {
          setCompanyModal(false);
        }}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth="md">
        <DialogTitle id="scroll-dialog-title">
          Your Organization Details
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            <div className="py-2">
            <TextField
              id="filled-basic"
              label="Name"
              variant="filled"
              fullWidth
              sx={{width:'800px'}}
              name="name"
              value={companyDetails.name || ""}
              onChange={handleChangeCompany}
            />
            </div>
            <div className="py-2">
            <TextField
              id="filled-basic"
              label="Email"
              variant="filled"
              type="email"
              fullWidth
              sx={{width:'800px'}}
              name="email"
              value={companyDetails.email || ""}
              onChange={handleChangeCompany}
            />
            </div>
            <div className="py-2">
            <TextField
              id="filled-basic"
              label="Phone Number"
              variant="filled"
              type="phone"
              fullWidth
              sx={{width:'800px'}}
              name="phone"
              value={companyDetails.phone || ""}
              onChange={handleChangeCompany}
            />
            </div>
         
            <div className="pb-2">
            <label for="formFileLg" class="form-label">Profile Picture</label>
            <input class="form-control form-control-lg w-100" id="formFileLg" type="file" onChange={(e)=>{
              setCompanyDetails(values => ({...values, 'doc':e.target.files[0]}))
            }}/>
            </div>
            
           
            
           
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setCompanyModal(false);
            }}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              setCompanyModal(false);
            }}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
        </>
    )
}
export default Registration