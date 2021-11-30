import './App.css';
import  TitleBar from './TitleBar';
import {useState} from 'react';
import Page from './Page';
/*
Attributions - https://icon-library.com/icon/back-arrow-icon-10.html.html>Back Arrow Icon # 144390
*/

/*
TitleBar - Just The Header
Page - can either be the rankings display, or predictions, or analysis for each college depending on what's 
       been selected. if nothing, it has a panel of 3 options,on clicking one it'll change 'choice' state
*/
function App() {
  const [choice,setChoice] = useState("");

  const pageChanger = (string) =>{
  setChoice(string)
  }
  return (
    <div className="wrapper">
      <header>
      <TitleBar></TitleBar>
      </header>
      <div className="Main">
      <Page current = {choice} modifier = {pageChanger}></Page>
      </div>
    </div>
  );
}

export default App;
