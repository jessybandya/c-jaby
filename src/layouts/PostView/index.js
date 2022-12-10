import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
  makeStyles,
  Typography,
  Avatar
} from "@material-ui/core";
import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import NumberFormat from 'react-number-format';
import Backdrop from '@mui/material/Backdrop';
import {
EmailShareButton,
FacebookShareButton,
HatenaShareButton,
InstapaperShareButton,
LineShareButton,
LinkedinShareButton,
LivejournalShareButton,
MailruShareButton,
OKShareButton,
PinterestShareButton,
PocketShareButton,
RedditShareButton,
TelegramShareButton,
TumblrShareButton,
TwitterShareButton,
ViberShareButton,
VKShareButton,
WhatsappShareButton,
WorkplaceShareButton
} from "react-share";

import {
EmailIcon,
FacebookIcon,
FacebookMessengerIcon,
HatenaIcon,
InstapaperIcon,
LineIcon,
LinkedinIcon,
LivejournalIcon,
MailruIcon,
OKIcon,
PinterestIcon,
PocketIcon,
RedditIcon,
TelegramIcon,
TumblrIcon,
TwitterIcon,
ViberIcon,
VKIcon,
WeiboIcon,
WhatsappIcon,
WorkplaceIcon
} from "react-share";
import { MailIcon } from 'react-mail-icon'
import React, { forwardRef, useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import ReplyOutlinedIcon from "@material-ui/icons/ReplyOutlined";
import ReactPlayer from "react-player";
import ReactTimeago from "react-timeago";
import { db, auth1 } from '../../components/firebase';
import { useParams, Link } from "react-router-dom"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import Moment from 'react-moment';
import swal from "@sweetalert/with-react";
import "react-responsive-modal/styles.css";
import MDBox from "../../components1/MDBox";
import Style from "../../components/Testhome/posts/post/Style";
import MDTypography from "../../components1/MDTypography";
import moment from 'moment'
// import Like from "../../assets/images/like.png";
import Like from "../../components/assets/images/like.png"
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import MDInput from "../../components1/MDInput";
import Picker from 'emoji-picker-react';
import Comments from "./Comments"

function PostView() {
  const { id, uid } = useParams();
  const [expanded, setExpanded] = React.useState(false);
  const [visible, setVisible] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [addComment, setAddComment] = useState("")





  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    setAddComment(emojiObject)
  };

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {setIsReadMore(!isReadMore)}; 

  // const history = useHistory("")
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [likesCount, setLikesCount] = useState(1);
  const [commentsCount, setCommentsCount] = useState(0);
  const [sharesCount, setSharesCount] = useState(1);
  const [likeIconOrder, setLikeIconOrder] = useState(1);
  const [loveIconOrder, setLoveIconOrder] = useState(1);
  const [careIconOrder, setCareIconOrder] = useState(1);
  const [profileUserData, setProfileUserData] = useState();
  const [profileUserData1, setProfileUserData1] = useState();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [show, setShow] = useState('like2');
  const [show2, setShow2] = useState('textforlike');
  const [posterImage, setPosterImage] = useState('')
  const [shares, setShares] = useState('');
  const [shareCount, setShareCount] = useState(0);
  const [postIdMain, setPostIdMain] = useState("")
  const [postOwnerId, setPostOwnerId] = useState("")
  const classes = Style();
  const [post, setPost] = useState("")
  useEffect(() => {
    db.collection('posts').doc(id).onSnapshot((doc) => {
      setPost(doc.data());
    });
}, [])

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



  const takeIdAndModal = (id) =>{
    setVisible(true)
    setPostIdMain(`${id}`)
    setPostOwnerId(`${uid}`)
  }
  const share = (event) => {
    event.preventDefault(); 

      db.collection("posts").doc(`${id}`).collection("shares").add({
        ownerId: uid,
        read: false,
        count:false,
        postId:id,
        shared:true,
        timestamp: Date.now(),
    })
    setExpanded(false)  

}
useEffect(() => {
  db.collection('posts').doc(id).collection("shares").where("shared", "==",true)
 .onSnapshot(snapshot => (
  setShareCount(snapshot.docs.length)
 ))
}, []);

useEffect(() => {
db.collection('posts').doc(id).collection("comments").where("count", "==",false)
.onSnapshot(snapshot => (
setCommentsCount(snapshot.docs.length)
))
}, []);
  useEffect(() => {
    db.collection('users').doc(`${uid}`).onSnapshot((doc) => {
        setProfileUserData(doc.data());
    });
}, [])

useEffect(() => {
  db.collection('users').doc(`${auth1?.currentUser?.uid}`).onSnapshot((doc) => {
      setProfileUserData1(doc.data());
  });
}, [])





useEffect(() => {
  let unsubscribe;
  if (id) {
      unsubscribe = db.collection("posts").doc(id).collection("comments").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
      });
  }
  return () => {
      unsubscribe();
  }
}, [id]);

