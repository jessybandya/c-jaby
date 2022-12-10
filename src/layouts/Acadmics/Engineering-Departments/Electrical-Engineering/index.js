import React, { useState } from "react";
import MDBox from "../../../../components1/MDBox";

import MDButton from "../../../../components1/MDButton";
import {useMaterialUIController} from "../../../../context";

function Electrical() {
    const [controller ] = useMaterialUIController();
    const { sidenavColor } = controller;

  return (
    <MDBox py={3}>
    <center>
    <MDButton
    rel="noreferrer"
    variant="gradient"
    color={sidenavColor}>ELECTRICAL AND INFORMATION Engineering</MDButton>
    </center>
    <div style={{display: "flex",flexWrap: "wrap",alignItems:"center",justifyContent: "center"}}>
    <MDButton
    rel="noreferrer"
    variant="gradient"
    color={sidenavColor}
    style={{width:180,marginLeft:10,marginTop:25}}
    >Year 1</MDButton>
    <MDButton
    rel="noreferrer"
    variant="gradient"
    color={sidenavColor}
    style={{width:180,marginLeft:10,marginTop:25}}
    >Year 2</MDButton>
    <MDButton
    rel="noreferrer"
    variant="gradient"
    color={sidenavColor}
    style={{width:180,marginLeft:10,marginTop:25}}
    >Year 3</MDButton>
    <MDButton
    rel="noreferrer"
    variant="gradient"
    color={sidenavColor}
    style={{width:180,marginLeft:10,marginTop:25}}
    >Year 4</MDButton>
    <MDButton
    rel="noreferrer"
    variant="gradient"
    color={sidenavColor}
    style={{width:180,marginLeft:10,marginTop:25}}
    >Year 5</MDButton>
    </div>
    </MDBox>
  )
}

export default Electrical