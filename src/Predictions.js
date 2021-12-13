/*2021 and 2022 predictions displayed*/
/*
this appears when predict icon is clicked
The csvtoHTML package belongs to react-csv-to-table which 
was available on github(marudhapandiyan), so needs to be installed.
the  files for each parameter's ranking must be imported,
basically a js file that has each line belonging to a row of ranking.
a filter is present which allows parameter to be toggled, on toggling
currPara is changed and rerendering occurs.
table is a bootstrap standard style-table
one additional feature is a dictionary like object which maps currently chosen parameter to 
index in the file table, allowing easy passing of the right parameter's file as data to the csvtoHTML tag
*/

import { useState } from "react";
import Item from "./Item";

import "./Predictions.css";
import Predict22  from "./Predict22";
import Predict21 from "./Predict21";
import back_icon from "./back_icon.jpg";

//alert(count);
import {rank2022r} from "./rankings_2022_rough";
import {pr_r_22} from "./pr_rankings_2022_rough";
import {rpc_r_22} from "./rpc_rankings_2022_rough";
import { go_r_22 } from './go_rankings_2022_rough';
import { oi_r_22} from './oi_rankings_2022_rough';
import { tlr_r_22 } from './tlr_rankings_2022_rough';
import {rank2022} from "./rankings_2022";
import {pr2022} from "./pr_rankings_2022";
import {rpc2022} from "./rpc_rankings_2022";
import { go2022 } from './go_rankings_2022';
import { oi2022} from './oi_rankings_2022';
import { tlr2022 } from './tlr_rankings_2022';
import {rank2021} from "./rankings_2021";
import {rank2021r} from "./rankings_2021_pred";

const preds = {
    "2021 Rankings":[rank2021,rank2021r],
    "2022 Rankings(Based on Actual Data for 2021)" : [rank2022,pr2022,tlr2022,rpc2022,go2022,oi2022],
    "2022 Rankings(Based on Predicted Data for 2021)" : [rank2022r,pr_r_22,tlr_r_22,rpc_r_22,go_r_22,oi_r_22]
};

const Predictions = (props) =>
{
    //alert("there are : " + Object.keys(univs).length , " colleges");
    const [currPred,setPred] = useState(" ");
  
    const changePred = (name) =>
  {
   setPred(name);
  }

  let PredList = <div>Lmao</div>
    
  if(currPred === " ")

    {
            PredList = Object.keys(preds).map((n) =>{
    
                return <Item name = {n} changer = {changePred}></Item>
         });

    }
   
  else{
     switch(currPred){
         case "2021 Rankings":
        {      
             PredList = <Predict21 reset = {changePred}></Predict21>;
             break;
         }

         default:
             PredList = <Predict22 files = {preds[currPred]} name = {currPred} reset = {changePred}></Predict22>
     }
     
  }

       
  
   if(currPred === " ") 
   return(
      <div>
        <div className = "predcover">
          <h2 className = "pmsg">List of Predictions</h2>
      <div className = "PredWrap">
          <button className = "back" onClick = {() => props.return("")}><img src = {back_icon} alt = "back"></img></button>
          {PredList}
      </div>
      </div>
      </div>
    )

    else
    return(
        <div className = "PredWrap">          
        {PredList}
      </div>
    )
        
}

export default Predictions;