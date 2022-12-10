import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { Chip, Paper, Divider, LinearProgress } from "@material-ui/core";
import imageCompression from "browser-image-compression";
import Avatar from "@material-ui/core/Avatar";
import VideocamRoundedIcon from "@material-ui/icons/VideocamRounded";
import PhotoRoundedIcon from "@material-ui/icons/PhotoRounded";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import firebase from "firebase";
import { v4 as uuid } from "uuid";
import {db, storage, auth1 } from "../../firebase";
import Styles from "./Style";
import swal from "@sweetalert/with-react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import MkBox from "../../../components1/MDBox"
import MDTypography from "../../../components1/MDTypography"
import MDInput from "../../../components1/MDInput"
import "./styles.css"

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
  MenuItem,
  TextField,
} from "@material-ui/core";
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
}));
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Form = () => {
  const classes = Styles();
  const [image, setImage] = useState("");
  const [whoToComment, setWhoToComment] = useState("");
  const [visible, setVisible] = useState("");
  const [title, setTitle] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [imageURL, setImageURL] = useState('');
  const [noLikes, setNoLikes] = useState(0);
  const [uploadData, setUploadData] = useState({
    // description: "",
    file: {
      type: "",
      name: "",
      data: "",
    },
  });


  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [progress, setProgress] = useState("");

  const uploadToFirebaseDB = (fileData) => {
    // uploading to collection called posts
    db.collection("posts")
      .add({
        ownerId: auth1?.currentUser?.uid,
        timestamp: Date.now(),
        description: descriptions,
        fileType: uploadData.file.type,
        title,
        noLikes,
        fileName: uploadData.file.name,
        fileData: fileData,
      })
      .then(() => resetState());
      swal("✔️ successfully added the post");
      setDescriptions("")
      setTitle("")
      setExpanded(false)
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();

    // verify atleast one of the input fields are not empyt
    if (title || uploadData.file.data) {
      // if file input is true...upload the file to Fire-Store
      if (uploadData.file.data) {
        const id = uuid();
        const uploadTask = storage.ref(`posts/${id}`).putString(uploadData.file.data, "data_url");
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const value = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(value);
          },

          (error) => {
            alert(error);
          },

          () => {
            storage
              .ref("posts")
              .child(id)
              .getDownloadURL()
              .then((url) => uploadToFirebaseDB(url));
          }
        );

        // do not go further..
        return;
      }
      // if not file input provided
      uploadToFirebaseDB(uploadData.file.data);
    } else {
      swal("😕 Title input field can not be empty");
    }
  };

  // if file name is too long.. compress it
  const fileNameCompressor = (str, limit) => {
    let fileName = str;
    const arr = str.split(".");
    const name = arr[0];
    const ext = arr[arr.length - 1];

    if (name.length > limit) {
      fileName = name.substring(0, limit).trim() + "... ." + ext;
    }
    return fileName;
  };
  const [profileUserData, setProfileUserData] = useState();
  useEffect(() => {
    db.collection('users').doc(`${auth1?.currentUser?.uid}`).onSnapshot((doc) => {
        setProfileUserData(doc.data());
    });
}, [])
  const imageUploadHandler = async (e, type) => {
    const inputFile = e.target.files[0];
    const _inputFile = inputFile.type.split("/");
    const inputFileType = _inputFile[0];
    const inputFileExec = _inputFile[1];
    const inputFileName = fileNameCompressor(inputFile.name, 20);

    const fileSize = inputFile.size / (1024 * 1024);

    const acceptedImageFormats = ["png", "jpg", "jpeg", "gif"];
    const acceptedVideoFormats = ["mp4", "mkv", "3gp", "avi", "webm"];

    switch (type) {
      case "video":
        if (!acceptedVideoFormats.some((format) => format.includes(inputFileExec))) {
          swal("🔴 Please select video format of mp4 , mkv , av ");
          e.target.value = "";
          return;
        }
        if (fileSize > 10) {
          swal("🔴 Please select a video less than 10MB file size");
          e.target.value = "";
          return;
        }
        break;
      case "image":
        if (!acceptedImageFormats.some((format) => format.includes(inputFileExec))) {
          swal("🔴 Please select image format of png , jpg , jpeg , gif ");
          e.target.value = "";
          return;
        }
        if (fileSize > 2) {
          swal("🔴 Please select an image less than 2MB file size");
          e.target.value = "";
          return;
        }
        break;
      default:
        swal("😮 OOPS...!!! Invalid file format");
        e.target.value = "";
        return;
    }

    let compressedInputFile = inputFile;
    if (inputFileType === "image") {
      //compression algorithm
      const compressionOptions = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };

      try {
        compressedInputFile = await imageCompression(inputFile, compressionOptions);
      } catch (error) {
        alert(error);
      }
    }

    let inputFileDataBase64;
    const file = new FileReader();
    if (compressedInputFile) {
      file.onloadend = (fileLoadedEvent) => {
        inputFileDataBase64 = fileLoadedEvent.target.result;
        setUploadData({
          ...uploadData,
          file: {
            type: inputFileType,
            name: inputFileName,
            data: inputFileDataBase64,
          },
        });
      };
      file.readAsDataURL(compressedInputFile);
    }

    // clear the file input event value
    e.target.value = "";
  };

  const resetState = () => {
    setUploadData({
      descriptions: "",
      title: "",
      file: {
        type: "",
        name: "",
        data: "",
      },
    });
    setProgress("");
  };

  return (
    <>
    <MkBox  className="postAdd">
      <div className={classes.upload__header}>
        <Avatar src={profileUserData?.photoURL} />
        <form className={classes.header__form}  style={{cursor: "pointer"}}>

          

          <div style={{cursor: "pointer"}} onClick={handleExpandClick}>
            <span style={{marginLeft:10}}>{`Add Announcement...`}</span>
          </div>
          <input
            id="upload-image"
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => imageUploadHandler(e, "image")}
          />
          <input
            id="upload-video"
            type="file"
            accept="video/*"
            hidden
            onChange={(e) => imageUploadHandler(e, "video")}
          />
          {/* <button type="submit">Post</button> */}
          {/* <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore> */}



      
        </form>
      </div>



<Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
      <div>
      <div className={classes.item}>
      <MDInput 
      id="standard-basic"
      label="Title"
      value={title}
      style={{ width: "100%" }}
      onChange={(e) => {
        setTitle(e.target.value)
    }}
      />
      </div>

      <div className={classes.item} style={{marginTop:10}}>
      <MDInput 
      id="outlined-multiline-static"
      multiline
      rows={4}
      variant="outlined"
      label="Description"
      value={descriptions}
      style={{ width: "100%" }}
      onChange={(e) => {
        setDescriptions(e.target.value)
    }}
      />
   </div>
              <MDTypography>

              </MDTypography>

            </div>


            <div style={{marginLeft:"40%",marginRight:"60%",justifyContent:"center",marginTop:20}}><Button onClick={handleSubmitButton} variant="outlined"><MDTypography>Post</MDTypography></Button></div>
            <div style={{marginTop:15}}>
            {uploadData.file.name && !progress && (
        <div className={classes.selectedFile}>
          <Chip
            color="primary"
            size="small"
            onDelete={resetState}
            icon={uploadData.file.type === "image" ? <PhotoRoundedIcon /> : <VideocamRoundedIcon />}
            label={uploadData.file.name}
          />
        </div>
      )}
            {progress ? (
        <div className={classes.uploading}>
          <LinearProgress variant="determinate" value={progress} className={classes.progress} />
          <MDTypography><p>{progress} %</p></MDTypography> 
        </div>
      ) : (
        ""
      )}
      </div>
      <Divider style={{backgroundColor:"#0A84FF"}}/>

      <div className={classes.upload__media}>
      <label htmlFor="upload-video"  className={classes.media__options}>
        <VideocamRoundedIcon style={{ color: "#0A84FF" }} />
        <span style={{fontSize:20,fontWeight:"700"}}><MDTypography>Video</MDTypography></span>
      </label>
      <label htmlFor="upload-image"  className={classes.media__options}>
        <PhotoRoundedIcon style={{ color: "#0A84FF" }} />
        <span style={{fontSize:20,fontWeight:"700"}}><MDTypography>Photo</MDTypography></span>
      </label>

    </div>
      </CardContent>
    </Collapse>




    </MkBox>
    
    </>
  );
};

export default Form;
