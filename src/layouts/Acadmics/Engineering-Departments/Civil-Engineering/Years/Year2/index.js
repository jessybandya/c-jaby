import React,{useState, useEffect} from 'react';
import Card from "@mui/material/Card";
import MDBox from "../../../../../../components1/MDBox";
import {useMaterialUIController} from "../../../../../../context";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { motion } from "framer-motion";
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import { styled } from '@mui/material/styles';
import { auth1, db } from '../../../../../../components/firebase';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Modal } from 'react-bootstrap';
import MDTypography from '../../../../../../components1/MDTypography';
import "./styles.css"
import CloseIcon from '@mui/icons-material/Close';
import Exams from './Sem1/Exams';



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

const Input = styled('input')({
  display: 'none',
});

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const flip = {
  hidden: {
    transform: "scale(0) rotateX(-360deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotateX(360deg)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function Year1() {
   const [sem1, setSem1] = React.useState('');
   const [sem2, setSem2] = React.useState('');
   const [profileUserData, setProfileUserData] = useState();
   const [value, setValue] = useState('');
   const theme = useTheme();
   const [value1, setValue1] = React.useState(0);
   const [open, setOpen] = React.useState(false);
   const [scroll, setScroll] = React.useState('paper'); 
   const [open2, setOpen2] = React.useState(false);
   const [scroll2, setScroll2] = React.useState('paper');
   const descriptionElementRef = React.useRef(null);
   const [age, setAge] = React.useState('');
   const [show, setShow] = useState(false);
   const [fullscreen, setFullscreen] = useState(true);

   const handleChange30 = (event) => {
    setAge(event.target.value);
  };
  const closeModal = () => {
    setShow(false)
    setAge('')
  }


   const handleChange0 = (event, newValue) => {
     setValue1(newValue);
   };
 
   const handleChangeIndex = (index) => {
     setValue(index);
   };



   useEffect(() => {
     db.collection('users').doc(`${auth1?.currentUser?.uid}`).onSnapshot((doc) => {
         setProfileUserData(doc.data());
     });
 }, [])


   const handleChange = (event) => {
    setSem1(event.target.value);
   };
   const handleChange2 = (event) => {
    setSem2(event.target.value);
   };


  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
    setOpen2(false);
    setShow(true)
  };

  const handleClickOpen2 = (scrollType) => () => {
    setOpen2(true);
    setScroll2(scrollType);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };


  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);


  return <div>
  <MDBox py={3}>
  <div >
  <Box sx={{ minWidth: 100,display: "flex" }}>
  <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Year 2 Sementer 1</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={sem1}
      sx={{ height: 40}}
      label="Year 2 Sementer 1"
      onChange={handleChange}
    >
      <MenuItem onClick={handleClickOpen('paper')} value="FCE 201">FCE 201 THEORY OF STRUCTURES 1A</MenuItem>
      <MenuItem onClick={handleClickOpen('paper')} value="FCE 211">FCE 211 GEOTECHNICAL ENGINEERING 1</MenuItem>
      <MenuItem onClick={handleClickOpen('paper')} value="FCE 231">FCE 231 STRENGTH OF MATERIALS 1A</MenuItem>
      <MenuItem onClick={handleClickOpen('paper')} value="FCE 245">FCE 245 MATERIAL SCIENCE</MenuItem>
      <MenuItem onClick={handleClickOpen('paper')} value="FCE 265">FCE 265 COMPUTER SCIENCE II</MenuItem>
      <MenuItem onClick={handleClickOpen('paper')} value="FCE 251">FCE 251 ENGINEERING SURVEYING 1</MenuItem>
      <MenuItem onClick={handleClickOpen('paper')} value="FCE 261">FCE 261 ENGINEERING MATHEMATICS 1A</MenuItem>
      <MenuItem onClick={handleClickOpen('paper')} value="FCE 271">FCE 271 ENGINEERING ECONOMICS</MenuItem>
    </Select>
  </FormControl>

  <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Year 2 Sementer 2</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={sem2}
    sx={{ height: 40}}
    label="Year 2 Sementer 2"
    onChange={handleChange2}
  >
  <MenuItem>work in progress...</MenuItem>
  </Select>
</FormControl>
</Box>
</div>


