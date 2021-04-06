import { Link } from "react-router-dom"



const Navbar = () => {

    return <nav className='nba-navbar'>
            <div className='nba-logo'>
                LOGO
            </div>

            <div className='navbar-nav'>
                <Link to='/players'>Players</Link>
                <Link to='/teams'>Teams</Link>
                <Link to='/stats'>Stats</Link>
            </div>

    </nav>




}

export default Navbar