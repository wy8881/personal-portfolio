import {Col, Container, Row} from "react-bootstrap";
import {motion} from "framer-motion";
import {FerrisWheel} from "./FerrisWheel";
import {useEffect, useState} from "react";
import {Cursor} from "./Cursor";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Adelaide Uni Student','creative' ,'energetic', 'passionate']
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(5);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(()=> {
            tick();
        }, delta)

        return () => {
            clearInterval(ticker)
        }

    },[text]);

    const tick = () => {
        let i = loopNum% toRotate.length;

        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);
        setText(updatedText);

        if(isDeleting) {
            setDelta(preDelta=>preDelta/2)
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500)
        }
    }

    return (
        <section className={"banner"} id={"home"} >
                <Row className={"justify-content-center"}>
                    <Col xs={6} md={6} xl={6} style={{maxWidth:"50%"}}>
                        <div className={"intro-box"}>
                            <motion.h1
                                initial={{x: -300, y: -80}}
                                animate={{x: -100}}
                                transition={{
                                    duration: 2,
                                    delay: 0.2
                                }}
                                whileHover={{scale: 1.2, opacity: 0.4}}
                            >
                                Hi I'm Yi
                            </motion.h1>
                            <motion.h1
                                initial={{x: -300, y: -80}}
                                animate={{x: -100}}
                                transition={{
                                    duration: 2,
                                    delay: 0.2
                                }}
                                whileHover={{scale: 1.2, opacity: 0.4}}
                            >
                                Welcome to my Portfolio
                            </motion.h1>
                            <h1 className={"intro-msg"}>I am {text}</h1>
                        </div>


                    </Col>
                    <Col xs={6} md={6} xl={6}>
                        <FerrisWheel/>
                    </Col>
                </Row>
        </section>
    )
}