import React, { useEffect, useState, createElement } from 'react'
import { db } from '../../../../../components/firebase';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import MDTypography from '../../../../../components1/MDTypography';

function Replies({comment, fromId, commentId, postId, timestamp }) {
    const [profileUserData, setProfileUserData] = useState();


  

  
    const actions = [
      <MDTypography style={{fontSize:12}} key="comment-basic-like" title="Like">
        <span>
          <LikeOutlined/>
          <span className="comment-action">1.4K</span>
        </span>
      </MDTypography>,
    ];

    useEffect(() => {
        db.collection('users').doc(`${fromId}`).onSnapshot((doc) => {
            setProfileUserData(doc.data());
        });
    }, [])
    


  return (
    <div>
            <Comment
      actions={actions}
      author={<a><MDTypography style={{fontSize:13,fontWeight:'bold'}}>{profileUserData?.firstName} {profileUserData?.lastName}</MDTypography> <MDTypography style={{fontSize:11}}>@{profileUserData?.username}</MDTypography></a>}
      avatar={<Avatar src={profileUserData?.photoURL} alt={profileUserData?.firstName} />}
      content={
        <p>
        {comment}
        </p>
      }
      datetime={
        <Tooltip title={moment(timestamp).format('YYYY-MM-DD HH:mm:ss')}>            
          <span>{moment(timestamp).fromNow()}</span>
        </Tooltip>
      }
    />
    </div>
  )
}

export default Replies