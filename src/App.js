import './App.css';
import NavBar from "./components/NavBar"
import NewsBox from "./components/NewsBox"
import React from 'react'
import DummyDIv from './components/DummyDIv';

export default function App() {
  const [mode, setMode] = React.useState('light');
  const toggleColorMode = () =>{
    if(mode=="light"){
      setMode("dark")
      var main = document.body
      main.style.backgroundColor = "gray"
    }else{
      setMode("light")
      var main = document.body
      main.style.backgroundColor = "#fff"
    }


  }
  return (
    <div>
      <NavBar mode={mode} toggleColorMode={toggleColorMode}/>
      <DummyDIv/>
      <div className="box">
        <NewsBox mode={mode}/>
        <NewsBox mode={mode}/>
        <NewsBox mode={mode}/>
        <NewsBox mode={mode}/>
        <NewsBox mode={mode}/>
        <NewsBox mode={mode}/>
      </div>
    </div>

  )
}
