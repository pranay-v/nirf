import "./TrendDetails.css";
import back_icon from "./back_icon.jpg";

/*
  shown whenever a college is clicked in 'trend' page. parameter and overall graphs displayed.
  can reset page to list of all univs(equivalent of going back), with button that sets state to " ",
  thus rerendering the page.
*/
const TrendDetails= (props) =>
{
    
    return(
        <div>
        <button className = "backtrend" onClick = {() => props.reset(" ")}><img src = {back_icon} alt = "back"></img></button>
        <center><h2 class = "detailhead">{props.name}</h2></center>
        <br/>
        <div className = "imgwrap">
        <center><label>Parameter Change Over the Years</label></center>
        <img class = "trendpic" src = {process.env.PUBLIC_URL + props.parameterpath} alt = "parameter_img"></img>
        </div>
        <div className = "imgwrap">
        <center><label>NIRF Score Change Over the Years</label></center>
        <img class = "trendpic" src = {process.env.PUBLIC_URL + props.overallpath} alt = "overall_pic"></img>
        </div>
        </div>
    )
}

export default TrendDetails;