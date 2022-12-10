import React, {useState, useEffect} from 'react'
import { db } from '../../../../components/firebase';
import Replies from './Posts'

function CommentReplies({postId, commentId}) {
    const [posts, setReplies] = useState([]);

    useEffect(() => {
      const unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .doc(commentId)
        .collection("replies")
        .orderBy("timestamp", "asc")
        .onSnapshot((snap) => setReplies(snap.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
      return unsubscribe;
    }, []);
    return (
        <div>
        {Array.from(posts).map((post) => (
          <Replies
            key={post.id}
            fromId={post.data.fromId}
            commentId={post.id}
            postId={postId}
            timestamp={post.data.timestamp}
            comment={post.data.comment}

          />
        ))}
        </div>
    )
}

export default CommentReplies