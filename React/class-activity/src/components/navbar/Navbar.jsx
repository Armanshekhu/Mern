import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import "./navbar.css";

function Navbar() {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <div className='navbar'>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
            <Link to='/about'>About</Link>
            <button onClick={() => toggleTheme()}>Toggle</button>
        </div>
    )
}

export default Navbar;
