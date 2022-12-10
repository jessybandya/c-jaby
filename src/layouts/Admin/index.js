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

import React, { useState } from "react";

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
import Page from "../authentication/reset-password/cover"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { auth1 } from "../../components/firebase";
import { Routes, Route, useNavigate } from "react-router-dom";
import { setSidenavColor, useMaterialUIController } from "../../context";
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Exams from "./Add/Exams";
import Supps from "./Add/Supps";
import ExamsAll from "./All/Exams";
import SuppsAll from "./All/Exams";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function Admin() {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);
  const [modalShowAdd, setModalShowAdd] = React.useState(false);
  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [valueMain, setValueMain] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeMain = (event, newValue) => {
    setValueMain(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const handleChangeIndexMain = (index) => {
    setValueMain(index);
  };

  const history = useNavigate("");

  const logout = () => {
    auth1.signOut();
    history(`/authentication/sign-in`)
}
const [controller ] = useMaterialUIController();
const { sidenavColor } = controller;


  return (
    <DashboardLayout>
    <DashboardNavbar />
    <MDBox py={3}>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Hello, Jessy Bandya
        </Typography>
        <Button onClick={logout} color="inherit">LOGOUT</Button>
        <MDButton
        rel="noreferrer"
        variant="gradient"
        onClick={() => setModalShowAdd(true)}
        color={sidenavColor}
        >ADD</MDButton>
      </Toolbar>
    </AppBar>
  </Box>
  <AppBar position="static">
  <Tabs
    value={valueMain}
    onChange={handleChangeMain}
    indicatorColor="secondary"
    textColor="inherit"
    variant="fullWidth"
    aria-label="full width tabs example"
  >
    <Tab label="EXAMS" {...a11yProps(0)} />
    <Tab label="SUPPS" {...a11yProps(1)} />
  </Tabs>
</AppBar>

<SwipeableViews
axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
index={valueMain}
onChangeIndex={handleChangeIndexMain}
>
<TabPanel value={valueMain} index={0} dir={theme.direction}>
  <ExamsAll />
</TabPanel>
<TabPanel value={valueMain} index={1} dir={theme.direction}>
<h1>Supps</h1>
</TabPanel>
</SwipeableViews>
    </MDBox>

    <Modal
    show={modalShowAdd}
    onHide={() => setModalShowAdd(false)}
    size="lg"
    style={{zIndex:2001}}
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header>
    <AppBar position="static">
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="secondary"
      textColor="inherit"
      variant="fullWidth"
      aria-label="full width tabs example"
    >
      <Tab label="EXAMS" {...a11yProps(0)} />
      <Tab label="SUPPS" {...a11yProps(1)} />
    </Tabs>
  </AppBar>
    </Modal.Header>
    <Modal.Body
    style={{
      height: 'calc(100vh - 210px)',
      overflowY: 'auto',
      backgroundColor:'#1a2035'
    }}
    >
    <SwipeableViews
    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
    index={value}
    onChangeIndex={handleChangeIndex}
  >
    <TabPanel value={value} index={0} dir={theme.direction}>
      <Exams setModalShowAdd={setModalShowAdd}/>
    </TabPanel>
    <TabPanel value={value} index={1} dir={theme.direction}>
      <Supps />
    </TabPanel>
  </SwipeableViews>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={() => setModalShowAdd(false)}>Close</Button>
    </Modal.Footer>
  </Modal>
    <Footer />
  </DashboardLayout>
  );
}

export default Admin;
