import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <header className="bg-white w-screen px-10 shadow-md">
            <div className="flex align-middle justify-between py-6">
                <Link className="text-gray-800" to="/">
                    <h1 className="font-bold">Barker</h1>
                </Link>
            </div>
        </header>
    );
}


export default Navbar;