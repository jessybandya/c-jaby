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
import Cantiliver from './Cantiliver/Bending-reinforcrments'
import SimpleBeamShear from './Simple-beam/Shear';


function Eurocode({ beamFun }) {
  const [controller] = useMaterialUIController();
  const { sidenavColor } = controller;  
  const [simpleBending, setSimpleBending] = useState(false)
  const [simpleShear, setSimpleShear] = useState(false)
  const [cantiliverBending, setCantiliverBending] = useState(false)
  const titleRef = useRef()

  const [showSimple, setShowSimple] = useState(false);
  const [showSimpleShear, setShowSimpleShear] = useState(false);
  const [showCantiliver, setShowCantiliver] = useState(false);


  const handleSimpleClose = () => setShowSimple(false);
  const handleSimpleShow = () => setShowSimple(true);
  const handleSimpleShearClose = () => setShowSimpleShear(false);
  const handleCantiliverClose = () => setShowCantiliver(false);
  const handleCantiliverShow = () => setShowCantiliver(true);

  // Simple Beam
  const simpleBendingFun = () =>{
    handleSimpleClose()
    if(simpleBending === false){
      setSimpleBending(true)
    }else{
      setSimpleBending(false)
    }
  }

// Cantiliver
  const cantiliverBendingFun = () =>{
    handleCantiliverClose()
    if(cantiliverBending === false){
      setCantiliverBending(true)
    }else{
      setCantiliverBending(false)
    }
  }

  // Simple beam shear
  const simpleShearFun = () =>{
    handleSimpleClose()
    if(simpleShear === false){
      setSimpleShear(true)
    }else{
      setSimpleShear(false)
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
  ): cantiliverBending === true ?(
    <Cantiliver simpleBendingFun={cantiliverBendingFun} titleRef={titleRef}/>
  ): simpleShear === true ?(
    <SimpleBeamShear simpleBendingFun={simpleShearFun} />
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
    onClick={handleCantiliverShow}
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

{/* Simple Beam Modal*/}
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
  onClick={simpleShearFun}
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


{/* Cantiliver Modal*/}
<Modal show={showCantiliver} onHide={handleCantiliverClose}
size='lg'
>
<Card>
<Modal.Body>
<center>
<MDTypography style={{fontWeight:'bold',color:'#49a3f1'}}>
  Cantiliver Beam
</MDTypography>
</center>
<hr style={{color:'#fff'}}/>
<div style={{display: "flex",flexWrap: "wrap",alignItems:"center",justifyContent: "center"}}>
<MDButton
rel="noreferrer"
variant="gradient"
color={sidenavColor}
style={{width:180,marginLeft:10,marginTop:25}}
onClick={cantiliverBendingFun}
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
  <Button variant="primary" onClick={handleCantiliverClose}>
    Close
  </Button>
</Modal.Footer>
</Card>
</Modal>




  </Box>
  )
}

export default Eurocode