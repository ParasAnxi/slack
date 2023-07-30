import styled from '@emotion/styled'
import React from 'react'
import { Button } from '@mui/material'

import { auth, db } from './firebase'
import firebase from 'firebase/compat/app'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

const ChatInput = ({chatRef,channelName,channelId}) => {
    const [input,setInput] = useState('');
    const [user] = useAuthState(auth);
    const sendMessage = e=>{
        e.preventDefault();
        if(!channelId){
            return false;
        }

        db.collection("room").doc(channelId).collection("message").add({
          message: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          user: user.displayName,
          userImage:user.photoURL,
        });
        chatRef.current.scrollIntoView({
            behavior:'smooth'
        });
     setInput('');   
    }
  return (
    <ChatInputContainer>
      <form>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
          value={input}
        />
        <Button type="submit" onClick={sendMessage} hidden>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput

const ChatInputContainer = styled.div`
    border-radius: 20px;
    >form{
        display: flex;
        position: relative;
        justify-content: center;
    }
    >form >input {
        border-radius: 3px;
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        outline: none;
        padding: 20px;
    }
    >form >button{
        display: none !important;
    }

`