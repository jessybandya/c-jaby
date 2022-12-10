import React, {useState,useEffect} from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Modal} from "react-bootstrap"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import { db } from "../../../../../components/firebase"
import {  toast } from 'react-toastify';

function Emergency({ fromId, code, postId, timestamp, yos, descriptions, pastPaperName, year, unit, file, department, semester}) {
    const [senderInfoModal, setSenderInfoModal] = React.useState(false);
    const [senderInfo, setSenderInfo] = React.useState('');

    const theme = useTheme();


    const deleteEmergency = () =>{
      if(window.confirm(`Are you sure you want to delete: ${code} - ${pastPaperName} - ${year}?`)){
          db.collection("past-papers").doc(postId).delete().then(function() {
          }).catch(function(error) {
              toast.error("Error removing post: ", error);
          }); 
          toast.success("Past paper has been deleted!")   
        }
  }

  

  return (
    <React.Fragment>
    <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
      <TableCell component="th" scope="row">{code}</TableCell>
      <TableCell align="right">{pastPaperName}</TableCell>
      <TableCell align="right">{department}</TableCell>
      <TableCell align="right">{yos}</TableCell>
      <TableCell align="right">{semester}</TableCell>
      <TableCell align="right">{year}</TableCell>
      <TableCell style={{fontWeight:'900'}} align="right"><VisibilityIcon onClick={() => setSenderInfoModal(true)} style={{color:'#20c997',cursor:'pointer'}}/></TableCell>
      <TableCell align="right"><VisibilityIcon onClick={() => setSenderInfoModal(true)} style={{color:'#20c997',cursor:'pointer'}}/></TableCell>
      <TableCell style={{justifyContent:'space-between'}} align="right">
       <DeleteForeverIcon onClick={deleteEmergency} style={{color:'#20c997',cursor:'pointer'}}/>
      </TableCell>
      <TableCell  align="right">
           
      </TableCell>
    </TableRow>
    <Modal
    show={senderInfoModal}
    onHide={() => setSenderInfoModal(false)}
    aria-labelledby="contained-modal-title-vcenter"
    style={{zIndex:1500}}
  >
    <Modal.Header closeButton>
        <center><img src="/images/logo.png" alt="image" /></center>
    </Modal.Header>
    <Modal.Body>

    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#20c997' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
          fullWidth
          id="filled-read-only-input"
          value={`${senderInfo?.name}`}
            inputProps={{
                style: {
                  height: "30px",
                },
                readOnly: true,
              }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            value={`${senderInfo?.email}`}
            inputProps={{
                style: {
                  height: "30px",
                },
                readOnly: true,
              }}
          />
        </Box>
      </Box>
    </Container>
  </ThemeProvider>

    </Modal.Body>
    <Modal.Footer></Modal.Footer>
    </Modal>
  </React.Fragment>
  )
}

export default Emergency