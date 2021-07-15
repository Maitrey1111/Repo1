import "./LandingSection.css" ;

const LandingSection = () => {
    return (
        <section id="landing">
            <header className="navbar">
                <nav>
                    <ul className="nav-links">
                        <li className="nav-link"><a data-scroll href="#landing">Home</a></li>
                        <li className="nav-link"><a data-scroll href="#about">About</a></li>
                        <li className="nav-link"><a data-scroll href="#skills">Skills</a></li>
                        <li className="nav-link"><a data-scroll href="#project">Projects</a></li>
                        <li className="nav-link contact"><a data-scroll href="mailto:maitrey.bhute2020@gmail.com">Contact me</a></li>
                    </ul>
                </nav>
            </header>
            <main> </main>
        </section>
    )
}

export default LandingSection;
