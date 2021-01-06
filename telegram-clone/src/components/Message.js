import React from 'react';
import './Message.css';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const Message = ({
  id,
  data: { timestamp, displayName, email, message, photo, uid },
}) => {
  const user = useSelector(selectUser);

  return (
    <div className={`message ${user.email === email && `message__sender`}`}>
      {/* this way sender can be on opposite side like kakao talk */}
      <Avatar src={photo} className="message__photo" />
      <div className="message__contents">
        <p>{message}</p>
        <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
      </div>
    </div>
  );
};

export default Message;
