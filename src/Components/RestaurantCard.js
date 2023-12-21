import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props; 
    const { 
        cloudinaryImageId,
        name,
        cuisines,
        costForTwo,
        avgRating
    } = resData?.info;
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img 
                className="res-logo"
                alt = "res-logo"
                src={CDN_URL+cloudinaryImageId}
              />
            <div className="sc-aXZVg kIsYLE">{name}</div>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating}⭐️</h4>
        </div>
    );
};

export default RestaurantCard;