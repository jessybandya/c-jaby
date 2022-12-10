import React, { useState,useEffect } from "react";
import { Divider, Input, Comment, List, Button } from "antd";
import { connect } from "react-redux";
import moment from "moment";
import { db,auth1 } from "../../../firebase";
import Post from "./Post1";
import swal from "@sweetalert/with-react";

function Comments({ postId }) {
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState('');

  const commentPost = (event) => {
    event.preventDefault(); 

    if(!comment){
      swal("🔴 You cannot add an empty comment!")
    }else{
      db.collection('posts').doc(postId).collection("comments").add({
        ownerPostId:"id",
        read: false,
        count:false,
        postId,
        comment,
        fromId:auth1?.currentUser?.uid,
        timestamp: Date.now(),
    }).then(() => setComment(""));

  }
}
  useEffect(() => {
    const unsubscribe = db
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) => setPosts(snap.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
    return unsubscribe;
  }, []);
  return (
    <>
    {/* <Post post={props.post} /> */}
    <div className="ml-4 pl-2 mr-4 pr-2 mt-15">
      <div className="comment__details">
        <div className="comments">
          <h1>{postId}</h1>
        {Array.from(posts).map((post) => (

<Post
key={post.id}
fromId={post.data.fromId}
commentId={post.id}
postId={postId}
timestamp={post.data.timestamp}
comment={post.data.comment}

/>
          
          // <Comment
          //   key={post.id}


          //   author={post.data.firstName}
          //   avatar={post.data.photoURL}
          //   content={post.data.comment}
          //   datetime={moment(post.data.timestamp)
          //     .startOf("seconds")
          //     .fromNow()}

          // />
        ))}
          {/* {post.comments && (
            <List
              className="comment-list"
              header={`${post.comments.length} ${
                post.comments.length > 1 ? "comments" : "comment"
              }`}
              itemLayout="horizontal"
              dataSource={post.comments}
              renderItem={(item) => (
                <li>
                  <Comment
                    author={item.userHandle}
                    avatar={item.userImage}
                    content={item.body}
                    datetime={moment(item.createdAt)
                      .startOf("seconds")
                      .fromNow()}
                  />
                </li>
              )}
            />
           )}  */}
        </div>
        <div className="comment-form">
          <Divider style={{backgroundColor:"#fff"}}/>
          <div className="d-flex">
            <Input
              onChange={(e) => setComment(e.target.value)}
              size="default"
              allowClear
              placeholder="type comment"
              value={comment}
            />
            <Button onClick={commentPost}>
              Submit
            </Button>
          </div>
          {/* {errors && <span className="text-danger">{errors}</span>} */}
        </div>
      </div>
    </div>
  </>
  )
}

export default Comments