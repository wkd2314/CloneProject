import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import './Thread.css';

const Thread = () => {
  return (
    <div className="thread">
      <div className="thread__header">
        <div className="thread__header__contents">
          <Avatar />
          <div className="thread__header__contents__info">
            <h4>Thread name</h4>
            <h5>Last seen</h5>
          </div>
        </div>
      </div>
      <IconButton>
        <MoreHoriz className="thread__header__details" />
      </IconButton>
    </div>
  );
};

export default Thread;
