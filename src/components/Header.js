const Header = () => {
    return (
        <header className="hero">
        <div className="navbar">
            <h1 className="myname">
                Norman Bernard's Portfolio
            </h1>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="./portfolio.html">Portfolio</a></li>
                    <li><a href="https://docs.google.com/document/d/1S-UxvXjFzDi-avSwZAvrmlltTb-49algLpPBuSOy6Bk/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</a></li>
                    <li><a href="./contact.html">Contact</a></li>
                </ul>
            </nav>
        </div>

    </header>
    )
}

export default Header;