const MenuItemCard = (props) => {

    const { name, price, defaultPrice } = props?.item?.card?.info;
    console.log(props);

    return (
        <div>
            <h4>{name}</h4>
            <h6>{price / 100 || defaultPrice / 100}</h6>
        </div>
    )
}

export default MenuItemCard; 