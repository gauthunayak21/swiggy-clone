import { Link } from "react-router-dom";
import useShowOffline from "../utils/useShowOffline";
import { LOGO_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const Header = () => {

    const offline = useShowOffline();

    const cart = useSelector((store) => store.cart.items)

    return (
        <div className="header bg-cyan">
            <div className='logo'>
                <img className="w-40" src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Online Status: {!offline ? "✅" : "🔴"}</li>
                    <li>
                        <Link to='/'>Home </Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li>Cart: {cart?.length}</li>
                </ul>
            </div>
        
        </div>
    )
}

export default Header;