/*This is an entry level page that opens when user clicks on trends in 'options'
Here we'll have a list of universities of 4+ yrs data, and any can be opened depending on what user clicks
if the value of currTrent state is " " then the entry level list is displayed. whenever one of the
university buttons is clicked the state changes and the corresponding details for that univ are rendered.
the dataset is imported first and then, another object called 'univs' is created.
the univs object is then populated with university key-value pairs having atleast 5 entries(i.e 5 yrs of data)
conditional rendering then occurs, if state is empty same list(by mapping each key to an <Item> object), or else
the list takes on a <TrendDetails> element.
Incase trenddetails are to be rendered the pathnames for overall and parameter graphs are passed as props,
along with the name.
*/


import { useState } from "react";
import ds from "./dataset_pretty.json";
import Item from "./Item";
import TrendDetails from "./TrendDetails";
import "./Trend.css";
import back_icon from "./back_icon.jpg";

let univs = {};
let count = 0;
for(let key in ds)
{
    
    if(Object.keys(ds[key]).length >=4)
    {univs[key] = ds[key];
    console.log(key, "has 3 or more yrs");//ds[key], + " hey");
    count = count + 1;
    }
    
}
//alert(count);
const Trend = (props) =>
{
    //alert("there are : " + Object.keys(univs).length , " colleges");
    const [currTrend,setTrend] = useState(" ");
  
    const changeTrend = (name) =>
  {
   setTrend(name);
  }

  let List = <div>Lmao</div>
    
  if(currTrend === " ")

    {
            List = Object.keys(univs).map((n) =>{
    
                return <Item name = {n} changer = {changeTrend} key = {univs[n]["2021"][0]}></Item>
         });

    }
   
  else{
     let pathmain = "./graphs/graphs"; 
     let changedcurrTrend = currTrend;
     //currTrend = currTrend.replace("&","_");
     changedcurrTrend = currTrend.replace("&","_");
     let parapath = pathmain +  "/" +  changedcurrTrend + ".png";
     let overpath = pathmain + "/" + changedcurrTrend + "_overall.png";
     let tlrpath = pathmain + "/" + changedcurrTrend + "_tlr.png";
     let rpcpath = pathmain + "/" + changedcurrTrend + "_rpc.png";
     let gopath = pathmain + "/" + changedcurrTrend + "_go.png";
     let oipath = pathmain + "/" + changedcurrTrend + "_oi.png";
     let prpath = pathmain + "/" + changedcurrTrend + "_pr.png";
     List = <TrendDetails reset = {changeTrend} name = {currTrend} parameterpath = {parapath} overallpath = {overpath}
     tlrpath = {tlrpath} rpcpath = {rpcpath} gopath = {gopath} oipath = {oipath} prpath = {prpath}></TrendDetails>
  }

       
  
   if(currTrend === " ") 
   return(
      <div>
        <div className = "trendcover">
          <h2 className = "tmsg">Pick a College</h2>
      <div className = "TrendWrap">
          <button className = "back" onClick = {() => props.return("")}><img src = {back_icon} alt = "back"></img></button>
          {List}
      </div>
      </div>
      </div>
    )

    else
    return(
        <div className = "TrendWrap">          
        {List}
      </div>
    )
        
}

export default Trend;