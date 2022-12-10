import React, { useState } from "react";
import MDBox from "../../../../components1/MDBox";

import MDButton from "../../../../components1/MDButton";
import {useMaterialUIController} from "../../../../context";
import Year1 from "./Years/Year1"
import Year2 from "./Years/Year2"
import Year3 from "./Years/Year3"
import Year4 from "./Years/Year4"
import Year5 from "./Years/Year5"


function Civil() {
    const [controller ] = useMaterialUIController();
    const { sidenavColor } = controller;
    const [year1, setYear1] = useState(false)
    const [year2, setYear2] = useState(false)
    const [year3, setYear3] = useState(false)
    const [year4, setYear4] = useState(false)
    const [year5, setYear5] = useState(false)


    const year1Btn = () => {
      setYear1(true)
      setYear2(false)
      setYear3(false)
      setYear4(false)
      setYear5(false)
    }
    const year2Btn = () => {
      setYear2(true)
      setYear1(false)
      setYear3(false)
      setYear4(false)
      setYear5(false)
    }
    const year3Btn = () => {
      setYear3(true)
      setYear2(false)
      setYear1(false)
      setYear4(false)
      setYear5(false)
    }
    const year4Btn = () => {
      setYear4(true)
      setYear2(false)
      setYear1(false)
      setYear3(false)
      setYear5(false)
    }
    const year5Btn = () => {
      setYear5(true)
      setYear2(false)
      setYear1(false)
      setYear3(false)
      setYear4(false)
    }

  return (
    <MDBox py={3}>
    <center>
    <MDButton
    rel="noreferrer"
    variant="gradient"
    color={sidenavColor}>Civil & Construction Engineering</MDButton>
    </center>
    <div style={{display: "flex",flexWrap: "wrap",alignItems:"center",justifyContent: "center"}}>
    <MDButton
    rel="noreferrer"
    variant="gradient"
    color={sidenavColor}
    onClick={year1Btn}
    style={{width:180,marginLeft:10,marginTop:25}}
    >Year 1</MDButton>
    <MDButton
    rel="noreferrer"
    variant="gradient"
    color={sidenavColor}
    onClick={year2Btn}
    style={{width:180,marginLeft:10,marginTop:25}}
    >Year 2</MDButton>
    <MDButton
    rel="noreferrer"
    variant="gradient"
    color={sidenavColor}
    onClick={year3Btn}
    style={{width:180,marginLeft:10,marginTop:25}}
    >Year 3</MDButton>
    <MDButton
    rel="noreferrer"
    variant="gradient"
    color={sidenavColor}
    onClick={year4Btn}
    style={{width:180,marginLeft:10,marginTop:25}}
    >Year 4</MDButton>
    <MDButton
    rel="noreferrer"
    variant="gradient"
    color={sidenavColor}
    onClick={year5Btn}
    style={{width:180,marginLeft:10,marginTop:25}}
    >Year 5</MDButton>
    </div>

    {year1 === true ?(
      <Year1 />
    ): year2 === true ?(
      <Year2 />
    ): year3 === true ?(
      <Year3 />
    ): year4 === true ?(
      <Year4 />
    ): year5 === true ?(
      <Year5 />
    ):(
      <></>
    )}
    </MDBox>
  )
}

export default Civil