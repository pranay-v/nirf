/*Piece of code that enables us to select a year from 2016-2021 
whenever the value is changed rerendering occurs as the onYearSelect triggers a state change.
*/

const RankingFilter = (props) =>
{
 return (
     <div className='ranking-filter'>
     <div className='ranking-filter__control'>
       <label>Filter by year</label>
       <select value = {props.year} onChange = {props.onYearSelect}>
         <option value='2021'>2021</option>
         <option value='2020'>2020</option>
         <option value='2019'>2019</option>
         <option value='2018'>2018</option>
         <option value='2017'>2017</option>
         <option value='2016'>2016</option>
       </select>
     </div>
   </div>
 )
}

export default RankingFilter;