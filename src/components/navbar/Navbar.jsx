import "./navbar.css"
import { Link } from 'react-router-dom'
import { useDarkMode } from "../../context/darkModeContext"
function Navbar() {
  const {darkMode} = useDarkMode();

  return (
    <div className={darkMode ? "dark_navbar_main_div navbar_main_div":"light_navbar_main_div"}>
        <div className="logo_container">
          <Link to="/" className="logo_site_name">World Cinema</Link>
        </div>
        <nav className="navibar">
            <Link  className="navbar_link" to="/">Home</Link>
            <Link className="navbar_link" to="/films">Films</Link>
            <Link className="navbar_link" to="/about">About</Link>
            <Link className="navbar_link" to="/addfilm">New</Link>
        </nav>
    </div>
  )
}

export default Navbar
