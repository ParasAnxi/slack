import React from 'react'
import styled from '@emotion/styled'
import { Add, AppShortcut, BookmarkBorder, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from '@mui/icons-material';
import SidebarOptions from './SidebarOptions';
import { auth, db } from "./firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
const Sidebar = () => {
  const [user] = useAuthState(auth);
  const [channels, loading, error] = useCollection(db.collection("room"));
  return <SidebarContainer>
    <SidebarHeader>
      <SidebarInfo>
        <h2>Paras</h2>
        <h3><FiberManualRecord/>
        paras</h3>
      </SidebarInfo>
      <Create/>
    </SidebarHeader>

    <SidebarOptions Icon={InsertComment} title='Threads'/>
    <SidebarOptions Icon={Inbox} title='Mentions & Reactions'/>
    <SidebarOptions Icon={Drafts} title='Saved items'/>
    <SidebarOptions Icon={BookmarkBorder} title='Channel browser'/>
    <SidebarOptions Icon={PeopleAlt} title='People & user groups'/>
    <SidebarOptions Icon={AppShortcut} title='Apps'/>
    <SidebarOptions Icon={FileCopy} title='File browser'/>
    <SidebarOptions Icon={ExpandLess} title='Show less'/>
    <hr />

    <SidebarOptions Icon={ExpandMore} title='Channels'/>
    <hr />
    <SidebarOptions Icon={Add} addChannelOption title='Add Channel'/>

    {channels?.docs.map(doc=>(
       <SidebarOptions key={doc.id} id={doc.id} title={doc.data().name} />
    ))}
  </SidebarContainer>;
}

export default Sidebar

const SidebarContainer = styled.div`
  color: white;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;
const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    background-color: white;
    border-radius: 999px;
  }
`;

const SidebarInfo = styled.div`
  flex:1;
  >h2{
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  >h3{
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  >h3 > .MuiSvgIcon-root{
   font-size :14px ;
   margin-top: 1px;
   margin-right: 2px;
   color: green;
  }
`;