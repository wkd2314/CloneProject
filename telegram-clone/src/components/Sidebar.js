import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, IconButton } from '@material-ui/core';
import SidebarThread from './SidebarThread';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import PhoneIcon from '@material-ui/icons/Phone';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import db, { auth } from '../firebase';
import SettingsIcon from '@material-ui/icons/Settings';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const user = useSelector(selectUser);
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    // if no collection made by default it is made automatically
    // by just referencing it ( db.collection('threads') )
    db.collection('threads').onSnapshot((snapshot) =>
      setThreads(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const addThread = () => {
    const threadName = prompt('Enter a thread name');
    if (threadName) {
      db.collection('threads').add({
        threadName: threadName, // threadId made automatically
      });
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__search">
          <SearchIcon className="sidebar__searchIcon" />
          <input placeholder="search" className="sidebar__input"></input>
        </div>
        <IconButton variant="outlined" id="sidebar__button">
          <BorderColorIcon onClick={addThread} />
        </IconButton>
      </div>
      <div className="sidebar__threads">
        {threads.map(({ id, data: { threadName } }) => (
          <SidebarThread id={id} threadName={threadName} />
        ))}
      </div>
      <div className="sidebar__bottom">
        <Avatar
          src={user.photo}
          className="sidebar__bottom__avatar"
          onClick={() => auth.signOut()}
        />
        <IconButton>
          <PhoneIcon />
        </IconButton>
        <IconButton>
          <QuestionAnswerIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;
