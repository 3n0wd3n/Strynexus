'use client'
import React from 'react';
import { useState, useEffect } from 'react'
import { NewStrnxsContainer, SendContainer, Button, InputContainer, MainContainer, UlContainer, LiContainer, H1Container, PContainer } from './pages.style'
export default function Home() {
  const [mode, setMode] = useState("");
  const [strnxs, setStrnxs] = useState("");
  const [newStrnxs, setNewStrnxs] = useState("");

  // useEffect(() => {
  //   console.log(mode)
  // });

  function disemVowel(strnxs) {
    var newStr = "";
    var vowels = "aeiou"
    for (var i = 0; i < strnxs.length; i++){
      if (!vowels.includes(strnxs[i].toLowerCase())){
        newStr += strnxs[i];
      }
    }
    return newStr;
  }

  function generateHashtag(strnxs){
    if (!strnxs.trim().length || strnxs.length == 0){
      return false
    }
    var newStr = "#";
    var strnxs = strnxs.split(" ")
    for (var i = 0; i < strnxs.length; i++){
      console.log(strnxs[i], strnxs)
      newStr += strnxs[i].toLowerCase().charAt(0).toUpperCase() + strnxs[i].slice(1);
    }
    return newStr
  }

  function executeFunction(strnxs){
    console.log(mode)
    switch (mode) {
      case 'HashTag':
        console.log('HashTag', strnxs);
        var newStrHastag = generateHashtag(strnxs);
        if (newStrHastag == false){
          setNewStrnxs("Your string was incorrect !");
        }
        setNewStrnxs(newStrHastag);
        break;
      case 'RemoVowe':
        console.log('RemoVowe', strnxs);
        var newStrVowel = disemVowel(strnxs);
        setNewStrnxs(newStrVowel);
        break;
      case 'ShorText':
          console.log('ShorText', strnxs);
        break;
      case 'MakePrit':
         console.log('MakePrit', strnxs);
        break;
      default:
        console.log(`Sorry, we are out of.`);
    }
  }
  
  return (
    <MainContainer>
      <H1Container>Improve you text skills using <span>STRYNEXUS</span></H1Container>
      <PContainer>Unlock Efficiency and Enhance Content Creation with Simple Tools Powered by Algorithms and AI</PContainer>
      <UlContainer>
        <LiContainer onClick={() => setMode("HashTag")}>Add HashTag</LiContainer>
        <LiContainer onClick={() => setMode("RemoVowe")}>Remove vowels</LiContainer>
        <LiContainer onClick={() => setMode("ShorText")}>Shorten text</LiContainer>
        <LiContainer onClick={() => setMode("MakePrit")}>Make it prettier</LiContainer>
      </UlContainer>
      <SendContainer>
        <span>Mode:</span><span>{mode}</span>
        <InputContainer type="text" name="strnxsName" maxlength="140" onChange={({ target }) => setStrnxs(target.value)}/>
        <Button onClick={() => executeFunction(strnxs)}>proceed</Button>
      </SendContainer>
      {
        newStrnxs.length == 0 
        ?
        <span></span>
        :
        <NewStrnxsContainer>
          <span>Your new strnxs: </span><span>{newStrnxs}</span>
        </NewStrnxsContainer>
      }
    </MainContainer>
  )
}
