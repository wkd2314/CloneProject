import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import BlockIcon from '@material-ui/icons/Block';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import TimelineIcon from '@material-ui/icons/Timeline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import CategoryIcon from '@material-ui/icons/Category';
import GroupIcon from '@material-ui/icons/Group';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from './firebase';
import { useStateValue } from './StateProvider';

function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    //collection > docs > data
    //onSnapshot func makes update in realtime ( Listening Function )
    db.collection('rooms').onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Miao Miao</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon /> {/* Onclick not implemented*/}
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={FavoriteBorderIcon} title="Favorites" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Bookmarks" />
      <SidebarOption Icon={CategoryIcon} title="Category" />
      <SidebarOption Icon={GroupIcon} title="Groups" />
      <SidebarOption Icon={TimelineIcon} title="Timeline" />
      <SidebarOption Icon={BlockIcon} title="Block user" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channels" />

      {/* Connect to dB and list all the channels */}
      {channels.map((channel) => (
        <SidebarOption title={channel.name} id={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;
