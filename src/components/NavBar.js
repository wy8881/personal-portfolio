import {useState, useEffect, useRef} from "react";
import {Navbar, Container, Nav} from "react-bootstrap"
// import { Github, LinkedinBox, Wordpress } from "react-bootstrap-icons";
import logo from '../assets/img/logo_lion.svg'
import {motion} from "framer-motion";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const SpotlightButton = () => {
        const btnRef = useRef(null);
        const spanRef = useRef(null);

        useEffect(() => {

            const span = spanRef.current;
            const btn = btnRef.current;
            const handleMouseMove = (e) => {
                const { width } = e.target.getBoundingClientRect();
                const offset = e.offsetX;
                const left = `${(offset / width) * 100}%`;


                span.animate({ left }, { duration: 250, fill: "forwards" });
            };

            const handleMouseLeave = () => {
                span.animate(
                    { left: "50%" },
                    { duration: 100, fill: "forwards" }
                );
            };

            btn.addEventListener("mousemove", handleMouseMove);
            btn.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                btn.removeEventListener("mousemove", handleMouseMove);
                btn.removeEventListener("mouseleave", handleMouseLeave);
            };
        }, []);

        return (
            <motion.button
                whileTap={{ scale: 0.9}}
                ref={btnRef}
                className="relative w-full max-w-xs overflow-hidden rounded-full bg-black px-4 py-3 text-lg font-medium text-white"
            >
                <span className="pointer-events-none relative z-10 mix-blend-difference">
                    Contact Me
                </span>
                <span
                    ref={spanRef}
                    className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
                />
            </motion.button>
        );
    };


    return (
        <Navbar expand="lg" className={scrolled? "scrolled": ""}>
            <Container className={"navbar-context"}>
                <Navbar.Brand href="#home">
                    <img src={logo} alt={"logo"} className={"navbar-icon"}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className={"navbar-toggler-icon"}></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/*<Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>*/}
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className={"social-icons"}>
                            <Nav.Link href="https://github.com/wy8881" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-github social-icon-img"></i>                            
                            </Nav.Link>
                            <Nav.Link href="https://www.linkedin.com/in/yi-wang-meow99" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-linkedin social-icon-img"></i>
                            </Nav.Link>
                            <Nav.Link href="https://gravatar.com/wy7382" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-wordpress social-icon-img"></i>
                            </Nav.Link>
                        </div>
                        <div className={"contact-btn"}>
                            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('contact')}>
                                <SpotlightButton />
                            </Nav.Link>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}