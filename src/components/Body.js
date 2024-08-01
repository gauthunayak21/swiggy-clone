import { useEffect, useState } from "react";
import RestaurentCard, { withDiscount} from "./RestaurentCard";
import { Link } from "react-router-dom";

import useShowOffline from "../utils/useShowOffline";

const Body = () => {
    const [listOfRestaurents, setRestaurents] = useState([]);
    const [filteredRestaurents, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState('')

    useEffect(() => {fetchRes()}, []);

    const fetchRes = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
          );
      
          const json = await data.json();
      
          // Optional Chaining
          setRestaurents(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );
          setFilteredRestaurants(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );
    }

    const offline = useShowOffline();

    if(offline) {
        return <h1>Looks like you are offline.Please check your network connection</h1>
    }

    const RestaurantCardDisCount = withDiscount(RestaurentCard);


    return (
        <div className="body-wrapper mx-auto p-4">
            <div className="search-field">
                <input className="border-2 rounded border-black p-1" type="text" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value)
                }} />
                <button className="border-2 rounded border-black ml-2 p-1" onClick={() => {
                    const filteredRestaurents = listOfRestaurents?.filter(res => res?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()));
                    setFilteredRestaurants(filteredRestaurents)
                }}>search</button>
            </div>
            <div className="card-wrapper">
            {
                filteredRestaurents?.map(restaurant => 
                <Link key={restaurant.info.id} to={'/res/' + restaurant?.info?.id}>
                    {restaurant?.info?.aggregatedDiscountInfoV3 ? <RestaurantCardDisCount key={restaurant.info.id} res={restaurant} /> :
                    <RestaurentCard key={restaurant.info.id} res={restaurant} />
                }
                </Link>)
            }
            </div>
        </div>
    )
}

export default Body;