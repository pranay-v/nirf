/*2021 and 2022 predictions displayed*/

import { CsvToHtmlTable } from 'react-csv-to-table';
import PredictFilter from './PredictFilter';
import { useState } from 'react';
import back_icon from "./back_icon.jpg";
//import "./Ranking.css";

/*import {rank2022r} from "./rankings_2022_rough";
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
*/

/*
this appears when predict icon is clicked
The csvtoHTML package belongs to react-csv-to-table which 
was available on github(maruthapandiyan), so needs to be installed.
the  files for each parameter's ranking must be imported,
basically a js file that has each line belonging to a row of ranking.
a filter is present which allows parameter to be toggled, on toggling
currPara is changed and rerendering occurs.
table is a bootstrap standard style-table
one additional feature is a dictionary like object which maps currently chosen parameter to 
index in the file table, allowing easy passing of the right parameter's file as data to the csvtoHTML tag
*/
const Predict22 = (props) =>{

const [currPara,setParam] = useState("Overall");
//const files = [rank2022r,pr_r_22,rpc_r_22,go_r_22,oi_r_22,tlr_r_22];
const conversions = {"Overall":0,
                     "Perception":1,
                     "TLR":2,
                     "RPC":3,
                     "GO":4,
                     "OI":5
                     
};

const changeParam = (event) =>{
setParam(event.target.value);
}

return (
        <div>
        <br/>
        <center><h2>Rankings for 2022 Sorted by {currPara}</h2></center>
        <button className = "back" onClick = {() => props.reset(" ")}><img src = {back_icon} alt = "back"></img></button>
    
        <PredictFilter para = {currPara} onParaSelect = {changeParam}/>
        <center><CsvToHtmlTable data={props.files[conversions[currPara]]} csvDelimiter="," tableClassName="table table table-bordered table-striped "/></center>
        </div>
    );
}
    export default Predict22;