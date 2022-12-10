import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FlipMove from "react-flip-move";
import Post from "./post/Post";
import {db} from "../../firebase";

const Posts = () => {
  const classes = Style();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').orderBy("timestamp", "desc").onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
            id: doc.id,
            post: doc.data(),
        })));
    })
}, []);



  return (
    <div className={classes.posts}>
      <FlipMove style={{ width: "100%" }}>
        {Array.from(posts).map(({id, post}) => (
          <Post
            key={id}
            ownerId={post.ownerId}
            postId={id}
            title={post.title}
            timestamp={post.timestamp}
            description={post.description}
            fileType={post.fileType}
            fileData={post.fileData}
            noLikes={post.noLikes}
          />
        ))}
      </FlipMove>
    </div>
  );
};

const Style = makeStyles((theme) => ({
  posts: {
 
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default Posts;
