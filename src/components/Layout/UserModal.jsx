import { Button, FormControl, InputLabel, MenuItem, Select, TextareaAutosize, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

const UserModal = ({ userModal, setUserModal }) => {
  const [activityDetails,setActivityDetails] = useState({})
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setActivityDetails(values => ({...values, [name]: value}))
  }
  return (
    <>
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
          Add your Social Activity
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            <div className="py-2">
            <TextField
              id="filled-basic"
              label="Enter a Title"
              variant="filled"
              name="title"
              fullWidth
              value={activityDetails.title || ""}
              onChange={handleChange}

            />
            </div>
           <div className="py-2">
           <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="Describe what you have done..."
              style={{ width: 800 ,padding:'5px'}}
              name="description"
              value={activityDetails.description || ""}
              onChange={handleChange}
            />
             
            
           </div>
           <div className="py-2">
           <FormControl  fullWidth variant="filled">
             <InputLabel id="demo-simple-select-label" >Document Type</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="docType"
                value={activityDetails.doctype}
                onChange={handleChange}
                label="Document type"
                
            >
                <MenuItem value={1}>Pictures</MenuItem>
                <MenuItem value={2}>Video</MenuItem>
                <MenuItem value={3}>PDF</MenuItem>
            </Select>
             </FormControl>
             

           </div>
           <div className="py-2">
           <FormControl  fullWidth variant="filled">
             <InputLabel id="demo-simple-select-label" >Which Credit Best defines your work?</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Document type"
                name="creditType"
                value={activityDetails.creditType}
                onChange={handleChange}
            >
                <MenuItem value={1}>Green Credits</MenuItem>
                <MenuItem value={2}>Blue Credits</MenuItem>
                <MenuItem value={3}>Hunger Credits</MenuItem>
                <MenuItem value={4}>Pink Credits</MenuItem>
                <MenuItem value={5}>Edu Credits</MenuItem>
                <MenuItem value={6}>Health Credits</MenuItem>


            </Select>
             </FormControl>
             

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
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default UserModal;