import { useEffect, useState } from "react";
const useRestaurents = () => {
    const [listOfRestaurents, setRestaurents] = useState([]);
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
    }

    return listOfRestaurents;
}

export default useRestaurents;