/*
 Page that is opened when the state is 2021 , i.e button for 2021 prediction is clicked.
 shows 21's actual rankings by default, on changing you can view the prediction thru the
 select dropdown.
*/
import { CsvToHtmlTable } from 'react-csv-to-table';
import { useState } from 'react';
import back_icon from "./back_icon.jpg";
import "./Ranking.css";
import { rank2021 } from './rankings_2021';
import { rank2021r } from './rankings_2021_pred';
import Rank21Filter from './Rank21Filter';
const Predict21 = (props) =>{

    const [currType,setType] = useState("Actual");
    const files = {
        "Actual":rank2021,
        "Prediction":rank2021r
    };
    
    const changeType = (event) =>{
    setType(event.target.value);
    }
    
    return (
            <div>
            <br/>
            <center><h2>Rankings for 2021 - {currType}</h2></center>
            <button className = "back" onClick = {() => props.reset(" ")}><img src = {back_icon} alt = "back"></img></button>
        
            <Rank21Filter type = {currType} onTypeSelect = {changeType}/>
            <center><CsvToHtmlTable data={files[currType]} csvDelimiter="," tableClassName="table table table-bordered table-striped "/></center>
            </div>
        );
    
    }
    export default Predict21;