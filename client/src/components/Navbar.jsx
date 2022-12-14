import { Link } from "react-router-dom";
import logo from "../images/dog.svg"

const Navbar = () => {
    return ( 
        <header className="bg-white w-screen px-10 shadow-md">
            <div className="flex align-middle justify-between py-3">
                <Link className="text-gray-800" to="/">
                    <img src={logo} className="w-14 font-bold text-2xl"/>
                </Link>
            </div>
        </header>
    );
}


export default Navbar;