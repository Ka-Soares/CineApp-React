import { Link } from "react-router-dom";
 
function Navbar() {
    return (  
        <>
        <nav>
            <ul className="flex gap-5">
                <li><Link to="/">Home</Link></li>
                <li><Link to="Movies">Filmes</Link></li>
                <li><Link to="About">Sobre</Link></li>
                <li><Link to="Contact">Contato</Link></li>
            </ul>
        </nav>
        </>
    );
}
 
export default Navbar;