useEffect(() => {
  db.collection("posts")
      .doc(id)
      .collection("likes")
      .doc(`${auth1?.currentUser?.uid}`)
      .get()
      .then(doc2 => {
          if (doc2.data()) {
              if (show == 'like2') {
                  setShow('like2 blue');
                  setShow2('textforlike bluetextforlike')
              } else {
                  setShow('like2');
                  setShow2('textforlike')
              }
          }
      })
}, [id, `${auth1?.currentUser?.uid}`]);

const likeHandle = (event) => {
  event.preventDefault();
  if (show == 'like2') {
      setShow('like2 blue');
      setShow2('textforlike bluetextforlike')
  } else {
      setShow('like2');
      setShow2('textforlike')
  }

  db.collection('posts')
      .doc(id)
      .get()
      .then(docc => {
          const data = docc.data()
          console.log(show)
          if (show == 'like2') {
              db.collection("posts")
                  .doc(id)
                  .collection("likes")
                  .doc(`${auth1?.currentUser?.uid}`)
                  .get()
                  .then(doc2 => {
                      if (doc2.data()) {
                          console.log(doc2.data())
                      } else {
                          db.collection("posts").doc(id).collection("likes").doc(`${auth1?.currentUser?.uid}`).set({
                              likes: 1,
                              likedId: auth1?.currentUser?.uid
                          });
                          db.collection('posts').doc(id).update({
                              noLikes: data.noLikes + 1
                          });
                      }
                  })

          } else {
              db.collection('posts').doc(id).collection('likes').doc(`${auth1?.currentUser?.uid}`).delete().then(function () {
                  db.collection('posts').doc(id).update({
                      noLikes: data.noLikes - 1
                  });
              })
          }
      })

}

