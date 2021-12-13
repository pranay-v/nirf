
const ImprovementDetails = (props) =>
{
    let target_array = props.target.split(",");
    let current_array = props.current_row.split(",");
    //alert("current array in imp details : " + current_array);
    let changeArr = [];

    for(let i=5;i<10;i++)
    {
        //console.log(parseFloat(target_arr[i]))
        if(target_array[i] > current_array[i])
        changeArr.push(i);
    }
    //alert(changeArr);
    let pars = props.paras.split(",");
    //alert(pars);
    //for(let i=0;i<pars.length;i++)
    //alert(pars[i])
    //alert(curr_arr);
    //alert(target_arr);
    //alert(changeArr);
    let details = changeArr.map(idx => <p key = {idx}>{pars[idx]} :- +{(parseFloat(target_array[idx]) - parseFloat(current_array[idx])).toFixed(2)} </p>);
    return (
        <div>
        {details} 
        </div>
    )
}

export default ImprovementDetails;