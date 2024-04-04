import './App.css';
import NavBar from "./components/NavBar"
import NewsBox from "./components/NewsBox"
import React, { useState } from 'react'
import DummyDIv from './components/DummyDIv';

export default function App() {
  const [api,setapi] = React.useState("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=b25243b1c049414d9a4258bc71095bd4")
  const [mode, setMode] = React.useState('light');
  const toggleColorMode = () =>{
    if(mode==="light"){
      setMode("dark")
      var main = document.body
      main.style.backgroundColor = "gray"
    }else{
      setMode("light")
      var main1 = document.body
      main1.style.backgroundColor = "#fff"
    }

    
  }
  const newsCatgories=(data)=>{
    setapi(`https://newsapi.org/v2/top-headlines?country=in&category=${data}&apiKey=b25243b1c049414d9a4258bc71095bd4`)
    console.log(data)
  }
  return (
    <div>
      <NavBar mode={mode} toggleColorMode={toggleColorMode} newsCatgories={newsCatgories}/>
      <DummyDIv/>
      <div className="box">
        <NewsBox mode={mode} api={api}/>
      </div>
    </div>

  )
}
