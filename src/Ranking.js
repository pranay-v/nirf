import { CsvToHtmlTable } from 'react-csv-to-table';
import RankingFilter from './RankingFilter';
import { useState } from 'react';
import back_icon from "./back_icon.jpg";
import "./Ranking.css";

import {rank2021} from "./rankings_2021";
import {rank2020} from "./rankings_2020";
import {rank2019} from "./rankings_2019";
import { rank2018 } from './rankings_2018';
import { rank2017} from './rankings_2017';
import { rank2016 } from './rankings_2016';

/*
this appears when ranking icon is clicked
The csvtoHTML package belongs to react-csv-to-table which 
was available on github(maruthapandiyan), so needs to be installed.
the  files for each year's ranking must be imported,
basically a js file that has each line belonging to a row of ranking.
a filter is present which allows year to be toggled, on toggling
currYear is changed and rerendering occurs.
table is a bootstrap standard style-table
*/
const Ranking = (props) =>{

const [currYear,setYear] = useState(2021);
const files = [rank2021,rank2020,rank2019,rank2018,rank2017,rank2016];

const changeYear = (event) =>{
setYear(event.target.value);
}

return (
        <div>
        <br/>
        <center><h2>Rankings for {currYear}</h2></center>
        <button className = "back" onClick = {() => props.return("")}><img src = {back_icon} alt = "back"></img></button>
    
        <RankingFilter year = {currYear} onYearSelect = {changeYear}/>
        <center><CsvToHtmlTable data={files[2021-currYear]} csvDelimiter="," tableClassName="table table table-bordered table-striped "   tableColumnClassName = "tcols"/></center>
        </div>
    );

}
export default Ranking;