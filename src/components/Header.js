import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="hero">
        <div className="navbar">
            <h1 className="myname">
                Norman Bernard's Portfolio
            </h1>
            <nav>
                <ul>
                    <li><NavLink to='/'>About</NavLink></li>
                    <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
                    <li><a href="https://docs.google.com/document/d/1S-UxvXjFzDi-avSwZAvrmlltTb-49algLpPBuSOy6Bk/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</a></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </nav>
        </div>

    </header>
    )
}

export default Header;