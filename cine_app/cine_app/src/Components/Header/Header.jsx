import Navbar from "../Navbar/Navbar";      

function Header() {
    return ( 
        <>
        <header className="flex justify-around bg-black text-white">
            <span>Logo</span>
            <h1>Tim Burton Movies</h1>
            <Navbar/>
        </header>
        </>
     );
}

export default Header;