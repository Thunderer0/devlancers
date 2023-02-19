import { Avatar, Box, Button, ButtonGroup, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Tab, Tabs, TextField, Typography } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import React, { useEffect, useState } from "react";
import "./Activities.css";
const Activities = ({ backend }) => {
  const [value, setValue] = React.useState(0);
  const [activities, setActivities] = useState([]);
  const [users, setUsers] = useState([]);
  const [creditCount, setCreditCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [id,setId] = useState({});
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    const getAllActivities = async () => {
      const allActivites = await backend.getActivities();
      setActivities(allActivites);
      console.log(allActivites);

    }
   

    getAllActivities();
  }, [])
  const upVote = async (id) => {
    console.log(await backend.upVote(id, creditCount))
  }
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="activities">
        <h2>Good things</h2>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example">
              <Tab label="Unverified" {...a11yProps(0)} />
              <Tab label="Verified" {...a11yProps(1)} />
              {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div className="container">
              <div className="px-5">
                {activities.map((e) => {
                  return (
                    <>
                    {e.status==0?<><div className="activity-card bgsecondary rounded p-3 my-3">
                <div className="top">
                  <Avatar>N</Avatar>
                  <div className="p-2">
                    <p className="p-0 m-0">Neha Deekonda</p>
                    <p className="tsecondary p-0 m-0">Posted on 18-02-2023</p>
                  </div>
                </div>
                <div className="matter p-3">
                    <h5>{e.title}</h5>
                    <p>{e.category}</p>
                    <div id="carouselExampleControls" class="carousel slide bgprimary m-5" data-bs-ride="carousel">
                    <div class="carousel-inner ">
                        <div class="carousel-item active">
                            <div className="imageContainer d-flex justify-content-center ">
                            <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="d-block w-50" alt="..." style={{objectFit:'cover'}}/>
                            </div>
                       
                        </div>
                        <div class="carousel-item">
                        <div className="imageContainer d-flex justify-content-center ">
                            <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg" class="d-block w-50" alt="..." style={{objectFit:'cover'}}/>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <div className="imageContainer d-flex justify-content-center ">
                            <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="d-block w-50" alt="..." style={{objectFit:'cover'}}/>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                    <p className="tsecondary px-5 py-1">{e.description}</p>
                    <p>{e.upvotes.toNumber()}</p>
                    <div className="votes px-3 d-flex justify-content-end">
                    <ButtonGroup variant="contained" aria-label="outlined button group">
                            <Button startIcon={<ThumbUpIcon/>} onClick={() => {setOpen(true);setId(e.activityId)}}>Upvote</Button>
                            <Button startIcon={<ThumbDownIcon/>}>Downvote</Button>
                            </ButtonGroup>
                    </div>
                </div>

              </div></>:<></>}
                    </>
                  )
                }
              )}
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
          <div className="container">
              <div className="px-5">
                {activities.map((e) => {
                  return (
                    <>
                    {e.status!=0?<><div className="activity-card bgsecondary rounded p-3 my-3">
                <div className="top">
                  <Avatar>N</Avatar>
                  <div className="p-2">
                    <p className="p-0 m-0">Neha Deekonda</p>
                    <p className="tsecondary p-0 m-0">Posted on 18-02-2023</p>
                  </div>
                </div>
                <div className="matter p-3">
                    <h5>{e.title}</h5>
                    <p>{e.category}</p>
                    <p>{e.upvotes.toNumber()}</p>

                    <div id="carouselExampleControls" class="carousel slide bgprimary m-5" data-bs-ride="carousel">
                    <div class="carousel-inner ">
                        <div class="carousel-item active">
                            <div className="imageContainer d-flex justify-content-center ">
                            <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="d-block w-50" alt="..." style={{objectFit:'cover'}}/>
                            </div>
                       
                        </div>
                        <div class="carousel-item">
                        <div className="imageContainer d-flex justify-content-center ">
                            <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg" class="d-block w-50" alt="..." style={{objectFit:'cover'}}/>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <div className="imageContainer d-flex justify-content-center ">
                            <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="d-block w-50" alt="..." style={{objectFit:'cover'}}/>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                    <p className="tsecondary px-5 py-1">{e.description}</p>
                    <div className="votes px-3 d-flex justify-content-end">
                    {/* <ButtonGroup variant="contained" aria-label="outlined button group">
                            <Button startIcon={<ThumbUpIcon/>}>Upvote</Button>
                            <Button startIcon={<ThumbDownIcon/>}>Downvote</Button>
                            </ButtonGroup> */}
                    </div>
                </div>

              </div></>:<></>}
                    </>
                  )
                }
              )}
              </div>
            </div>
          </TabPanel>
        </Box>
      </div>



      <Dialog open={open} onClose={()=>{setOpen(false)}}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            How much Credits should be Given for their work
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Credit Count"
            type="number"
            fullWidth
            variant="standard"
            value={creditCount}
            name="creditCount"
            onChange = {(e) => {setCreditCount(e.target.value)}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{setOpen(false)}}>Cancel</Button>
          <Button onClick={()=>{upVote(id)}}>Submit</Button>
        </DialogActions>
      </Dialog>

    

    </>
  );
};
export default Activities;
