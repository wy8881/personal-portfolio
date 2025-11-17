import {Col, Row} from "react-bootstrap";
import {motion} from "framer-motion";
import {FerrisWheel} from "./FerrisWheel";
import {useEffect, useState, useCallback, useMemo} from "react";

const ANIMATION_CONFIG = {
    initialX: -300,
    animateX: -110,
    duration: 2,
    delay: 0.2,
    hoverScale: 1.1,
    hoverOpacity: 0.4,
};

const TYPING_CONFIG = {
    initialSpeed: 5,
    pauseDuration: 2000,
    resumeSpeed: 500,
    speedMultiplier: 2,
};

const TEXT_OPTIONS = [
    'Master of Computer Science Graduate',
    'creative',
    'energetic',
    'passionate'
];

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [typingSpeed, setTypingSpeed] = useState(TYPING_CONFIG.initialSpeed);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const tick = useCallback(() => {
        const currentIndex = loopNum % TEXT_OPTIONS.length;
        const fullText = TEXT_OPTIONS[currentIndex];
        
        const updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);
        
        setText(updatedText);

        if (isDeleting) {
            setTypingSpeed(prevSpeed => prevSpeed / TYPING_CONFIG.speedMultiplier);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setTypingSpeed(TYPING_CONFIG.pauseDuration);
        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(prevNum => prevNum + 1);
            setTypingSpeed(TYPING_CONFIG.resumeSpeed);
        }
    }, [loopNum, isDeleting, text]);

    useEffect(() => {
        const ticker = setTimeout(tick, typingSpeed);
        return () => clearTimeout(ticker);
    }, [tick, typingSpeed]);

    const getResponsiveX = useCallback((baseValue) => {
        const scaleFactor = windowWidth / 1920;
        return baseValue * Math.max(0.3, Math.min(1.2, scaleFactor));
    }, [windowWidth]);

    const headingAnimationProps = useMemo(() => ({
        initial: { x: getResponsiveX(ANIMATION_CONFIG.initialX) },
        animate: { x: getResponsiveX(ANIMATION_CONFIG.animateX) },
        transition: {
            duration: ANIMATION_CONFIG.duration,
            delay: ANIMATION_CONFIG.delay,
        },
        whileHover: {
            scale: ANIMATION_CONFIG.hoverScale,
            opacity: ANIMATION_CONFIG.hoverOpacity,
        },
    }), [getResponsiveX]);

    return (
        <section className="banner" id="home">
            <Row className="justify-content-center">
                <Col xs={6} md={6} xl={6} style={{ maxWidth: "50%" }}>
                    <div className="intro-box">
                        <motion.h1 {...headingAnimationProps}>
                            Hi I'm Yi
                        </motion.h1>
                        <motion.h1 {...headingAnimationProps}>
                            Welcome to my Website
                        </motion.h1>
                        <h1 className="intro-msg">I am {text}</h1>
                    </div>
                </Col>
                <Col xs={6} md={6} xl={6}>
                    <FerrisWheel />
                </Col>
            </Row>
        </section>
    );
};