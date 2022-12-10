import { useState } from "react";
import MDBox from "../../components1/MDBox";
import MDTypography from "../../components1/MDTypography";

import MDSnackbar from "../../components1/MDSnackbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";
import MDButton from "../../components1/MDButton";
import {useMaterialUIController} from "../../context";
import Beam from "./Beam";

function Home() {
  const [controller] = useMaterialUIController();
  const { sidenavColor } = controller;
  const [beam, setBeam] = useState(false)

  const beamFun = () =>{
    if(beam === false){
      setBeam(true)
    }else{
      setBeam(false)
    }
  }

  return (
    <DashboardLayout>
    <DashboardNavbar />
    <MDButton
    rel="noreferrer"
    variant="gradient"
    color={sidenavColor}
    fullWidth
    >Stuctural Design</MDButton>

    {beam === true ?(
      <Beam beamFun={beamFun} />
    ):(
      <MDBox py={3}>
      <div style={{display: "flex",flexWrap: "wrap",alignItems:"center",justifyContent: "center"}}>
      <MDButton
      rel="noreferrer"
      variant="gradient"
      color={sidenavColor}
      style={{width:180,marginLeft:10,marginTop:25}}
      onClick={beamFun}
      >BEAM</MDButton>
      <MDButton
      rel="noreferrer"
      variant="gradient"
      color={sidenavColor}
      style={{width:180,marginLeft:10,marginTop:25}}
      >SLAB</MDButton>
      <MDButton
      rel="noreferrer"
      variant="gradient"
      color={sidenavColor}
      style={{width:180,marginLeft:10,marginTop:25}}
      >COLUMN</MDButton>
      <MDButton
      rel="noreferrer"
      variant="gradient"
      color={sidenavColor}
      style={{width:180,marginLeft:10,marginTop:25}}
      >FOOTING</MDButton>
      </div>
      </MDBox>
    )}
    <Footer />
  </DashboardLayout>
  );
}

export default Home;
