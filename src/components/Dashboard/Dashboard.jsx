
import './Dashboard.css'
import badge from '../../images/award.png'
import TokenIcon from '@mui/icons-material/Token';
import OpacityIcon from '@mui/icons-material/Opacity';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import DiamondIcon from '@mui/icons-material/Diamond';
import SpaIcon from '@mui/icons-material/Spa';
import SchoolIcon from '@mui/icons-material/School';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';


const Dashboard = ({isUser}) =>{
    return(
        <>
        {isUser?<>
            <div className="container d-flex top-dashboard">
            <div className="profile-details rounded p-3 py-5">
              <div className="right px-2">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" className="profile-container "/>

                <div className="name text-center py-2">
                    <h6>Neha Deekonda</h6>
                    <p className="tsecondary">Joined on 17th Feb,2023</p>
                </div>
              </div>
              <div className="left px-3">
              Email: <p className="tsecondary">nehadeekonda9849@gmail.com</p>
              Phone : <p className="tsecondary">9182469635</p>
              Description: <p className="tsecondary"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione doloremque maxime consequatur quas repellendus iure labore voluptatem laudantium at. Quidem iusto quia laboriosam vel, sed rem iure officiis natus amet.</p>

              </div>
            </div>
            <div className="badge bgsecondary p-5 mx-2">
                     <h4>Your Badge</h4>
                     <div className="image py-4">
                        <img src={badge} alt="" className='w-50' />
                     </div>
            </div>

        </div>
        <div className="container activities p-3">
            <h5>Your Social Credits:</h5>

            <div className="credits-page d-flex">
        <div className="card mycredits m-4 p-2 py-4">
           <div className="diamond px-5 flex text-center">
           </div>
           <div className="matter text-center">
            <h5 className='p-1'>Green Credits</h5>
            <p className="text-center tsecondary px-1" style={{fontSize:'50px'}}>
                1 
            <SpaIcon color="primary" sx={{fontSize:'50px'}}/>

            </p>
           </div>
        </div>
      
        <div className="card mycredits m-4 p-2 py-4">
           <div className="diamond px-5 flex text-center">
           </div>
           <div className="matter text-center">
            <h5 className='p-1'>Blue Credits</h5>
            <p className="text-center tsecondary px-1" style={{fontSize:'50px'}}>
                1 
            <OpacityIcon color="primary" sx={{fontSize:'50px'}}/>

            </p>
           </div>
        </div>
        <div className="card mycredits m-4 p-2 py-4">
           <div className="diamond px-5 flex text-center">
           </div>
           <div className="matter text-center">
            <h5 className='p-1'>Hunger Credits</h5>
            <p className="text-center tsecondary px-1" style={{fontSize:'50px'}}>
                1 
            <VolunteerActivismIcon color="primary" sx={{fontSize:'50px'}}/>

            </p>
           </div>
        </div>
        <div className="card mycredits m-4 p-2 py-4">
           <div className="diamond px-5 flex text-center">
           </div>
           <div className="matter text-center">
            <h5 className='p-1'>Pink Credits</h5>
            <p className="text-center tsecondary px-1" style={{fontSize:'50px'}}>
                1 
            <DiamondIcon color="primary" sx={{fontSize:'50px'}}/>

            </p>
           </div>
        </div>
        <div className="card mycredits m-4 p-2 py-4">
           <div className="diamond px-5 flex text-center">
           </div>
           <div className="matter text-center">
            <h5 className='p-1'>Edu Credits</h5>
            <p className="text-center tsecondary px-1" style={{fontSize:'50px'}}>
                1 
            <SchoolIcon color="primary" sx={{fontSize:'50px'}}/>

            </p>
           </div>
        </div>
        <div className="card mycredits m-4 p-2 py-4">
           <div className="text-center">
            <h5 className='p-1'>Health Credits</h5>
            
            <p className="text-center tsecondary px-1" style={{fontSize:'50px'}}>
                1 
            <HealthAndSafetyIcon color="primary" sx={{fontSize:'50px'}}/>

            </p>
           </div>
        </div>
        
       
    </div>
        </div>
        </>:<>
        <div className="container d-flex top-dashboard">
            <div className="profile-details rounded p-3 py-5">
              <div className="right px-2">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" className="profile-container "/>

                <div className="name text-center py-2">
                    <h6>Facebook</h6>
                    <p className="tsecondary">Joined on 17th Feb,2023</p>
                </div>
              </div>
              <div className="left px-3">
              Email: <p className="tsecondary">facebook@gmail.com</p>
              Phone : <p className="tsecondary">9182469635</p>
              Description: <p className="tsecondary"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, tempore quisquam! Alias minima harum commodi </p>
              Total Credits: <p className="tsecondary">1789</p>
              </div>
            </div>
            <div className="badge bgsecondary p-5 mx-2">
                     <h4>Your Badge</h4>
                     <div className="image py-4">
                        <img src={badge} alt="" className='w-50' />
                     </div>
            </div>

        </div>
        <div className="container activities p-3">
            <h5>Your Social Credits:</h5>

            <div className="credits-page d-flex">
        <div className="card mycredits m-4 p-2 py-4">
           <div className="diamond px-5 flex text-center">
           </div>
           <div className="matter text-center">
            <h5 className='p-1'>Green Credits</h5>
            <p className="text-center tsecondary px-1" style={{fontSize:'50px'}}>
                1 
            <SpaIcon color="primary" sx={{fontSize:'50px'}}/>

            </p>
           </div>
        </div>
      
        <div className="card mycredits m-4 p-2 py-4">
           <div className="diamond px-5 flex text-center">
           </div>
           <div className="matter text-center">
            <h5 className='p-1'>Blue Credits</h5>
            <p className="text-center tsecondary px-1" style={{fontSize:'50px'}}>
                1 
            <OpacityIcon color="primary" sx={{fontSize:'50px'}}/>

            </p>
           </div>
        </div>
        <div className="card mycredits m-4 p-2 py-4">
           <div className="diamond px-5 flex text-center">
           </div>
           <div className="matter text-center">
            <h5 className='p-1'>Hunger Credits</h5>
            <p className="text-center tsecondary px-1" style={{fontSize:'50px'}}>
                1 
            <VolunteerActivismIcon color="primary" sx={{fontSize:'50px'}}/>

            </p>
           </div>
        </div>
        <div className="card mycredits m-4 p-2 py-4">
           <div className="diamond px-5 flex text-center">
           </div>
           <div className="matter text-center">
            <h5 className='p-1'>Pink Credits</h5>
            <p className="text-center tsecondary px-1" style={{fontSize:'50px'}}>
                1 
            <DiamondIcon color="primary" sx={{fontSize:'50px'}}/>

            </p>
           </div>
        </div>
        <div className="card mycredits m-4 p-2 py-4">
           <div className="diamond px-5 flex text-center">
           </div>
           <div className="matter text-center">
            <h5 className='p-1'>Edu Credits</h5>
            <p className="text-center tsecondary px-1" style={{fontSize:'50px'}}>
                1 
            <SchoolIcon color="primary" sx={{fontSize:'50px'}}/>

            </p>
           </div>
        </div>
        <div className="card mycredits m-4 p-2 py-4">
           <div className="text-center">
            <h5 className='p-1'>Health Credits</h5>
            
            <p className="text-center tsecondary px-1" style={{fontSize:'50px'}}>
                1 
            <HealthAndSafetyIcon color="primary" sx={{fontSize:'50px'}}/>

            </p>
           </div>
        </div>
        
       
    </div>
        </div>
        </>}

      
        </>
    )
}
export default Dashboard