import { useEffect } from 'react'

import gsap from 'gsap' ;

import landingil from '../../Assets/Vectors/landingil.svg';

import "./LandingSection.css" ;

const LandingSection = () => {

useEffect(() => {
    /*window.alert("Enjoy");*/
    const tl = gsap.timeline();
    tl.to('.main-heading',{opacity:1, duration:1.5}).from('.main-heading',{x:-100, duration:1.5, delay:-1.5})
    tl.to('.sub-heading',{opacity:1, duration:1.5, delay:-1}).from('.sub-heading',{x:-100, duration:1.5, delay:-1.5})
    tl.to('.landing-il',{opacity:1, duration:1.5, delay:-1.5}).from('.landing-il',{y:80, duration:1.5, delay:-1.5})
    tl.to('.navbar',{opacity:1, duration:1.5, delay:-1.5})
}, [])

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
            <main className="landing">
                <article>
                    <h2 className="main-heading">Hey, I am <span className="orange">Maitrey Bhute</span></h2>
                    <h3 className="sub-heading">I am a <span className="green">student at VIT, Vellore</span></h3>
                </article>
                <img src={landingil} alt="Landing Illustration" className="landing-il"/>
                
                <a data-scroll href='#project' className="chevron">
                    <div className="mouse_scroll">

		                <div className="mouse">
			                <div className="wheel"></div>
		                </div>
		                <div>
			                <span className="m_scroll_arrows unu"></span>
			                <span className="m_scroll_arrows doi"></span>
			                <span className="m_scroll_arrows trei"></span>
		                </div>
                    </div>
                </a>
            </main>
        </section>
    )
}

export default LandingSection;
