import React, { forwardRef, useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import swal from "@sweetalert/with-react";
// import CommentReplies from "../CommentsReplies";
import MDBox from "../../../../../../../../../components1/MDBox";
import MDTypography from "../../../../../../../../../components1/MDTypography";
import MDButton from "../../../../../../../../../components1/MDButton";
import Grid from "@mui/material/Grid";
import { auth1, db } from "../../../../../../../../../components/firebase";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { saveAs } from "file-saver";
// Core viewer
import { Viewer } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Button, Modal } from "react-bootstrap";
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { Document, Page, pdfjs } from "react-pdf";
import { useMaterialUIController } from "../../../../../../../../../context";
import jsPDF from 'jspdf'
import Comments from "./Comments";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
  

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function abbrNum(number, decPlaces) {
  // 2 decimal places => 100, 3 => 1000, etc
  decPlaces = Math.pow(10,decPlaces);

  // Enumerate number abbreviations
  var abbrev = [ "K", "M", "B", "T" ];

  // Go through the array backwards, so we do the largest first
  for (var i=abbrev.length-1; i>=0; i--) {

      // Convert array index to "1000", "1000000", etc
      var size = Math.pow(10,(i+1)*3);

      // If the number is bigger or equal do the abbreviation
      if(size <= number) {
           // Here, we multiply by decPlaces, round, and then divide by decPlaces.
           // This gives us nice rounding to a particular decimal place.
           number = Math.round(number*decPlaces/size)/decPlaces;

           // Add the letter for the abbreviation
           number += abbrev[i];

           // We are done... stop
           break;
      }
  }

  return number;
}




function Posts({ fromId, code, postId, timestamp, comment, descriptions, pastPaperName, year, unit, file}) {
  const [profileUserData, setProfileUserData] = useState();
  const [profileUserData1, setProfileUserData1] = useState();
  const [commentCount, setCommentCount] = useState(0);
  const [solutionsCount, setSolutionsCount] = useState(0);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [lgView, setLgView] = useState(false);
  const [lgMore, setLgMore] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [comment1, setComment1] = React.useState('');
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [controller ] = useMaterialUIController();
  const { sidenavColor } = controller;
  var FileSaver = require('file-saver');
  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    db.collection('users').doc(`${auth1?.currentUser?.uid}`).onSnapshot((doc) => {
      setCurrentUser(doc.data());
    });
}, []) 

  const saveAsFun = () => {
    FileSaver.saveAs(`${file}`, `${pastPaperName}`);
  }

  const handleChangeComment = (event) => {
    setComment1(event.target.value);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };


  useEffect(() => {
    db.collection('users').doc(`${fromId}`).onSnapshot((doc) => {
        setProfileUserData(doc.data());
    });
}, [])


const commentPost = () => {
  
    db.collection("pastpapers").doc(`${postId}`).collection("comments").add({
      read: false,
      count:false,
      postId:postId,
      fromId:auth1?.currentUser?.uid,
      comment: comment1,
      timestamp: Date.now(),
  }).then(() => setComment1(""));
}


useEffect(() => {
  db.collection('users').doc(`${auth1?.currentUser?.uid}`).onSnapshot((doc) => {
      setProfileUserData1(doc.data());
  });
}, [])

