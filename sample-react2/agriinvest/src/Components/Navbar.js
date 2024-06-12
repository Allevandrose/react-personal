import logo from "./Images/logo2.png"
import Forms from './form';
const Navbar = () => {
    return ( 
        <nav className="navbar sticky-top">
            <div className="logo">
                <img className="logo" src={logo} alt="images" srcset="" />
            </div>
            <div className="links">
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Contacts">Contacts</a></li>
                <li><a href="/Products">Products</a></li>
                <button className="nav-button" style={{
                    marginRight:"5px"
                }}>Sign Up</button>
                <a href={Forms} className="nav-button" style={{
                    textDecoration:"none"
                }}>Log In</a>
            </div>
        </nav>
     );
}
 
export default Navbar;