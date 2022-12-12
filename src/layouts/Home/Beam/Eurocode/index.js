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
import SimpleBeam from './Simple-beam/Bending-reinforcrments';
import Card from "@mui/material/Card";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Eurocode({ beamFun }) {
  const [controller] = useMaterialUIController();
  const { sidenavColor } = controller;  
  const [simpleBending, setSimpleBending] = useState(false)
  const titleRef = useRef()

  const [showSimple, setShowSimple] = useState(false);

  const handleSimpleClose = () => setShowSimple(false);
  const handleSimpleShow = () => setShowSimple(true);

  const simpleBendingFun = () =>{
    handleSimpleClose()
    if(simpleBending === false){
      setSimpleBending(true)
    }else{
      setSimpleBending(false)
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

  {simpleBending === true ?(
    <SimpleBeam simpleBendingFun={simpleBendingFun} titleRef={titleRef}/>
  ):(
    <div style={{display: "flex",flexWrap: "wrap",alignItems:"center",justifyContent: "center"}}>
    <MDButton
    rel="noreferrer"
    variant="gradient"
    color={sidenavColor}
    onClick={handleSimpleShow}
    >Single-span(Simply supported Beam)</MDButton>

    <MDButton
    rel="noreferrer"
    variant="gradient"
    color={sidenavColor}
    onClick={handleSimpleShow}
    style={{marginLeft:5}}
    >Single-span(Cantiliver Beam)</MDButton>

    <MDButton
    rel="noreferrer"
    variant="gradient"
    color={sidenavColor}
    style={{marginLeft:5}}
    >Continous Beam</MDButton>
    </div>
  )}


  <Modal show={showSimple} onHide={handleSimpleClose}
  size='lg'
  >
  <Card>
  <Modal.Body>
  <center>
  <MDTypography style={{fontWeight:'bold',color:'#49a3f1'}}>
    Simple Beam
  </MDTypography>
  </center>
  <hr style={{color:'#fff'}}/>
  <div style={{display: "flex",flexWrap: "wrap",alignItems:"center",justifyContent: "center"}}>
  <MDButton
  rel="noreferrer"
  variant="gradient"
  color={sidenavColor}
  style={{width:180,marginLeft:10,marginTop:25}}
  onClick={simpleBendingFun}
  >BENDING</MDButton>
  <MDButton
  rel="noreferrer"
  variant="gradient"
  color={sidenavColor}
  style={{width:180,marginLeft:10,marginTop:25}}
  >SHEAR</MDButton>
  <MDButton
  rel="noreferrer"
  variant="gradient"
  color={sidenavColor}
  style={{width:180,marginLeft:10,marginTop:25}}
  >DEFLECTION</MDButton>
  </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="primary" onClick={handleSimpleClose}>
      Close
    </Button>
  </Modal.Footer>
  </Card>
</Modal>

  </Box>
  )
}

export default Eurocode