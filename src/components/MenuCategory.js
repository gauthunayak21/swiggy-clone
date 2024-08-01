import MenuItemCard from "./MenuItemCard";
import { useState } from "react";

const MenuCategory = (props) => {
    const {title, itemCards } = props?.menu;

    const [showItems, setShowItems] = useState(false)

    return (
        <div className="w-100 mb-3">
            <div className="flex justify-between border-2 p-4" onClick={() => setShowItems(true)}>
            <span>{title}</span><span>⬇️</span>
            </div>
            {showItems && <div className="">
                {itemCards?.map( item => <MenuItemCard key={item?.card?.info?.id} item={item} />)}
            </div>}
        </div>
    )
}

export default MenuCategory;