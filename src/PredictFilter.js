import "./PredictFilter.css";

const PredictFilter = (props) =>
{
 return (
     <div className='predict-filter'>
     <div className='predict-filter__control'>
       <label>Filter by Parameter</label>
       <select value = {props.para} onChange = {props.onParaSelect}>
         <option value='Overall'>Overall</option>
         <option value='TLR'>TLR</option>
         <option value='RPC'>RPC</option>
         <option value='GO'>GO</option>
         <option value='OI'>OI</option>
         <option value='Perception'>Perception</option>
       </select>
     </div>
   </div>
 )
}

export default PredictFilter;