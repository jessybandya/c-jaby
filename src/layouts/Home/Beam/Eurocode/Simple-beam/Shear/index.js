import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Card from "@mui/material/Card";
import ClearIcon from '@mui/icons-material/Clear';
import MDButton from '../../../../../../components1/MDButton';
import { useMaterialUIController } from '../../../../../../context';
import {  Modal } from 'react-bootstrap'
import MDTypography from '../../../../../../components1/MDTypography';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Rectangular from './Rectangular';
import MDInput from '../../../../../../components1/MDInput';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ToastContainer, toast } from 'react-toastify';

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
        <Card sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Card>
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


export default function SimpleBeam({ simpleBendingFun }) {
    const [controller] = useMaterialUIController();
    const { sidenavColor } = controller;  
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [dLoad, setDLoad] = useState('');
    const [hCrossSection, setHeightCrossSection] = useState('');
    const [bCrossSection, setBCrossSection] = useState('');
    const [memberLength, setMemberLength] = useState('');
    const [mainBar, setMainBar] = useState('');
    const [link, setLink] = useState('');
    const [fck, setFck] = useState('');
    const [fyk, setFyk] = useState('');
    const [cover, setCover] = useState('');
    const [showTable, setShowTable] = useState(false)
    const [loading, setLoading] = useState(false)


    // Ans actions wl2/8
     const [d1, setD1] = useState(0)
     const [d2, setD2] = useState(0)

    const calculate1 = () => {
      setLoading(true)
      if(!name){
        toast.error("Name your beam!")
        setLoading(false)
      }else if(!mainBar){
        toast.error("Main Bar Diameter is required!")
        setLoading(false)
      }else if(isNaN(+mainBar)){
        toast.error("Main Bar Diameter is required as a number!")
        setLoading(false)
      }else if(!link){
        toast.error("Link Diameter is required!")
        setLoading(false)
      }else if(isNaN(+link)){
        toast.error("Link Diameter is required as a number!")
        setLoading(false)
      }else if(!dLoad){
        toast.error("Design load from slab!")
        setLoading(false)
      }else if(isNaN(+dLoad)){
        toast.error("Design load is required as a number!")
        setLoading(false)
      }else if(!hCrossSection){
        toast.error("Cross section height!")
        setLoading(false)
      }else if(isNaN(+hCrossSection)){
        toast.error("Cross section height is required as a number!")
        setLoading(false)
      }else if(!bCrossSection){
        toast.error("Cross sectional Width is required!")
        setLoading(false)
      }else if(isNaN(+bCrossSection)){
        toast.error("Cross sectional Width is required as a number!")
        setLoading(false)
      }else if(!memberLength){
        toast.error("Memmber length is required!")
        setLoading(false)
      }else if(isNaN(+memberLength)){
        toast.error("Member length is required as a number!")
        setLoading(false)
      }else if(!cover){
        toast.error("Cover is required!")
        setLoading(false)
      }else if(isNaN(+cover)){
        toast.error("Cover is required as a number!")
        setLoading(false)
      }else if(!fck){
        toast.error("Crushing Cylindrical strength is required!")
        setLoading(false)
      }else if(isNaN(+fck)){
        toast.error("Crushing Cylindrical strength is required as a number!")
        setLoading(false)
      }else if(!fyk){
        toast.error("Yield strength is required!")
        setLoading(false)
      }else if(isNaN(+fyk)){
        toast.error("Yield strength is required as a number!")
        setLoading(false)
      }else{
        var d1 = parseFloat(hCrossSection) - parseFloat(cover) - parseFloat(link) - parseFloat(mainBar) / 2
        var d2 = parseFloat(cover) + parseFloat(link) + parseFloat(mainBar) / 2        
        setD1(d1)
        setD2(d2)
        setLoading(false)
        setShowTable(true)
        handleClose()
      }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const theme = useTheme();
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };

  return (
    <Card>
      <CssBaseline />
      <div style={{
        height:'70vh',
        overflowY:'auto',
      }}>
      <div
      style={{
        display:'flex',
        justifyContent:'space-between'
      }}
      >
      <div><ClearIcon fontSize='large' onClick={simpleBendingFun} style={{color:'#88888888',cursor:'pointer'}}/></div>
      <div>
      <center style={{flexWrap:'wrap'}}>
      <MDButton
      rel="noreferrer"
      variant="gradient"
      color={sidenavColor}
      onClick={handleShow}
      style={{marginTop:8}}
      >Concrete Member(Shear Design)</MDButton>
      <MDButton
      rel="noreferrer"
      variant="gradient"
      color={sidenavColor}
      style={{marginLeft:5, marginTop:8}}
      >Steel Member(Shear Design)</MDButton>
      </center> 
      </div>
      <div></div>    
      </div>

 
        <center>
        {showTable === true ?(
          <Rectangular d1={d1} d2={d2} fck={fck} fyk={fyk} hCrossSection={hCrossSection} bCrossSection={bCrossSection} memberLength={memberLength} name={name} link={link} cover={cover} dLoad={dLoad} mainBar={mainBar}/>
        ):(
        <span></span>
        )}
        </center>         
      </div>

      <Modal show={show} onHide={handleClose}
      size="lg"
      style={{borderRadius:10}}
      >
      <Card>
      <ToastContainer />
      <Modal.Header style={{display:'block'}}>
         <div style={{alignItems:'center',justifyContent:'space-between',display:'flex'}}><MDTypography>Shear Reinforcement(Simple Beam)</MDTypography> <ClearIcon fontSize='medium' style={{color:'#88888888',cursor:'pointer'}} onClick={handleClose}/></div>
         <div>
         <AppBar position="static">
         <Tabs
           value={value}
           onChange={handleChange}
           indicatorColor="secondary"
           textColor="inherit"
           variant="fullWidth"
           aria-label="full width tabs example"
         >
           <Tab label="Rectangular/Square" {...a11yProps(0)} />
           <Tab label="Circular" {...a11yProps(1)} />
         </Tabs>
       </AppBar>
         </div>
      </Modal.Header>
      <Modal.Body
      style={{
        height:'65vh',
        overflowY:'auto'
      }}
      >
      <SwipeableViews
      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
      index={value}
      onChangeIndex={handleChangeIndex}
    >
      <TabPanel value={value} index={0} dir={theme.direction}>
      
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <MDInput
           type="text" label="Name your beam" variant="standard" fullWidth 
           value={name}
           onChange={(e) => setName(e.target.value)}
           />
            </Grid>
            <Grid item xs={12} sm={6}>
            <MDInput
           type="text" label="Main Bar Dia(mm)" variant="standard" fullWidth 
           value={mainBar}
           onChange={(e) => setMainBar(e.target.value)}
           />
            </Grid>
            <Grid item xs={12} sm={6}>
            <MDInput
           type="text" label="Link size(mm)" variant="standard" fullWidth 
           value={link}
           onChange={(e) => setLink(e.target.value)}
           />
            </Grid>
            <Grid item xs={12} sm={6}>
            <MDInput 
           type="text" label="Design Load(KNm-1)" variant="standard" fullWidth 
           value={dLoad}
           onChange={(e) => setDLoad(e.target.value)}
           />
            </Grid>
              <Grid item xs={12} sm={6}>
              <MDInput 
             type="text" label="Height of Cross Section(mm)" variant="standard" fullWidth 
             value={hCrossSection}
             onChange={(e) => setHeightCrossSection(e.target.value)}
             />
              </Grid>
              <Grid item xs={12} sm={6}>
              <MDInput 
             type="text" label="Width of Cross Section(mm)" variant="standard" fullWidth 
             value={bCrossSection}
             onChange={(e) => setBCrossSection(e.target.value)}
             />
              </Grid>
              <Grid item xs={12} sm={6}>
              <MDInput 
             type="text" label="Length of your beam(mm)" variant="standard" fullWidth 
             value={memberLength}
             onChange={(e) => setMemberLength(e.target.value)}
             />
              </Grid>
              <Grid item xs={12} sm={6}>
              <MDInput 
             type="text" label="Cover for reinforcement(mm)" variant="standard" fullWidth 
             value={cover}
             onChange={(e) => setCover(e.target.value)}
             />
              </Grid>
              <Grid item xs={12} sm={6}>
              <MDInput 
             type="text" label="Cyndrical crushing strength, fck(Nmm-2)" variant="standard" fullWidth 
             value={fck}
             onChange={(e) => setFck(e.target.value)}
             />
              </Grid>
              <Grid item xs={12} sm={6}>
              <MDInput 
             type="text" label="Yield strenth, fyk(Nmm-2)" variant="standard" fullWidth 
             value={fyk}
             onChange={(e) => setFyk(e.target.value)}
             />
              </Grid>
            </Grid>

          </Box>
        </Box>
      </Container>      
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
      <MDTypography>
         Circular 
      </MDTypography>
      </TabPanel>
    </SwipeableViews>
      </Modal.Body>
      <Modal.Footer>

      {value === 0 &&(
        <MDButton
        rel="noreferrer"
        variant="gradient"
        color={sidenavColor}
        onClick={calculate1}
        style={{marginTop:10}}
        fullWidth
        >
        {loading === true ?(
          <span>Calculating...</span>
        ):(
          <span>Calculate</span>
        )}
        </MDButton>
      )}
      </Modal.Footer>
      </Card>
    </Modal>
    </Card>
  );
}

