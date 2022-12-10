import React, { useState, useEffect} from 'react'
import { db } from '../../../../../../../../components/firebase';
import Posts from "./Posts"
import Grid from "@mui/material/Grid";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import MDTypography from '../../../../../../../../components1/MDTypography';

function Exams({unit}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const unsubscribe = db
        .collection("past-papers").where("type","==","exams")        
        .onSnapshot((snap) => setPosts(snap.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
      return unsubscribe;
    }, []);
    return (
        <div className="containerGrid">
        {posts?.length > 0 ?(
          <>
          {Array.from(posts).map((post) => (
            <Posts
              key={post.id}
              postId={post.id}
              year={post.data.academicYear}
              pastpaperId={post.pastpaperId}
              timestamp={post.data.timestamp}
              pastPaperName={post.data.pastPaperName}
              type={post.data.type}
              file={post.data.file}
              code={post.data.pastPaperCode}
              department={post.data.department}
              semester={post.data.semester}
              yos={post.data.yos}
              unit={unit}
            />
          ))}
          </>
        ):(
          <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "30vh", width: "100vw" }}>
          <CircularProgress sx={{color:"#0d6efd"}}/>
          <span style={{ justifyContent: "center", position: "fixed", top: "55%" }}>Loading...please wait</span>
      </div>
        )}
        </div>

    )
}

export default Exams
