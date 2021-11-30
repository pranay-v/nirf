/*If nothing has been chosen(as is the case when the site is first loaded/when we leave any of the pages)
this will be displayed*/
import trend from "./trend.png";
import rank from "./ranks.png";
import prediction from "./prediction.png";
import "./Options.css";
const Options = (props) =>
{
    return (
        <div>
        <div className = "covering">
        <div className = "optionWrapper">
        <button onClick = {() => props.chooser("trend")}>
            <img alt = "trend" className = "trnd" src = {trend}/><br/>
            <div className = "caption"><center><label><h2>TRENDS</h2></label></center></div>
        </button>
        <button onClick = {() => props.chooser("rankings")}>
            <img alt = "ranks" src = {rank}/><br/>
            <div className = "caption"><center><label><h2>RANKS</h2></label></center></div>
        </button>
        <button onClick = {() => props.chooser("prediction")}>
            <img alt = "predictions" className = "pred" src = {prediction}/><br/>
            <div className = "caption"><center><label><h2>PREDICTIONS</h2></label></center></div>
        </button>
        </div>
        </div>
        </div>
    )
}

export default Options;