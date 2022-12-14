import { Link } from "react-router-dom";
import logo from "../images/dog.svg"

const Navbar = () => {
    return ( 
        <header className="bg-white w-screen px-10 shadow-md">
            <div className="flex align-middle justify-between py-3">
                <Link className="text-gray-800" to="/">
                    <img src={logo} alt="logotype" className="w-14 font-bold text-2xl"/>
                </Link>
                <Link className="mt-1.5 border-2 pb-0 text-lg px-6 h-8 rounded-lg" to="/login">
                    Log in
                </Link>
            </div>
        </header>
    );
}


export default Navbar;