<div>
<MDBox>
<Modal style={{zIndex: 1500}} show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
<Card>
<Modal.Header style={{backgroundColor:'#1a2035',display: 'block'}}>
  <AppBar position="static">
  <Tabs
    value={value1}
    onChange={handleChange0}
    indicatorColor="secondary"
    textColor="inherit"
    aria-label="full width tabs example"
  >
    <Tab label="EXAMS" {...a11yProps(0)} />
    <Tab label="SUPPS" {...a11yProps(1)} />
  </Tabs>
</AppBar>
<div style={{alignItems:'center',display:'flex',justifyContent: 'center',marginTop:10}}>
<Box sx={{ width: '100%' }}>
<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Select Academic year</InputLabel>
  <Select
  MenuProps={{
    style: {zIndex: 2001}
}}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    sx={{ height: 40}}
    label="Select Academic year"
    onChange={handleChange30}
  >
    <MenuItem value="">Select Academic year</MenuItem>
    <MenuItem value="2022/23">2022/23</MenuItem>
    <MenuItem value="2021/22">2021/22</MenuItem>
    <MenuItem value="2020/21">2020/21</MenuItem>
    <MenuItem value="2019/20">2019/20</MenuItem>
    <MenuItem value="2018/19">2018/19</MenuItem>
    <MenuItem value="2017/18">2017/18</MenuItem>
    <MenuItem value="2016/17">2016/17</MenuItem>
    <MenuItem value="2015/16">2015/16</MenuItem>
    <MenuItem value="2014/15">2014/15</MenuItem>
    <MenuItem value="2013/14">2013/14</MenuItem>
    <MenuItem value="2012/13">2012/13</MenuItem>
    <MenuItem value="2011/12">2011/12</MenuItem>
    <MenuItem value="2010/11">2010/11</MenuItem>
  </Select>
</FormControl>
</Box>
<Modal.Title><CloseIcon fontSize="large" style={{color:'#0d6efd', cursor:'pointer'}} onClick={closeModal}/></Modal.Title>
</div>
</Modal.Header>
</Card>

<Modal.Body 
style={{
  overflowY: 'auto',
  width: '100%',
  backgroundColor:'#1a2035'
 }}
>
<Card >
<MDBox >
<motion.div
  onClick={(e) => e.stopPropagation()}  // Prevent click from closing modal
  variants={flip}
  initial="hidden"
  animate="visible"
  exit="exit"
  >
<Box>

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value1}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value1} index={0} dir={theme.direction}>
          <Exams unit={sem1} />
        </TabPanel>
        <TabPanel value={value1} index={1} dir={theme.direction}>
        <MDTypography>
        Supps
        </MDTypography>
          
        </TabPanel>
      </SwipeableViews>
    </Box>
    
    </motion.div>
</MDBox>
</Card>


</Modal.Body>
</Modal>
</MDBox>



<Dialog
  open={open2}
  onClose={handleClose2}
  scroll={scroll}
  aria-labelledby="scroll-dialog-title"
  aria-describedby="scroll-dialog-description"
  style={{width: "100%"}}
  fullWidth
>
  <MDBox><DialogTitle   style={{backgroundColor: "#1a2035",border: "1px solid #1a2035"}}
  id="scroll-dialog-title">

  <div style={{display: "flex",justifyContent: "space-between"}}>
  <div><AddIcon fontSize='medium' style={{cursor: "pointer",color: "#fff"}}/></div> <div><MDBox style={{color: "#fff"}}>Year 1  Sem I</MDBox></div> <div> <CancelIcon fontSize='medium' onClick={handleClose} style={{cursor: "pointer",color: "#fff"}}/></div>
  </div>  
  </DialogTitle></MDBox>
  <DialogContent style={{backgroundColor: "#1a2035"}} dividers={scroll === 'paper'}>
  <motion.div
  onClick={(e) => e.stopPropagation()}  // Prevent click from closing modal
  variants={flip}
  initial="hidden"
  animate="visible"
  exit="exit"
  >


  </motion.div>

  </DialogContent>
  <DialogActions style={{backgroundColor: "#1a2035"}}>
      <h1>Add Button</h1>
  </DialogActions>
</Dialog>
</div>

  </MDBox>
  </div>;
}

export default Year1;
