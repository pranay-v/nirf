import "./TrendDetails.css";
import ImprovementDetails from "./ImprovementDetails";
import back_icon from "./back_icon.jpg";
import {rank2022} from "./rankings_2022";
import {rank2021} from "./rankings_2021";
import {rank2021r} from "./rankings_2021_pred";
import { useState } from "react";

/*
  shown whenever a college is clicked in 'trend' page. parameter and overall graphs displayed,as well as 
  a window that has improvement options.You can reset page to list of all univs(equivalent of going back), 
  with a button that sets state to " ", thus rerendering the page.
*/


const TrendDetails = (props) => {
  const [improveOpen,setImproveOpen] = useState(false);
  const [suggestions,Opensuggestions] = useState(false);
  const [isError,setError] = useState(false);
  let inp = document.getElementsByClassName("improve-inner");
  let improveChange = ()=>{
    setImproveOpen(true);
    inp[0].style.paddingBottom = 0;
  }

  
  let improveClose = () =>{
    setImproveOpen(false);
    setError(false);
    //let inp = document.getElementsByClassName("improve-inner");
    inp[0].style.paddingBottom = '10%';
  }

  let suggestionOpener = () =>{
    let n = document.getElementById("rank").value;
    //let inp = document.getElementsByClassName("improve-inner");
    inp[0].style.paddingBottom= 0;
    if(isNaN(n) || (parseInt(n) > 85 || parseInt(n) < 1) || n==="" || (parseFloat(n)!=parseInt(n)))
    {
      //alert("Enter an integer between 1 and 85 please");
      //alert("You have entered " + parseFloat(n));
      //let msg = document.getElementsByClassName("input_errormsg");
      //setError(tre)
      //msg[0].style.display = "block";
      setError(true);
      //alert(msg[0].innerHTML);
    }
    else
    {
      setError(false);
      Opensuggestions(true);
      inp[0].style.paddingBottom='10%';
    }
  }

  let closeSuggestion = ()=>{
    Opensuggestions(false);
    inp[0].style.paddingBottom = 0;
  }
  let predscore = 0;
  let predrank = 0;
  let act21 = 0;
  let pred21 = 0;
  let arr = rank2022.split("\n");
  let v =  props.name.replace(/[^a-zA-Z0-9]/g, '');
  let text = <p>nothing</p>
  let btn = <button className = "impbtn" onClick = {improveChange}>Improve Rank</button>
  //alert(v);
  console.log("clg name : " + v);
  if(!improveOpen)
  {
  let n = -1;
  for(let i = 1;i<arr.length;i++)
  {  
    let modarr = arr[i].split(",");
    console.log(modarr);
    let changed = modarr[2].replace(/[^a-zA-Z0-9]/g, '');
    console.log(changed);
    //let n = (changed===v);
     if(changed===v)
     {
       //alert("FOund",v);
       n=0;
       let obj = arr[i].split(",");
       //alert("found! " + arr[i].split(",")[10]);
       predscore = parseFloat(obj[10]);
       predrank = parseInt(obj[0]);
       break;
     }
  }

  if(n===-1)
  {
    arr = rank2021.split("\n");
    for(let i=1;i<arr.length;i++)
    {
      let modarr = arr[i].split(",");
      
      let changed = modarr[2].replace(/[^a-zA-Z0-9]/g, '');
      console.log(changed);
      n = changed.search(v);
      
      //n = arr[i].search(v);
      if(n!==-1)
      {
        let obj = arr[i].split(",");
        predscore = parseFloat(obj[10]);
        predrank = parseInt(obj[0]);
        text = <div><h3>2021 Score : {predscore} </h3>
        <h3>2021 Rank : {predrank}</h3>
        {btn}
        </div>
        break;
      }
    }
  }
  else
  {
    let displayed_thing = "Score";
    arr = rank2021.split("\n");
    for(let i=1;i<arr.length;i++)
    {
      let modarr = arr[i].split(",");
      
      let changed = modarr[2].replace(/[^a-zA-Z0-9]/g, '');
      console.log(changed);
      
      n = changed.search(v);
      
      //n = arr[i].search(v);
      if(n!==-1)
      {
        let obj = arr[i].split(",");
        if(parseInt(obj[0]) > 85)
        act21 = parseFloat(obj[10]);
        else
        {
          act21 = parseInt(obj[0]);
          displayed_thing = "Rank";
        }
        break;
      }
    }

    arr = rank2021r.split("\n");
    for(let i=1;i<arr.length;i++)
    {
      let modarr = arr[i].split(",");
      
      let changed = modarr[2].replace(/[^a-zA-Z0-9]/g, '');
      console.log(changed);
      n = changed.search(v);
      
      //n = arr[i].search(v);
      if(n!==-1)
      {
        let obj = arr[i].split(",");
        if(displayed_thing === "Rank")
        pred21 = parseInt(obj[0]);
        else
        pred21 = parseFloat(obj[10]);
        break;
      }
    }

    
    text = <div>
          <h3>2021 Actual {displayed_thing} : {act21}</h3>
          <h3>Predicted 2021 {displayed_thing} : {pred21}</h3>
          <h3>Predicted 2022 Rank : {predrank}</h3>
          {btn}
          </div>
  }
  }
  else
  {
    if(suggestions)
    {
       let rows = rank2022.split("\n");
       let r21 = rank2021.split("\n");
       let params = rows[1];
       console.log(params);
       let targetidx = parseInt(document.getElementById("rank").value);
       let target_row = rows[targetidx+1];
       //alert(target_row);
       //alert(params);
       let curr_row = 0;
       for(let i=1;i<203;i++)
       {
        let changed_arr = r21[i].split(","); 
        console.log(changed_arr);
        let changed_n = changed_arr[2].replace(/[^a-zA-Z0-9]/g, '');
        console.log(changed_n);
        //let p = r21[i].search(changed_n);
         if(changed_n===v)
         {curr_row = r21[i];
         break;}
       }

       let improvements = <ImprovementDetails current_row = {curr_row} target = {target_row} paras = {params}></ImprovementDetails>
       text =<div> <center>Areas for Improvement When Compared to the College at Rank {targetidx} - {target_row.split(",")[2]}</center>
       {improvements}
       <button onClick = {closeSuggestion}>Back</button>
       </div>

    }
    else
    {
    let myerr = <p></p>
      if(isError)
      myerr = <p className = "input_errormsg">Enter an integer between 1 and 85 please</p>

    text = <div><label>Desired Rank in 2022 : </label>
    <input id = "rank" type = "number" min = "1" max = "50" required/>
    <button className = "gobckbtn" onClick = {improveClose}>Back</button>
    <button className = "goforwardbtn" onClick = {suggestionOpener}>Go</button>
     {myerr}
    </div>
    }
  }
  return (
    <div>
      <button className="backtrend" onClick={() => props.reset(" ")}><img src={back_icon} alt="back"></img></button>
      <h2 className="detailhead">{props.name}</h2>
      <br />
      <div className = "picspanel">
      <div className="imgwrap">
        <div className="trd">
          <center><label>NIRF Score Change Over the Years</label></center>
          <img className="overallpic" src={process.env.PUBLIC_URL + props.overallpath} alt="overall_pic"></img>
        </div>
      </div>
      <div className="imgwrap">
        <div className="trd">
          <center><label>TLR Change Over the Years</label></center>
          <img className="overallpic" src={process.env.PUBLIC_URL + props.tlrpath} alt="overall_pic"></img>
        </div>
      </div>
      <div className="imgwrap">
        <div className="trd">
          <center><label>RPC Change Over the Years</label></center>
          <img className="overallpic" src={process.env.PUBLIC_URL + props.rpcpath} alt="overall_pic"></img>
        </div>
      </div>
      <div className="imgwrap">
        <div className="trd">
          <center><label>GO Change Over the Years</label></center>
          <img className="overallpic" src={process.env.PUBLIC_URL + props.gopath} alt="overall_pic"></img>
        </div>
      </div>
      <div className="imgwrap">
        <div className="trd">
          <label>OI Change Over the Years</label>
          <img className="trendpic" src={process.env.PUBLIC_URL + props.oipath} alt="parameter_img"></img>
        </div>
      </div>
      <div className="imgwrap">
        <div className="trd">
          <label>Perception Change Over the Years</label>
          <img className="trendpic" src={process.env.PUBLIC_URL + props.prpath} alt="parameter_img"></img>
        </div>
      </div>
      <div className="imgwrap">
        <div className="trd">
          <label>Parameter Change Over the Years (All Together)</label>
          <img className="trendpic" src={process.env.PUBLIC_URL + props.parameterpath} alt="parameter_img"></img>
        </div>
      </div>
      </div>
      <center><h3>Improvement</h3></center>
      <div className="improve">
        <div className = "improve-inner">
        {text}
        </div>
        </div>
        <br/>
    </div>
  )
}

export default TrendDetails;