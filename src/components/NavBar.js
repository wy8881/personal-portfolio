import {useState, useEffect, useRef} from "react";
import {Navbar, Container, Nav} from "react-bootstrap"
import insIcon from '../assets/img/ins_icon.svg'
import linkedinIcon from '../assets/img/linkedin_icon.svg'
import emailIcon from '../assets/img/email_icon.svg'
import githubIcon from '../assets/img/github_icon.svg'
import ticketIcon from '../assets/img/tickets_icon.svg'
import {motion} from "framer-motion";

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
                whileTap={{ scale: 0.985 }}
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
                            <a href="https://github.com/wy8881"><img src={githubIcon} alt=""/></a>
                            <a href="#"><img src={emailIcon} alt=""/></a>
                            <a href="#"><img src={insIcon} alt=""/></a>
                            <a href="#"><img src={linkedinIcon} alt=""/></a>
                        </div>
                        <div className={"contact-btn"}>
                            <SpotlightButton />
                        </div>

                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

