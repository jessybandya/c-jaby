import React, {useState, useEffect} from "react"
// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "../../../components1/MDBox";
import MDTypography from "../../../components1/MDTypography";
import MDInput from "../../../components1/MDInput";
import MDButton from "../../../components1/MDButton";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// Authentication layout components
import CoverLayout from "../components/CoverLayout";
import { auth1, db } from "../../../components/firebase"
import { Link, Navigate, useNavigate } from "react-router-dom";

// Images
import bgImage from "../../../assets/images/bg-sign-up-cover.jpeg";
import { ToastContainer, toast } from 'react-toastify';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { motion } from "framer-motion"
import CancelIcon from '@mui/icons-material/Cancel';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';


const buttonVariants = {


  hidden:{
    opacity:0,
     x: '-100vw',
   },
   visible:{
     opacity:1,
     x: 0,
     transition: {
       type: 'spring',
       delay: 0.5
     }
   },
   exit:{
     x: '-100vw',
     transition:{
       ease: 'easeOut'
     }
   }
}

const containerVariants={
  hidden:{
    opacity: 0,
  },
  visible:{
    opacity:1,
    transition:{
      delay: 1.5,
      duration: 1.5
    }
  },
  exit:{
    x: '-100vw',
    transition:{
      ease: 'easeOut'
    }
  }
}


