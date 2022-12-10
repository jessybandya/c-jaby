import React, { forwardRef, useEffect, useState } from "react";

import { db, auth1 } from "../../../../components/firebase"
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MDBox from "../../../../components1/MDBox";
import moment from 'moment'
import MDTypography from "../../../../components1/MDTypography";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ScrollableFeed from 'react-scrollable-feed'
import MDInput from "../../../../components1/MDInput";
import swal from "@sweetalert/with-react";
import SendIcon from '@mui/icons-material/Send';
import CommentReplies from "../CommentsReplies";


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


function Post({ fromId, commentId, postId, timestamp, comment}) {
  const [profileUserData, setProfileUserData] = useState();
  const [addComment, setAddComment] = useState("")
  const [profileUserData1, setProfileUserData1] = useState();
  const [commentReply, setComentReply] = useState(0);


  useEffect(() => {
    db.collection('users').doc(`${fromId}`).onSnapshot((doc) => {
        setProfileUserData(doc.data());
    });
}, [])
const [expanded, setExpanded] = React.useState(false);


const handleExpandClick = () => {
  setExpanded(!expanded);
};

const commentPost = (event) => {
  event.preventDefault(); 

  if(!addComment){
    swal("🔴 You cannot add an empty comment!")
  }else{
    db.collection("posts").doc(`${postId}`).collection("comments").doc(`${commentId}`).collection("replies").add({
      ownerId: fromId,
      read: false,
      count:false,
      postId:postId,
      comment: addComment,
      fromId:auth1?.currentUser?.uid,
      timestamp: Date.now(),
  }).then(() => setAddComment(""));
  db.collection("notifications").add({
    ownerId: fromId,
    read: false,
    count:false,
    postId,
    comment: addComment,
    type:"replies",
    fromId:auth1?.currentUser?.uid,
    timestamp: Date.now(),
}).then(() => setAddComment(""));
  setAddComment("")
}

setAddComment("")

}
useEffect(() => {
  db.collection('users').doc(`${auth1?.currentUser?.uid}`).onSnapshot((doc) => {
      setProfileUserData1(doc.data());
  });
}, [])

useEffect(() => {
  db.collection('posts').doc(`${postId}`).collection("comments").doc(`${commentId}`).collection("replies").where("count", "==",false)
  .onSnapshot(snapshot => (
  setComentReply(snapshot.docs.length)
  ))
  }, []);
    return (
        <MDBox className="post1">
                      {/* <Typography paragraph>
          
          <div style={{display: "flex",marginBottom:0,justifyContent:"space-between",padding:5,border: "2px solid #C5C5C5",borderRadius:5,backgroundColor:"white"}} className="post1" >
            <div style={{display: "flex"}}>
              <Avatar src={profileUserData?.photoURL} alt={`${profileUserData?.firstName} ${profileUserData?.lastName}`}/>
              <div style={{marginLeft:10}}>
              <div style={{fontWeight:"600"}}>{profileUserData?.firstName} {profileUserData?.lastName} <span style={{fontWeight:"100",color:"#AEAEAE"}}>@{profileUserData?.username}</span></div>
              <div style={{fontWeight:"600",color:"#808080",marginTop:5,fontSize:13,marginLeft:10}}>
              <Typography paragraph>
                {comment}
                <div style={{color: "white",marginTop:-8}}>
                UoN_ACES in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat.
                </div>
          </Typography>
              </div>
              <div style={{fontWeight:"400",color:"#696969",marginBottom:-15,marginTop:15,fontSize:13,marginLeft:10}}>{moment(timestamp).fromNow()}</div>

              <div style={{display:"flex",justifyContent:"space-between",padding:8,width:100}}>
           <div style={{alignItems:"center",display:"flex"}}><ThumbUpAltOutlinedIcon style={{color: "#3f51b5"}}/><span style={{fontWeight:"500",marginLeft:0}}>4.5K</span></div>
           <div style={{alignItems:"center",display:"flex",marginTop:10,marginLeft:15}}><a href={`#`}><ChatBubbleOutlineOutlinedIcon style={{color: "#3f51b5"}}/></a><span style={{fontWeight:"500",marginLeft:0,marginBottom:10}}>10K</span></div>
         </div>
            </div>
            </div>

            <div>
              <MoreHorizIcon/>
            </div>
          </div>
          </Typography> */}

<Card sx={{ width: '100%',marginTop:1 }}>
  <MDTypography>
  <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} src={profileUserData?.photoURL} aria-label="recipe"/>
        }
        action={
         
          <IconButton aria-label="settings">
             <MDTypography>
             <MoreVertIcon />
             </MDTypography>
          </IconButton>

        }
        title={`${profileUserData?.firstName} ${profileUserData?.lastName}\n@${profileUserData?.username}`}
        subheader={moment(timestamp).fromNow()}
      />
  </MDTypography>

      <CardContent>
        <MDTypography variant="body2">
            {comment}
        </MDTypography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <MDTypography>
          <ThumbUpOutlinedIcon /> <span style={{fontSize:15}}>{abbrNum(1234567,0)}</span>
          </MDTypography>
        </IconButton>


        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <MDTypography>
          <span style={{fontSize:15}}>Replies({abbrNum(commentReply,0)})</span>
          <ExpandMoreIcon />
            </MDTypography>                  
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent style={{height:300}}>
          <MDTypography paragraph><center>REPLIES</center></MDTypography>
          <hr style={{marginTop:-20}}/>

          <ScrollableFeed>

          <MDTypography paragraph>
            <CommentReplies postId={postId} commentId={commentId}/>
          </MDTypography>

          </ScrollableFeed>

        </CardContent>
        <MDTypography style={{marginTop:52,marginBottom:5}}>
        {auth1?.currentUser?.uid &&(
    <MDBox style={{display:'flex',alignItems:'center', width:'100%',zIndex:999}} >
    <div style={{marginTop:10}} className="post1">
      <MDInput 
      multiline
      rows={1.5}
      label=""
      placeholder={`@${profileUserData1?.username} comment here...`}
      value={addComment}
      style={{ width: "100%" }}
      onChange={(e) => {
        setAddComment(e.target.value)
    }}
      />
   </div>
   {!addComment ?(
   <Avatar style={{padding:2}} src={profileUserData1?.photoURL} alt={profileUserData1?.firstName}/>

   ):(
    <SendIcon onClick={commentPost} style={{cursor: "pointer"}} fontSize="100px"/>
   )}
</MDBox>
)}
          </MDTypography>
      </Collapse>
    </Card>

        </MDBox>
    )
}

export default Post
