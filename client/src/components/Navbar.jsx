import { Link } from "react-router-dom";
import logo from "../images/dog.svg"

// Hooks
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
    const { logout } = useLogout()
    const { user } =useAuthContext()

    const handleClick = () => {
        logout()
    }
    return ( 
        <header className="bg-white w-screen px-10 shadow-md">
            <div className="flex align-middle justify-between py-3">
                <Link className="flex" to="/">
                    <img src={logo} alt="logotype" className=" w-16"/>
                </Link>
                <div className="flex">
                    {user && (<div className="logout-container text-end">
                    <span className="">Welcome {user.username}!</span>
                    <button className="ml-10 mt-1.5 border-2 w-28 h-8 rounded-lg" 
                    onClick={handleClick}>Sign out</button>
                </div>)}
            

                    {!user && (<div className="login-container flex align-middle">
                        <Link 
                            className="mt-1.5 border-2 text-sm px-6 py-1 h-8 rounded-lg"  to="/login">
                            Log in
                        </Link>
                    </div>)}
                </div>
            </div>
        </header>
    );
}


export default Navbar;