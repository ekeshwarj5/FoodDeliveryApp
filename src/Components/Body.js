import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        let y =  json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(y);
        setlistOfRestaurants(y);
    };

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div>
                <div className="filter">
                    <div className="search">
                        <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                            setSearchText(e.target.value);
                        }}/>
                        <button onClick={()=>{

                        }}>
                        Search</button>
                    </div>
                    <button 
                        className="filter-btn" 
                        onClick={() => {
                            const filteredList = listOfRestaurants.filter(
                                (res) => res.info.avgRating>4
                            );
                            setlistOfRestaurants(filteredList);
                        }} 
                        >
                            Top rated Restaurants
                    </button>
                </div>
                <div>
                    <h3>Restaurants with online food delivery in Bangalore</h3>
                </div>
                <div className="res-container">
                    {
                      listOfRestaurants.map((restaurant) => (
                      <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Body