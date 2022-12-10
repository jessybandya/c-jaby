/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "../../components1/MDBox";
import MDTypography from "../../components1/MDTypography";
import MDAlert from "../../components1/MDAlert";
import MDButton from "../../components1/MDButton";
import MDSnackbar from "../../components1/MDSnackbar";

// Material Dashboard 2 React example 
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";
import { db } from "../../components/firebase";

function Showcase() {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);

  const alertContent = (name) => (
    <MDTypography variant="body2" color="white">
      A simple {name} alert with{" "}
      <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        an example link
      </MDTypography>
      . Give it a click if you like.
    </MDTypography>
  );

  const renderSuccessSB = (
    <MDSnackbar
      color="success"
      icon="check"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  const renderInfoSB = (
    <MDSnackbar
      icon="notifications"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={infoSB}
      onClose={closeInfoSB}
      close={closeInfoSB}
    />
  );

  const renderWarningSB = (
    <MDSnackbar
      color="warning"
      icon="star"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={warningSB}
      onClose={closeWarningSB}
      close={closeWarningSB}
      bgWhite
    />
  );

  const renderErrorSB = (
    <MDSnackbar
      color="error"
      icon="warning"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  );


  const config = {
    public_key: 'FLWPUBK-cdcdf33bafedf13c157a3d4ac1999332-X',
    tx_ref: Date.now(),
    amount: 3,
    currency: 'KES',
    payment_options: 'mobilemoney',
    customer: {
      email: 'jessy.bandya5@gmail.com',
      phonenumber: '0768405710',
      name: 'Jessy Bandya',
    },
    // mobilemoney
    customizations: {
      title: 'UoN ACES',
      description: 'Payment for past paper solutions in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };


  const havePaid = () => {


      db.collection("paidSolutions").add({
        paid:true,
        name:"Jaby Boy",
        soltionId:"",
        questionId:"",
        personId:"",
        timestamp: Date.now(),
    }).then(() => alert("You can now access the solutions to this quiz"));

  
}

  const handleFlutterPayment = useFlutterwave(config);

  const afterPay = () =>{

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

  return (
    <DashboardLayout>
    <DashboardNavbar />
    <MDBox py={3}>
    {/* <h1>This Showcase Page</h1> */}


<button
  onClick={() => {
    afterPay()
  }}
>
  Pay For Solutions
</button>

    </MDBox>
    <Footer />
  </DashboardLayout>
  );
}

export default Showcase;
