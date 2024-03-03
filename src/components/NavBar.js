import {useState, useEffect} from "react";
import {Navbar, Container, Nav} from "react-bootstrap"
import insIcon from '../assets/img/ins_icon.svg'
import linkedinIcon from '../assets/img/linkedin_icon.svg'
import emailIcon from '../assets/img/email_icon.svg'
import githubIcon from '../assets/img/github_icon.svg'
import logoIcon from '../assets/img/logo.svg'
import ticketIcon from '../assets/img/tickets_icon.svg'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.srollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            window.addEventListener("scroll", onScroll);

            return () => window.removeEventListener("scroll", onScroll)
        }
    })

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled? "scrolled": ""}>
            <Container className={"navbar-context"}>
                <Navbar.Brand href="#home">
                    <img src={ticketIcon} alt={"logo"} className={"navbar-icon"}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className={"navbar-toggler-icon"}></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className={"social-icon"}>
                            <a href="#"><img src={githubIcon} alt=""/></a>
                            <a href="#"><img src={emailIcon} alt=""/></a>
                            <a href="#"><img src={insIcon} alt=""/></a>
                            <a href="#"><img src={linkedinIcon} alt=""/></a>
                        </div>
                        {/*<div>*/}
                            <button className={"vvd"} onClick={() => console.log("connect")}>Let's connect</button>
                        {/*</div>*/}

                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

