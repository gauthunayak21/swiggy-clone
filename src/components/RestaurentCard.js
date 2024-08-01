import { CDN_URL } from '../utils/constants'
const RestaurentCard = (prop) => {
    const {name, cloudinaryImageId, avgRating} = prop.res.info;

    console.log(prop.res)
    return (
        <div className="res-card">
            <img src={CDN_URL + cloudinaryImageId} />
            <p>{name}</p>
            <p>{avgRating}</p>
        </div>
    )
}

export const withDiscount = (RestaurentCard) => {
    return (props) => {
        const { aggregatedDiscountInfoV3 } = props?.res.info;
        return (
            <>
            <div className='absolute p-3 bg-white text-black text-xs m-2 rounded'> {aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader} </div>
            <RestaurentCard {...props} />
            </>
        )
    }
}

export default RestaurentCard;