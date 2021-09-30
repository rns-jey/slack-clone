import './Workspace.css'
import SideNav from './SideNav';
import ChatBody from './ChatBody';
import React, { useEffect } from 'react';

export default function Workspace() {

  useEffect(() => {
    
  }, []);

  return (
    <div className="workspace">
      <SideNav />
      <ChatBody />
    </div>
  )
}