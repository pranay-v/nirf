import "./Item.css";

const Item = (props) =>
{
     return <div className = "ItemWrapper">
    <button class ="ItmButton" onClick = {()=> props.changer(props.name)}>
        {props.name}
    </button>
     </div>
}

export default Item;