function Cover() {
  const history = useNavigate("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");
  const [loading,setLoading] = useState(false)
  const [open2, setOpen2] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [clickedPay, setClickedPay] = useState(false)
  const [scroll, setScroll] = React.useState('paper');

  const config = {
    public_key: 'FLWPUBK-cdcdf33bafedf13c157a3d4ac1999332-X',
    tx_ref: Date.now(),
    amount: 30,
    currency: 'KES',
    payment_type:"mobilemoney",
    payment_plan:"79180",
    meta : { counsumer_id: "7898", consumer_mac: "kjs9s8ss7dd" },
    customer: {
      email: `${email}`,
      phone_number: '',
      name: `${firstName} ${lastName}`,
    },
    // mobilemoney
    customizations: {
      title: 'E-JAB',
      description: 'Monthly Subscription of KSH.30 for website mentainance.',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };
  const handleFlutterPayment = useFlutterwave(config);



  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const havePaid = () => {


    db.collection("subscribed").add({
      paid:true,
      name:`${firstName} ${lastName}`,
      timestamp: Date.now(),
  }).then(() => 
  alert("Thank you for your successfully subscription for web mentainance!"));
  setOpen(false)
}

  const subScribe = () => {
    handleFlutterPayment({
      callback: (response) => {
        //  console.log(response);
         if(response.status == "successful"){
          havePaid()
         }else{
           alert("Transaction did not work!")
         }
          closePaymentModal() // this will close the modal programmatically
      },
      onClose: () => {},
    });
  }

  const register = (event) => {
    event.preventDefault();
    setLoading(true)
    let errors = {};


        if (!firstName.trim()) {
            setLoading(false)
            errors.firstName = toast.error('First name is required');
          } else if (!/^[A-Za-z]+/.test(firstName.trim())) {
            setLoading(false)
              errors.firstName = toast.error('Enter a valid first name');
          }else if(!lastName.trim()){
            setLoading(false)
            errors.lastName = toast.error('Last name is required');
        } else if (!/^[A-Za-z]+/.test(lastName.trim())) {
            setLoading(false)
            errors.lastName = toast.error('Enter a valid last name');
        }else if(!username.trim()){
            setLoading(false)
            errors.username = toast.error('Username is required');
        } else if (!/^[a-z0-9]+/.test(username.trim())) {
            setLoading(false)
            errors.username = toast.error('Username should contain lower case letters with no space and some numbers(Optional)');
        }else if(!year.trim()){
          setLoading(false)
          errors.year = toast.error('Year of study is required');
      }else  if (!email) {
        setLoading(false)
        errors.email = toast.error('School Email required');
       }else if (!/\S+@[students]+\.[uonbi]+\.[ac]+\.[ke]+/.test(email)) {
        setLoading(false)
        errors.email = toast.error('Student Email address is invalid\nFormat (...@students.uonbi.ac.ke)');
      }else if(!registrationNo.trim()){
            setLoading(false)
            errors.registrationNo = toast.error('Registration number is required');
        }else if (!/^[F]||[f]+/.test(registrationNo)) {
            setLoading(false)
            errors.registrationNo = toast.error("Your Registration number shows you don't belong to engineering faculty!");

        }else if(!category.trim()){
          setLoading(false)
          errors.year = toast.error('Deaprtment is required');
        }else if (!password) {
                setLoading(false)
             errors.password = toast.error('Password is required');
          } else if (password.length < 8) {
            setLoading(false)
             errors.password = toast.error('Password needs to be 8 characters or more');
          } else if (open === false) {
            setLoading(false)
             setOpen(true)
          }else{

            db.collection('users').where("username", "==", username).get().then(
                snap => {
                    if(snap.docs.length > 0){
                        toast.error("The username you entered is taken!")
                        setLoading(false)
                    }else{

                        db.collection('users').where("email", "==", email).get().then((resultSnapShot) => {
        
                            // resultSnapShot is an array of docs where "email" === "user_mail"
                    
                            if (resultSnapShot.size == 0) {
                                //Proceed

                                  auth1
                                  .createUserWithEmailAndPassword(email, password)
                                  .then((auth) => {
                                      if (auth.user) {
                                          auth.user.updateProfile({
                                              displayName: username,
                                              photoURL: "https://www.seekpng.com/png/full/73-730482_existing-user-default-avatar.png"
                                          }).then((s) => {
                                              db.collection('users').doc(auth.user.uid).set({
                                                  uid: auth.user.uid,
                                                  firstName,
                                                  lastName,
                                                  username,
                                                  registrationNumber: registrationNo,
                                                  email: auth.user.email,
                                                  photoURL: "https://www.seekpng.com/png/full/73-730482_existing-user-default-avatar.png",
                                                  year,
                                                  gender: "N/A",
                                                  bio: "",
                                                  read: true,
                                                  department:category,
                                                  others: "N/A",
                                                  // post: member,
                                                  timestamp: Date.now()
                                              })
                                                  .then((r) => {
                                                      setLoading(false)
                                                      toast.success("Succesfully created an account.")
                                                      history(`/home`)
                                                  })
                                          })
                                      }
                                  })
                                  .catch((e) => {
                                          toast.error(e.message)
                                          setLoading(false)
                                  });
                                 }              

                                //Already registered
                                setLoading(false)
                                toast.error("The email you enterd already in use!")                            
                    
                        })
                    }
                }
            )
            

            
            
          }


    
};


  return (
    <CoverLayout image={bgImage}>
    <ToastContainer />
    {loading ? (
      <>
      <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open2}
      onClick={handleClose2}
    >
      <CircularProgress color="inherit" />
      
    </Backdrop>

    
    <Card>
    <MDBox
      variant="gradient"
      bgColor="info"
      borderRadius="lg"
      coloredShadow="success"
      mx={2}
      mt={-3}
      p={3}
      mb={1}
      textAlign="center"
    >
      <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
        Join us today
      </MDTypography>

    </MDBox>
    <MDBox pt={2} pb={4} px={3}>
      <MDBox component="form" role="form">
      <div style={{display: "flex"}}>
      <MDBox mb={1}>
      <MDInput type="text" label="First Name" onChange={(e) => {
        setFirstName(e.target.value);
    }} variant="standard" fullWidth />
    </MDBox>
      <div>
      <MDBox mb={1}>
      <MDInput style={{marginLeft:5}}
      onChange={(e) => {
        setLastName(e.target.value);
    }}
     type="text" label="Last Name" variant="standard" fullWidth />
    </MDBox> 
      </div>        
      </div>

     <div style={{display: "flex"}}>
     <MDBox mb={1}>
     <MDInput type="text"
     onChange={(e) => {
      setUsername(e.target.value);
  }}
   label="Username" variant="standard" fullWidth />
   </MDBox>
   <MDBox mb={1}>
   
   
   <FormControl variant="standard" sx={{ mt: 1.1, minWidth: 120 }}>
   <InputLabel sx={{marginTop:-1,marginLeft:1}} id="demo-simple-select-standard-label">Year Of Study</InputLabel>
   <Select
     labelId="demo-simple-select-standard-label"
     id="demo-simple-select-standard"
     style={{marginLeft:5}}
     value={year}
     label="Year Of Study"
     onChange={(e) => setYear(e.target.value)}
     variant="standard"
   >
     <MenuItem value="1">1</MenuItem>
     <MenuItem value="2">2</MenuItem>
     <MenuItem value="3">3</MenuItem>
     <MenuItem value="4">4</MenuItem>
     <MenuItem value="5">5</MenuItem>
   </Select>
 </FormControl>


 </MDBox>
     </div>
     <div style={{display: "flex"}}>
     <MDBox mb={1}>
     <MDInput type="email" onChange={(e) => {
      setEmail(e.target.value)
  }}  label="School Email" variant="standard" fullWidth />
   </MDBox>
   <MDBox mb={1}>
   <MDInput type="text" onChange={(e) => {
    setRegistrationNo(e.target.value)
}}
 style={{marginLeft:5}} label="Registration No." variant="standard" fullWidth />
 </MDBox> 
     </div>

          <div style={{display: "flex"}}>
          <FormControl variant="standard" sx={{ mt: 1.2, minWidth: 120 }}>
          <InputLabel  sx={{marginTop:-1}} id="demo-simple-select-standard-label">Engineering Department</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Aces Category1"
            onChange={(e) => setCategory(e.target.value)}
          >
          <MenuItem value="Civil & Construction">Civil & Construction</MenuItem>
          <MenuItem value="Electrical & Information">Electrical & Information</MenuItem>
          <MenuItem value="Geospatial & Space Technology">Geospatial & Space Technology</MenuItem>
          <MenuItem value="Mechanical & Manufacturing">Mechanical & Manufacturing</MenuItem>
          <MenuItem value="Environmental & Biosystems">Environmental & Biosystems</MenuItem>
          </Select>
        </FormControl>
        <MDBox mb={1}>
        <MDInput type="password" 
        onChange={(e) => {
          setPassword(e.target.value)
      }}
       style={{marginLeft:5}} label="Password" variant="standard" fullWidth />
      </MDBox>
          </div>
        

        <MDBox mt={1} mb={1}>
          <MDButton onClick={register} variant="gradient" color="info" fullWidth>
            sign in
          </MDButton>
        </MDBox>
        <MDBox mt={0} mb={1} textAlign="center">
          <MDTypography variant="button" color="text">
            Already have an account?{" "}
            <MDTypography
              component={Link}
              to="/authentication/sign-in"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign In
            </MDTypography>
          </MDTypography>
        </MDBox>
      </MDBox>
    </MDBox>
  </Card>
      </>
    ):(
      <>
      <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
      
      <Card>
      <MDBox
        variant="gradient"
        bgColor="info"
        borderRadius="lg"
        coloredShadow="success"
        mx={2}
        mt={-3}
        p={3}
        mb={1}
        textAlign="center"
      >
        <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
          Join us today
        </MDTypography>
  
      </MDBox>
      <MDBox pt={2} pb={4} px={3}>
        <MDBox component="form" role="form">
        <div style={{display: "flex"}}>
        <MDBox mb={1}>
        <MDInput type="text" label="First Name" onChange={(e) => {
          setFirstName(e.target.value);
      }} variant="standard" fullWidth />
      </MDBox>
        <div>
        <MDBox mb={1}>
        <MDInput style={{marginLeft:5}}
        onChange={(e) => {
          setLastName(e.target.value);
      }}
       type="text" label="Last Name" variant="standard" fullWidth />
      </MDBox> 
        </div>        
        </div>
  
       <div style={{display: "flex"}}>
       <MDBox mb={1}>
       <MDInput type="text"
       onChange={(e) => {
        setUsername(e.target.value);
    }}
     label="Username" variant="standard" fullWidth />
     </MDBox>
     <MDBox mb={1}>
     
     
     <FormControl variant="standard" sx={{ mt: 1.1, minWidth: 120 }}>
     <InputLabel sx={{marginTop:-1,marginLeft:1}} id="demo-simple-select-standard-label">Year Of Study</InputLabel>
     <Select
       labelId="demo-simple-select-standard-label"
       id="demo-simple-select-standard"
       style={{marginLeft:5}}
       value={year}
       label="Year Of Study"
       onChange={(e) => setYear(e.target.value)}
       variant="standard"
     >
       <MenuItem value="1">1</MenuItem>
       <MenuItem value="2">2</MenuItem>
       <MenuItem value="3">3</MenuItem>
       <MenuItem value="4">4</MenuItem>
       <MenuItem value="5">5</MenuItem>
     </Select>
   </FormControl>
  
  
   </MDBox>
       </div>
       <div style={{display: "flex"}}>
       <MDBox mb={1}>
       <MDInput type="email" onChange={(e) => {
        setEmail(e.target.value)
    }}  label="School Email" variant="standard" fullWidth />
     </MDBox>
     <MDBox mb={1}>
     <MDInput type="text" onChange={(e) => {
      setRegistrationNo(e.target.value)
  }}
   style={{marginLeft:5}} label="Registration No." variant="standard" fullWidth />
   </MDBox> 
       </div>
  
            <div style={{display: "flex"}}>
            <FormControl variant="standard" sx={{ mt: 1.2, minWidth: 120 }}>
            <InputLabel  sx={{marginTop:-1}} id="demo-simple-select-standard-label">Engineering Department</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Aces Category1"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="Civil & Construction">Civil & Construction</MenuItem>
              <MenuItem value="Electrical & Information">Electrical & Information</MenuItem>
              <MenuItem value="Geospatial & Space Technology">Geospatial & Space Technology</MenuItem>
              <MenuItem value="Mechanical & Manufacturing">Mechanical & Manufacturing</MenuItem>
              <MenuItem value="Environmental & Biosystems">Environmental & Biosystems</MenuItem>
            </Select>
          </FormControl>
          <MDBox mb={1}>
          <MDInput type="password" 
          onChange={(e) => {
            setPassword(e.target.value)
        }}
         style={{marginLeft:5}} label="Password" variant="standard" fullWidth />
        </MDBox>
            </div>
          
  
          <MDBox mt={1} mb={1}>
            <MDButton onClick={register} variant="gradient" color="info" fullWidth>
              sign in
            </MDButton>
          </MDBox>
          <MDBox mt={0} mb={1} textAlign="center">
            <MDTypography variant="button" color="text">
              Already have an account?{" "}
              <MDTypography
                component={Link}
                to="/authentication/sign-in"
                variant="button"
                color="info"
                fontWeight="medium"
                textGradient
              >
                Sign In
              </MDTypography>
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
      </motion.div>
      </>
    )}


    <Dialog
    open={open}
    onClose={handleClose}
    scroll={scroll}
    aria-labelledby="scroll-dialog-title"
    aria-describedby="scroll-dialog-description"
    style={{width: "100%"}}
    fullWidth
  >
    <MDBox><DialogTitle   style={{backgroundColor: "#1a2035",border: "1px solid #1a2035"}}
    id="scroll-dialog-title">
  
    <div style={{display: "flex",justifyContent: "space-between"}}>
    <div></div> <div></div> <div> <CancelIcon fontSize='medium' onClick={handleClose} style={{cursor: "pointer",color: "#fff"}}/></div>
    </div>  
    </DialogTitle></MDBox>
    <DialogContent style={{backgroundColor: "#1a2035"}}>
    <div  class="col-sm-20">
    <div class="card text-center">
      <div class="title">
        <i class="fa fa-paper-plane" aria-hidden="true"></i>
        <h2>Monthly Subscription</h2>
      </div>
      <div class="price">
        <h4><sup>Ksh</sup>30</h4>
      </div>
      <div class="option">
        <ul>
        <li> <i class="fa fa-check" aria-hidden="true"></i>Web Mentainance. </li>
        <li> <i class="fa fa-check" aria-hidden="true"></i>E-Papers/solutions.</li>
        <li> <i class="fa fa-check" aria-hidden="true"></i>E-Projects solutions</li>
        <li> <i class="fa fa-check" aria-hidden="true"></i> Live Support </li>
        </ul>
      </div>
      <a onClick={subScribe} href='#'>Subscribe</a>
    </div>
  </div>
     </DialogContent>

  </Dialog>
   
     
    </CoverLayout>
  );
}

export default Cover;
