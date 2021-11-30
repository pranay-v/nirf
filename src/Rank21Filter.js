const Rank21Filter = (props) =>
{
 return (
     <div className='ranking-filter'>
     <div className='ranking-filter__control'>
       <label>Filter by Type</label>
       <select value = {props.type} onChange = {props.onTypeSelect}>
         <option value='Actual'>Actual</option>
         <option value='Prediction'>Prediction</option>
       </select>
     </div>
   </div>
 )
}

export default Rank21Filter;