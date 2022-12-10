import moment from 'moment';
import { auth1, db } from '../../../../../../../../../../../components/firebase';
import MDTypography from "../../../../../../../../../../../components1/MDTypography"
import { toast, ToastContainer } from 'react-toastify';
import swal from "@sweetalert/with-react";
import { Modal, Button } from 'react-bootstrap';
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import { Avatar, Comment, Tooltip } from 'antd';
import React, { createElement, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Post({comment, fromId,timestamp,read,count,postId1,postId }) {
  const [report, setReport] = React.useState('');
  const [currentUser, setCurrentUser] = useState('')
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);
  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };
  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const handleChange = (event) => {
    setReport(event.target.value);
};
  useEffect(() => {
    db.collection('users').doc(`${fromId}`).onSnapshot((doc) => {
      setCurrentUser(doc.data());
    });
}, []) 

const deleteReview = () =>{
  if(window.confirm(`Are you sure you want to delete comment: ${comment}?`)){
      db.collection("pastpapers").doc(postId1).collection("comments").doc(postId).delete().then(function() {
      }).catch(function(error) {
          toast.error("Error removing post: ", error);
      }); 
      swal("Your comment has been deleted ✔️!") 
    }
}
const reportReview = () =>{
  if(!report){
      toast.error("Select from the form!")
  }else{
      db.collection("reports").add({
          reporterByUid:auth1?.currentUser?.uid,
          report,
          timestamp: Date.now(),
      }).
      then((e)=> 
      setShow(false),
      setReport(""),
      swal("Your report has been sent to the admin ✔️!")
      )
     
  }
}



const actions = [
   <div align="right">
   <span key="comment-basic-reply-to">Reply to</span>
   </div>
];

  return (
    <>
    <Comment
    author={<a style={{color:'#0d6efd'}}>{currentUser.firstName} {currentUser.lastName}</a>}
    avatar={<Avatar src={currentUser.photoURL} alt={currentUser.firstName}/>}
    content={
      <p>
      {comment}
      </p>
    }
    datetime={
      <Tooltip title="2016-11-22 11:22:33">
        <span>{moment(timestamp).fromNow()}</span>
      </Tooltip>
    }
  />

  <Modal show={show} 
  style={{zIndex:2001}}
  onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Report Comment!</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <Box sx={{ minWidth: 120 }}>
<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Which of these has been terminated...</InputLabel>
  <Select
  MenuProps={{
    style: {zIndex: 2001}
}}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={report}
    sx={{ height: 40}}
    label="Which of these has been terminated..."
    onChange={handleChange}
  >
    <MenuItem value="Abusive Content">Abusive Content</MenuItem>
    <MenuItem value="Pornographic Content">Pornographic Content</MenuItem>
    <MenuItem value="Out of Content">Out of Content </MenuItem>
  </Select>
</FormControl>
</Box>
  </Modal.Body>
  <Modal.Footer>
  <Button onClick={reportReview} variant="primary">
    Submit
    </Button>
    <Button variant="primary" onClick={handleClose}>
    Close
    </Button>
  </Modal.Footer>
</Modal>
  </>
  )
}

export default Post