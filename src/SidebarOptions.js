import styled from '@emotion/styled'
import React from 'react'
import { db } from './firebase'
import {useCollection} from 'react-firebase-hooks/firestore'
import { useDispatch } from 'react-redux'
import { enterRoom } from './features/appSlice'
const SidebarOptions = ({Icon ,title ,addChannelOption, id}) => {

const dispatch = useDispatch();
    const addChannel = ()=>{
        const channelName = prompt("please enter cahnnel name");
        if(channelName){
            db.collection('room').add({
                name: channelName,
            })
        }
    }
    const selectChannel=()=>{
        if(id){
            dispatch(enterRoom({
                roomId: id
            }))
        }
    }
  return (
    <SidebarOptionContainer
        onClick={addChannelOption ? addChannel : selectChannel}
    >
        {Icon && <Icon fontSize='small' style={{padding:10}}/>}
        {Icon ?(
            <h3>{title}</h3>
        ):(
            <SidebarOptionsChannel>
                <span>#</span>{title}
            </SidebarOptionsChannel>
        )}
    </SidebarOptionContainer>
  )
}

export default SidebarOptions


const SidebarOptionContainer = styled.div`
display:flex;
font-size: 12px;
align-items: center;
padding-left: 2px;
cursor: pointer;

:hover{
    opacity: 0.9;
    background-color: #340e36;
}
>h3{
    font-weight: 500;

}
>h3 > span{
    padding: 15px;
}
`;
const SidebarOptionsChannel = styled.h3`
    padding: 10px 0;
    font-weight: 300;

`;