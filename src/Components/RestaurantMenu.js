import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{

    const[resInfo,setResInfo] = useState(null);
    
    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=392828&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        setResInfo(json.data);
    }

    if( resInfo===null){
        return <Shimmer/>;
    }

    const {name , cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log("ItemCards :- ",itemCards)
    return (
        
        <div className="menu">
            
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage} 
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li>{item.card.info.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
