import { useParams } from "react-router-dom";
import useFetchResData from '../utils/useFetchResData';
import MenuCategory from "./MenuCategory";

const RestaurantDetails = () => {

    const param = useParams();

    const resData = useFetchResData(param?.resId);
    console.log(resData)

    if(resData === null) return<></>
    const {name, cuisines, costForTwoMessage } = resData?.cards[2]?.card?.card?.info;
    const resMenu = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(card => card?.card?.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(resMenu)

    return (
        <div className="w-3/6 mx-auto">
            <h1>{name}</h1>
            <p>{cuisines?.join(',')}</p>
            <p>{costForTwoMessage}</p>
                {
                    resMenu?.map(menu => <MenuCategory key={menu?.card?.card?.title} menu={menu?.card?.card} />)
                }
        </div>
    )
}

export default RestaurantDetails;
