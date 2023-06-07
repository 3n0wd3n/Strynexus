'use client'
import React from 'react';
import { useState } from 'react'
import { MainContainer } from './pages.style'
import Form from './form'
export default function Home() {
  const [title, setTitle] = useState("")
  return (
    <MainContainer>
      {title}Michael Hajný
      <Form title={title} setTitle={setTitle}></Form>
    </MainContainer>
  )
}
