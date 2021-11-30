import Trend from './Trend';
import Ranking from './Ranking';
import Predictions from './Predictions';
import Options from './Options';
/*
this is basically the container for whatever is displayed , be it rankings,or trends, or prediction.
if the value of 'choice' state isn't any of the above, it'll be a 
panel of 3 icons, on clicking either choice the state changes, leading to rerendering which 
allows required information to be shown.
*/
const Page = (props) =>
{
    switch(props.current)
    {
        case 'rankings':
           return (
           <Ranking return = {props.modifier}/>
            )
        
        case 'trend':
            return(
                <Trend return = {props.modifier}/>
            )
        
        case 'prediction':
            return(
                <Predictions return = {props.modifier}/>
            )
        
        default:
            return(
                <Options chooser = {props.modifier}/>
            )
    }  
} 

export default Page;