const commentPost = (event) => {
  event.preventDefault(); 

  if(!addComment){
    swal("🔴 You cannot add an empty comment!")
  }else{
    db.collection("posts").doc(`${id}`).collection("comments").add({
      ownerId: uid,
      read: false,
      count:false,
      postId:id,
      comment: addComment,
      fromId:auth1?.currentUser?.uid,
      timestamp: Date.now(),
  }).then(() => setAddComment(""));
  setComment(true) 
  db.collection("notifications").add({
    ownerId: uid,
    read: false,
    count:false,
    postId:id,
    comment: addComment,
    type:"comment",
    fromId:auth1?.currentUser?.uid,
    timestamp: Date.now(),
}).then(() => setAddComment(""));
  setAddComment("")
}

setAddComment("")

}



  const Reactions = () => {

    return (
      <div className={classes.footer__stats}>
        <div>
          <img src={Like} style={{ order: `${likeIconOrder} ` }} alt="like-icon" />
          {/* <img src={Love} style={{ order: `${loveIconOrder} ` }} alt="love-icon" />
          <img src={Care} style={{ order: `${careIconOrder} ` }} alt="care-icon" /> */}
        </div>
        <h4 style={{marginTop:10}}><MDTypography style={{fontSize:16}}>{abbrNum(post?.noLikes,1)} {post?.noLikes == 1 ? "Like" : "Likes"}</MDTypography></h4>
        <section>
          <h4><MDTypography style={{fontSize:16}}>{abbrNum(commentsCount,1)} Comment(s)</MDTypography></h4>
          <h4><MDTypography style={{fontSize:16}}>{abbrNum(shareCount,1)} Shares</MDTypography></h4>
        </section>
      </div>
    );
  };


  // const text = post?.description;


  useEffect(() => {
    db.collection('posts').doc(id).onSnapshot((doc) => {
      setPost(doc.data());
    });
}, [])

  useEffect(() => {
    db.collection('users').doc(`${uid}`).onSnapshot((doc) => {
        setProfileUserData(doc.data());
    });
}, [])
var date = new Date(post?.timestamp);
var s = new Date(post?.timestamp).toLocaleTimeString("en-US")
  return(
    <DashboardLayout>
    <DashboardNavbar />
    <MDBox style={{border: "2px solid #0A84FF",padding:5,borderRadius:10,marginTop:5}} className="post1" >
      <div className={classes.post__header}>
        <Avatar src={profileUserData?.photoURL} style={{marginTop:-30}}/>
        <div className={classes.header__info}>
        <MDTypography style={{fontSize:22,fontWeight:"800"}}>
        {profileUserData?.firstName} {profileUserData?.lastName}
        <div style={{marginTop:-15}}>
          <span style={{fontSize:18,fontWeight:"bold"}}>@{profileUserData?.username}</span>
          </div>
        </MDTypography>
        <Moment format='MMMM Do YYYY, h:mm:ss a'>{post?.timestamp}</Moment>    

        </div>
        <MoreHorizOutlinedIcon style={{marginTop:-40}}/>
      </div>
      <div className={classes.post__body}>


              <CardContent>
      <MDTypography paragraph style={{fontWeight:"600"}}>{post?.title}</MDTypography>
     <hr/>
      <MDTypography style={{fontSize: 16}}  paragraph>
       {post?.description}
        {/* {isReadMore ? post?.description.slice(0, 150): post?.description }
   {post?.description.length > 150 &&
     <span onClick={toggleReadMore}>
       {isReadMore ? '...read more' : ' ...show less'}
    </span>
  } */}
      </MDTypography>
      {post?.fileData && (
        <div className={classes.body__image}>
          {post?.fileType === "image" ? (
            <img src={post?.fileData} alt="post" />
          ) : (
            <ReactPlayer url={post?.fileData} style={{border: "1px solid #0A84FF",borderRadius:10}} controls={true} />
          )}
        </div>
      )}
    </CardContent>


      </div>



<div className={classes.post__footer}>
        <Reactions />

      </div> 

          <div className="post__likeoptions">
          {auth1?.currentUser &&(
              <div className="like1" onClick={likeHandle}>
                  {show2 ==! "textforlike" ?(
                  <ThumbUpOutlinedIcon style={{marginTop:-8}} className={show} />
                  ):(
                    <ThumbUpAltIcon style={{marginTop:-8}} className={show2}/>
                  )}
                  <h3 className={show2}>Like</h3>
              </div>
          )}

              <div className="comment1" style={{alignItems:"center"}}>
                  <i className="comment2" onClick={() => {
            setVisible(true);
          }}/>


                  <h3  
>Comment(s)</h3>
              </div>
              <div className="share1" >
                  <i onClick={handleExpandClick} className="share2" />
                  <h3 onClick={handleExpandClick}>Share</h3>
              </div>
          </div>
          {/* <div style={{width:"100%",flex:1,alignItems: "center",border: "2px solid #88888888",borderRadius:15,height:100,padding:8,marginTop:5,marginBottom:5}} className={`comments__show `}>
           <Avatar src="" alt="" style={{marginTop:-15}}/>
            <div>
              <div><span><b>Jessy Bandya</b></span></div>
              <div>
              <div style={{color: "#8888888",width: "90%"}}> <span>
            <Typography  paragraph>
            <span style={{color: "#696969"}}>{isReadMore ? text.slice(0, 25) : text}</span>
    <span style={{color: "#3f51b5",cursor:"pointer"}} onClick={toggleReadMore} className="read-or-hide">
      {text.length > 25 &&(
        <>
      {isReadMore ? "...more" : "...less"}
      </>
      )}
    </span>
      </Typography>
              </span></div>
              </div>
            </div>

          </div> */}
    <Collapse in={expanded} timeout="auto" unmountOnExit>
    <CardContent>
    <div style={{display: "flex",padding:2,justifyContent:"space-between"}}>

<div>
<EmailShareButton
 title={post?.title}
 url={`https://aces-2e0b5.web.app/postview/${id}/${uid}`}
 hashtag={"#UoN_ACES"}
 description={post?.description}
>
 <EmailIcon onClick={share} size={32} round />
</EmailShareButton>
</div>

<div>
<FacebookShareButton
 title={post?.title}
 url={`https://aces-2e0b5.web.app/postview/${id}/${uid}`}
 // quote={"Talking is easy just show me the codes."}
 hashtag={"#UoN_ACES"}
 description={post?.description}
 className=""
>
 <FacebookIcon onClick={share} size={32} round />
</FacebookShareButton>
</div>
<div>
<TwitterShareButton
 title={post?.title}
 url={`https://aces-2e0b5.web.app/postview/${id}/${uid}`}
 hashtag={"#UoN_ACES"}
 description={post?.description}
>
 <TwitterIcon onClick={share} size={32} round />
</TwitterShareButton>
</div>
<div>
<WhatsappShareButton
 title={post?.title}
 url={`https://aces-2e0b5.web.app/postview/${id}/${uid}`}
 hashtag={"#UoN_ACES"}
 description={post?.description}
>
 <WhatsappIcon onClick={share} size={32} round />
</WhatsappShareButton>
</div>

       <div>
<LinkedinShareButton
 title={post?.title}
 url={`https://aces-2e0b5.web.app/postview/${id}/${uid}`}
 hashtag={"#UoN_ACES"}
 description={post?.description}
>
 <LinkedinIcon onClick={share} size={32} round />
</LinkedinShareButton>
</div>  

</div>

    </CardContent>
    </Collapse>

    </MDBox>
    {/* <Picker onEmojiClick={onEmojiClick} /> */}
{auth1?.currentUser?.uid &&(
    <MDBox style={{display:'flex',alignItems:'center'}}>
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

<Comments postId={id}/>


    </DashboardLayout>
  )

}

export default PostView;