useEffect(() => {
  db.collection('pastpapers').doc(`${postId}`).collection("comments").where("count", "==",false)
  .onSnapshot(snapshot => (
  setCommentCount(snapshot.docs.length)
  ))
  }, []);


  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const [value1, setValue1] = React.useState(0);
  const handleChange0 = (event, newValue) => {
    setValue1(newValue);
  };

  function changePage(offSet){
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }

  function changePageBack(){
    changePage(-1)
  }

  function changePageNext(){
    changePage(+1)
  }

  

  
    return (
        <MDBox>

          {unit === code &&(
            <Grid item>
            <Card
            sx={{marginTop:3,margin:1, border:'2px solid #0d6efd'}}
          >

            <MDBox mt={1} mx={0.5} p={1}>
            <center>
            <MDTypography variant="button" fontWeight="regular" color="text" textTransform="capitalize">
            {year}
            </MDTypography>          
            </center>
              <MDBox mb={1}>
              <center>
              <MDTypography
              color="text"
                variant="h5"
                textTransform="capitalize"
              >
                {pastPaperName}
              </MDTypography>              
              </center>
              </MDBox>
              <hr />
        <center>
        <MDBox mb={1}>
        <MDTypography
        color="text"
          variant="h5"
          textTransform="capitalize"
        >
          CODE: {code}
        </MDTypography>
    </MDBox>
        </center>
              
              <MDBox display="flex" justifyContent="space-between" alignItems="center">
              {auth1?.currentUser?.uid ?(
                <>
                <MDButton 
                onClick={() => setLgView(true)}
                variant="outlined"
                color='info'
                ><VisibilityIcon /></MDButton>
                </>
              ):(
                <MDButton 
                onClick={() => alert("Kindly signIn first.\nThanks.")}
                variant="outlined"
                color='info'
                ><VisibilityIcon /></MDButton>
              )}

                  <MDButton
                  onClick={() => setLgMore(true)}
                    size="small"
                    color='info'
                  >
                    More
                  </MDButton>

                  {auth1?.currentUser?.uid ?(
                    <MDButton 
                
                    variant="outlined"
                    color='info'
                    onClick={saveAsFun}
                    ><DownloadIcon /></MDButton>
                  ):(
                    <MDButton 
                
                    variant="outlined"
                    color='info'
                    onClick={() => alert("Kindly signIn first.\nThanks")}
                    ><DownloadIcon /></MDButton>
                  )}
              </MDBox>
            </MDBox>
          </Card>

          <Modal
          size="lg"
          style={{zIndex:2001}}
          show={lgView}
          onHide={() => setLgView(false)}
          aria-labelledby="contained-modal-title-vcenter"
        >

      <Modal.Body style={{
        height: '100%',
        width: '100%',
        backgroundColor:'#1a2035',
       }}>
          <MDTypography>
          <div>
          <iframe src={`${file}#toolbar=0`} height="500px" width="100%" frameborder="0" ></iframe>
      </div>
          </MDTypography>            
          </Modal.Body>
          <Modal.Footer style={{backgroundColor:'#1a2035',display: 'block'}}>
 
          <div align="right"> 
          <a href={file} target="__blank">
          <MDButton
          rel="noreferrer"
          variant="gradient"
          style={{marginRight:5}}
          color={sidenavColor}
          >View On Web</MDButton>
          </a>       
          <MDButton
          rel="noreferrer"
          variant="gradient"
          color={sidenavColor}
          onClick={() => setLgView(false)}
          >Cancel</MDButton>
          </div>
          </Modal.Footer>

        </Modal>

        <Modal
        size="lg"
        style={{zIndex:2001}}
        show={lgMore}
        onHide={() => setLgMore(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
      <Modal.Header style={{backgroundColor:'#1a2035',display: 'block'}}>
      <AppBar position="static">
      <Tabs
        value={value1}
        onChange={handleChange0}
        indicatorColor="secondary"
        textColor="inherit"
        aria-label="full width tabs example"
      >
        <Tab label={`Solutions (${abbrNum(solutionsCount,1)})`} {...a11yProps(0)} />
        <Tab label={`Comments (${abbrNum(commentCount,1)})`} {...a11yProps(1)} />
      </Tabs>
    </AppBar>

    <Modal.Title align="right"><CloseIcon fontSize="large" style={{color:'#0d6efd', cursor:'pointer'}} onClick={() => setLgMore(false)}/></Modal.Title>
    </Modal.Header>
    <Modal.Body 
    style={{
      height: 'calc(95vh - 210px)',
      overflowY: 'auto',
      backgroundColor:'#1a2035'
     }}
    >
    <Card >
    <MDBox >

    <Box>
    
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value1}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value1} index={0} dir={theme.direction}>
            <MDTypography>
            {auth1?.currentUser?.uid ?(
              <center>Solutions will be uploaded soon!</center>
            ):(
              <center>Sign In to view solutions!</center>
            )}
            </MDTypography> 
            </TabPanel>
            <TabPanel value={value1} index={1} dir={theme.direction}>
            <MDTypography>
            <Comments postId={postId}/>
            </MDTypography>              
            </TabPanel>
          </SwipeableViews>
        </Box>
       </MDBox>
    </Card>
    
    
    </Modal.Body>

    {auth1?.currentUser?.uid ?(
      <>
      {value1 === 1 ?(
        <Modal.Footer
        style={{
          backgroundColor:'#1a2035',
          justifyContent: 'space-between',
          display: 'flex',
          alignItems:'center',
          alignContent: 'center',
          flex: 1
         }}
        >
          <div style={{width:'100%',flex:0.9}}>
          <TextField
          id="full-width-text-field"
          label="leave a comment here..."
          placeholder={`${currentUser?.firstName}, ready for your comment...😊`}
          value={comment1}
          onChange={handleChangeComment}
          multiline
          maxRows={2}
          fullWidth     
        />
          </div>
     <div style={{flex:0.1}}>
     {!comment1 ?(
       <>
       <img
       alt={`${currentUser?.firstName}`}
       src={`${currentUser?.photoURL}`}
       style={{ width: 35, height: 35, borderRadius: 35/2, objectFit:'cover' }}
     />
       </>
     ):(
      <>
      <i onClick={commentPost} style={{color:'#0d6efd',cursor:'pointer'}} class="fa fa-paper-plane" aria-hidden="true"></i>
      </>
     )}
     </div>
     </Modal.Footer>
      ):(
        <Modal.Footer
        style={{
          backgroundColor:'#1a2035',
         }}
        >   
    
        <div align="right"
        >
        
        <MDButton
        color='info'
        style={{marginRight:5}}
        onClick={() => alert("On progress...")}
      >
      Add Solutions <AddIcon/>
      </MDButton>
        <MDButton
          color='info'
          onClick={saveAsFun}
        >
        Download <DownloadIcon/>
        </MDButton>
        </div>
     </Modal.Footer>
      )}

   </>
    ):(
      <Modal.Footer
      style={{
        backgroundColor:'#1a2035',
       }}
      >
  
      <div align="right"
      >
      {auth1?.currentUser?.uid ?(
        <MDButton
        color='info'
        onClick={saveAsFun}
      >
      Download <DownloadIcon/>
      </MDButton>
      ):(
        <MDButton
        color='info'
        onClick={() => alert("Kindly signIn first.\nThanks.")}
      >
      Download <DownloadIcon/>
      </MDButton>
      )}
      </div>
   </Modal.Footer>
    )}

      </Modal>

            </Grid>

          )}



        </MDBox>
    )
}

export default Posts
