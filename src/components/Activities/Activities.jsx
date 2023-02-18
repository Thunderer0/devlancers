import { Avatar, Box, Button, ButtonGroup, Tab, Tabs, Typography } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import React from "react";
import "./Activities.css";
const Activities = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
            <div className="">
              <div className="activity-card bgsecondary rounded p-3 mx-5 my-3">
                <div className="top">
                  <Avatar>N</Avatar>
                  <div className="p-2">
                    <p className="p-0 m-0">Neha Deekonda</p>
                    <p className="tsecondary p-0 m-0">Posted on 18-02-2023</p>
                  </div>
                </div>
                <div className="matter p-3">
                    <h5>Title of the Activity</h5>
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
                    <p className="tsecondary px-5 py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, consectetur deserunt. Dolore nulla ut itaque minima ullam doloremque. Earum, quisquam? Neque cupiditate dignissimos natus libero suscipit harum facere distinctio reiciendis.</p>
                    <div className="votes px-3 d-flex justify-content-end">
                    <ButtonGroup variant="contained" aria-label="outlined button group">
                            <Button startIcon={<ThumbUpIcon/>}>Upvote</Button>
                            <Button startIcon={<ThumbDownIcon/>}>Downvote</Button>
                            </ButtonGroup>
                    </div>
                </div>

              </div>
              <div className="activity-card bgsecondary rounded p-3 mx-5 my-3">
                <div className="top">
                  <Avatar>N</Avatar>
                  <div className="p-2">
                    <p className="p-0 m-0">Neha Deekonda</p>
                    <p className="tsecondary p-0 m-0">Posted on 18-02-2023</p>
                  </div>
                </div>
                <div className="matter p-3">
                    <h5>Title of the Activity</h5>
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
                    <p className="tsecondary px-5 py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, consectetur deserunt. Dolore nulla ut itaque minima ullam doloremque. Earum, quisquam? Neque cupiditate dignissimos natus libero suscipit harum facere distinctio reiciendis.</p>
                    <div className="votes px-3 d-flex justify-content-end">
                    <ButtonGroup variant="contained" aria-label="outlined button group">
                            <Button startIcon={<ThumbUpIcon/>}>Upvote</Button>
                            <Button startIcon={<ThumbDownIcon/>}>Downvote</Button>
                            </ButtonGroup>
                    </div>
                </div>

              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Verified
        </TabPanel>
      </Box>
     </div>
     
    </>
  );
};
export default Activities;
