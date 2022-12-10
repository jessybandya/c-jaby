import React, {useState, useEffect, useRef} from 'react'
import MDTypography from '../../../../components1/MDTypography'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import MDButton from '../../../../components1/MDButton';
import { useMaterialUIController } from '../../../../context';
import SimpleBeam from './Simple-beam';


function Eurocode({ beamFun }) {
  const [controller] = useMaterialUIController();
  const { sidenavColor } = controller;  
  const [simple, setSimple] = useState(false)
  const titleRef = useRef()

  const simpleFun = () =>{
    if(simple === false){
      setSimple(true)
    }else{
      setSimple(false)
    }
  }





  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <i>BEAM DESIGN</i>
        </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <ClearIcon fontSize='medium' onClick={beamFun}/>
            </IconButton>
          </div>
      </Toolbar>
    </AppBar>
    <hr style={{marginTop:-15}}/>

  {simple === true ?(
    <SimpleBeam simpleFun={simpleFun} titleRef={titleRef}/>
  ):(
    <div style={{display: "flex",flexWrap: "wrap",alignItems:"center",justifyContent: "center"}}>
    <MDButton
    rel="noreferrer"
    variant="gradient"
    color={sidenavColor}
    onClick={simpleFun}
    >Simple Beam</MDButton>

    <MDButton
    rel="noreferrer"
    variant="gradient"
    color={sidenavColor}
    style={{marginLeft:5}}
    >Continous Beam</MDButton>
    </div>
  )}

  </Box>
  )
}

export default Eurocode