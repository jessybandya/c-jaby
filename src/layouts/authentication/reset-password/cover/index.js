import Card from "@mui/material/Card";
import React, {useState, useEffect} from "react"
import MDBox from "../../../../components1/MDBox";
import MDTypography from "../../../../components1/MDTypography";
import MDInput from "../../../../components1/MDInput";
import MDButton from "../../../../components1/MDButton";
import { ToastContainer, toast } from 'react-toastify';
import CoverLayout from "../../../../layouts/authentication/components/CoverLayout";
import { auth1 } from "../../../../components/firebase";
// Images
import bgImage from "../../../../assets/images/bg-sign-in-basic.jpeg";

function Cover() {

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false)

  const resetPasword = async(e) =>{
    e.preventDefault();
    setLoading(true)

    const config ={
      url: 'https://aces-2e0b5.web.app/authentication/sign-in',
      handleCodeInApp: true
  };

    await auth1
    .sendPasswordResetEmail(email,config)
    .then(() => {
     setEmail('')
     setLoading(false)
     toast.success("Check your email for password reset")
    })
    .catch((error)=>{
      setLoading(false)
     toast.error(error.message)
    })
  }

  return (
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          py={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h3" fontWeight="medium" color="white" mt={1}>
            Reset Password
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            You will receive an e-mail in maximum 60 seconds
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={4}>
              <MDInput type="email"
               value={email}
              onChange={(e) => {
                setEmail(e.target.value)
            }} 
            label="Email" 
            variant="standard" 
            fullWidth 
            />
            </MDBox>
            <MDBox mt={6} mb={1}>
              <MDButton onClick={resetPasword} variant="gradient" color="info" fullWidth>
                reset
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
  );
}

export default Cover;
