import React,{useState, useEffect} from 'react';

// Material Dashboard 2 React components
import MDBox from "../../components1/MDBox";
import MDButton from "../../components1/MDButton";
// Material Dashboard 2 React example components
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";
import {useMaterialUIController} from "../../context";
import Civil from './Engineering-Departments/Civil-Engineering';
import Geospertial from './Engineering-Departments/Geopsertial-Engineering';
import Electrical from './Engineering-Departments/Electrical-Engineering';
import Mechanical from './Engineering-Departments/Mechanical-Engineering';
import Biosystem from './Engineering-Departments/Biosystem-Engineering';


function Acadmics() {
   const [controller] = useMaterialUIController();
   const { sidenavColor } = controller;
   const [civil, setCivil] = useState(false)
   const [elec, setElec] = useState(false)
   const [geo, setGeo] = useState(false)
   const [mech, setMech] = useState(false)
   const [bio, setBio] = useState(false)

   const civilBtn = () => {
    setCivil(true)
    setElec(false)
    setGeo(false)
    setMech(false)
    setBio(false)
   }
   const elecBtn = () => {
    setElec(true)
    setCivil(false)
    setGeo(false)
    setMech(false)
    setBio(false)
   }
   const geoBtn = () => {
    setGeo(true)
    setCivil(false)
    setElec(false)
    setMech(false)
    setBio(false)
  }
  const mechBtn = () => {
    setMech(true)
    setCivil(false)
    setElec(false)
    setGeo(false)
    setBio(false)
  }
  const bioBtn = () => {
    setBio(true)
    setCivil(false)
    setElec(false)
    setGeo(false)
    setMech(false)
  }

  return <div>
  <DashboardLayout>
  <DashboardNavbar />
  <MDBox py={3}>

  <div style={{display: "flex",flexWrap: "wrap",alignItems:"center",justifyContent: "center"}}>
  <MDButton
  rel="noreferrer"
  variant="gradient"
  color={sidenavColor}
  onClick={civilBtn}
  style={{width:180,marginLeft:10,marginTop:25}}
  >Civil & Construction</MDButton>
  <MDButton
  rel="noreferrer"
  variant="gradient"
  color={sidenavColor}
  onClick={elecBtn}
  style={{width:180,marginLeft:10,marginTop:25}}
  >ELECTRICAL AND INFORMATION</MDButton>
  <MDButton
  rel="noreferrer"
  variant="gradient"
  color={sidenavColor}
  onClick={geoBtn}
  style={{width:180,marginLeft:10,marginTop:25}}
  >Geospatial & Space Technology</MDButton>
  <MDButton
  rel="noreferrer"
  variant="gradient"
  color={sidenavColor}
  onClick={mechBtn}
  style={{width:180,marginLeft:10,marginTop:25}}
  >MECHANICAL & MANUFACTURING</MDButton>
  <MDButton
  rel="noreferrer"
  variant="gradient"
  color={sidenavColor}
  onClick={bioBtn}
  style={{width:180,marginLeft:10,marginTop:25}}
  >ENVIRONMENTAL & BIOSYSTEMS</MDButton>
  </div>

  {civil === true ?(
    <Civil />
  ): geo === true ?(
    <Geospertial />
  ): elec === true ?(
    <Electrical />
  ): mech === true ?(
    <Mechanical />
  ): bio === true ?(
    <Biosystem />
  ):(
    <div></div>
  )}
  </MDBox>
  <Footer />

</DashboardLayout>

  </div>;

}

export default Acadmics;



