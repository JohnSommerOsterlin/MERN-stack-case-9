import { Link } from "react-router-dom";
import logo from "../images/dog.svg"
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
    const { logout } = useLogout()

    const handleClick = () => {
        logout()
    }
    return ( 
        <header className="bg-white w-screen px-10 shadow-md">
            <div className="flex align-middle justify-between py-3">
                <Link className="text-gray-800" to="/">
                    <img src={logo} alt="logotype" className="w-14 font-bold text-2xl"/>
                </Link>
                <div className="flex space-x-4">
                    <div className="logout-container">
                        <button className="mt-1.5 border-2 text-sm px-6 h-8      rounded-lg" onClick={handleClick}>Log out</button>
                    </div>

                    <div className="login-container flex align-middle">
                        <Link 
                            className="mt-1.5 border-2 text-sm px-6 py-1 h-8 rounded-lg"  to="/login">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}


export default Navbar;