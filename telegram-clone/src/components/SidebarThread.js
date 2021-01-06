import { Avatar } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setThread } from '../features/threadSlice';
import './SidebarThread.css';
import db from '../firebase';

const SidebarThread = ({ id, threadName }) => {
  const dispatch = useDispatch();
  const [threadInfo, setThreadInfo] = useState([]);

  useEffect(() => {
    db.collection('threads')
      .doc(id)
      .collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setThreadInfo(snapshot.docs.map((doc) => doc.data()))
      );
  }, [id]);

  return (
    <div
      className="sidebarThread"
      onClick={() =>
        dispatch(
          // use dispatch to call the one stored in store.js
          setThread({
            threadId: id,
            threadName: threadName, // function on threadSlice.js
          })
        )
      }
    >
      <Avatar src={threadInfo[0]?.photo} />
      <div className="sidebarThread__details">
        <div className="sidebarThread__details__info">
          <h3>{threadName}</h3>
          <p>{threadInfo[0]?.message}</p>
        </div>
        <small className="sidebarThread__details__timestamp">
          {new Date(threadInfo[0]?.timestamp?.toDate()).toLocaleString()}
        </small>
      </div>
    </div>
  );
};

export default SidebarThread;
