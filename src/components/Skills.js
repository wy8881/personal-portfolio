import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import {Col, Container, Row} from "react-bootstrap";
import javaIcon from "../assets/img/tech_icon/java.svg";
import jupyterIcon from "../assets/img/tech_icon/jupyter.svg";
import mongodbIcon from "../assets/img/tech_icon/mongodb.svg";
import pythonIcon from "../assets/img/tech_icon/python.svg";
import reactIcon from "../assets/img/tech_icon/react-js.svg";
import junitIcon from "../assets/img/tech_icon/junit5.png";
import mysqlIcon from "../assets/img/tech_icon/mysql.svg";
import springBootIcon from "../assets/img/tech_icon/springboot.svg";
import intellijIcon from "../assets/img/tech_icon/intelliJ.svg";
import typeScriptIcon from "../assets/img/tech_icon/typescript.svg";
import angularIcon from "../assets/img/tech_icon/angular.svg";
import {ShakeLittle} from "reshake";

export const Skills = () =>{


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skills" id={"skills"}>
            <Container>
                <Row>
                    <Col>
                        <Col className="skill-box">
                            <h2>Skills</h2>
                            <p>I'm passionate about coding and possess skills in both front-end and back-end development!</p>
                            <Carousel responsive={responsive} infinite={true} className={"skill-slider"}>
                                <Container className="skills-slide">
                                    <Row className={"align-items-center"}>
                                        <Col>
                                            <div className="skill-item">
                                                <img src={javaIcon} alt="java" className={"skill_image"}/></div>
                                        </Col>
                                        <Col>
                                            <div className="skill-item">
                                                <img src={pythonIcon} alt="python" className={"skill_image"}/></div>
                                        </Col>
                                        <Col>
                                            <div className="skill-item">
                                                <img src={typeScriptIcon} alt="typescript" className={"skill_image"} style={{maxWidth:"60%"}}/></div>
                                        </Col>
                                    </Row>
                                    <Row><h5>Language</h5></Row>
                                </Container>
                                <Container className="skills-slide">
                                    <Row>
                                        <Col>
                                            <div className="skill-item">
                                                <img src={reactIcon} alt="react" className={"skill_image"}/>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="skill-item">
                                                <img src={angularIcon} alt="angular" className={"skill_image"}/>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row><h5>Front End</h5></Row>
                                </Container>
                                <Container className="skills-slide">
                                    <Row >
                                        <Col>
                                            <div className="skill-item"><img src={javaIcon} alt="java" className={"skill_image"}/></div>
                                        </Col>
                                        <Col>
                                            <div className="skill-item"><img src={springBootIcon} alt="spring boot" className={"skill_image"}/></div>
                                        </Col>
                                        <Col>
                                            <div className="skill-item"><img src={pythonIcon} alt="python" className={"skill_image"}/></div>
                                        </Col>
                                    </Row>
                                    <Row><h5>Back End</h5></Row>
                                </Container>
                                <Container className="skills-slide">
                                    <Row>
                                        <div className="skill-item">
                                            <img src={junitIcon} alt="junit5" className={"skill_image"}/>
                                        </div>
                                    </Row>
                                    <Row><h5>Test</h5></Row>
                                </Container>
                                <Container className="skills-slide">
                                    <Row>
                                        <Col>
                                            <div className="skill-item"><img src={intellijIcon} alt="intellij" className={"skill_image"}/></div>
                                        </Col>
                                        <Col>
                                            <div className="skill-item"><img src={jupyterIcon} alt="jupyter" className={"skill_image"}/></div>
                                        </Col>
                                    </Row>
                                    <Row><h5>Development Platform</h5></Row>
                                </Container>
                                <Container className="skills-slide">
                                    <Row className={"align-items-center"}>
                                        <Col>
                                            <div className="skill-item"><img src={mongodbIcon} alt="mongodb" className={"skill_image"}/></div>
                                        </Col>
                                        <Col>
                                            <div className="skill-item"><img src={mysqlIcon} alt="mysql" className={"skill_image"}/></div>
                                        </Col>
                                    </Row>
                                    <Row><h5>Database</h5></Row>

                                </Container>
                            </Carousel>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}