import React from 'react';
import './Sidebar.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, IconButton } from '@material-ui/core';
import SidebarThread from './SidebarThread';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import PhoneIcon from '@material-ui/icons/Phone';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import SettingsIcon from '@material-ui/icons/Settings';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__search">
          <SearchIcon className="sidebar__searchIcon" />
          <input placeholder="search" className="sidebar__input"></input>
        </div>
        <IconButton variant="outlined" id="sidebar__button">
          <BorderColorIcon />
        </IconButton>
      </div>
      <div className="sidebar__threads">
        <SidebarThread />
        <SidebarThread />
      </div>
      <div className="sidebar__bottom">
        <Avatar className="sidebar__bottom__avatar" />
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
