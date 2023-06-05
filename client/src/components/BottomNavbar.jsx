

const BottomNavbar = ({children}) => {
    return ( 
        <div className="flex bg-white justify-center w-screen h-20 shadow-topShadow fixed left-0 bottom-0">
        {children}
        </div>
    );
}

export default BottomNavbar;