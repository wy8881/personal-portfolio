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
export const Skills = () =>{


    const responsive = {
        superLargeDesktop: {

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
                            <h1>Skills</h1>
                            <h3>I'm passionate about coding and possess skills in both front-end and back-end development!</h3>
                            <Carousel responsive={responsive} infinite={true} className={"skill-slider"}>
                                <Container className="skills-slide">
                                    <Row xs={2} sm={3} md={4} lg={5} className="justify-content-center">
                                        <Col className="d-flex justify-content-center " >
                                            <img src={typeScriptIcon} alt="typescript" className="skill_image" />
                                        </Col>
                                        <Col className="d-flex justify-content-center">
                                            <img src={reactIcon} alt="react" className="skill_image" />
                                        </Col>
                                        <Col className="d-flex justify-content-center">
                                            <img src={angularIcon} alt="angular" className="skill_image" />
                                        </Col>
                                    </Row>
                                    <Row className="text-center"><h4>Front End</h4></Row>
                                </Container>

                                <Container className="skills-slide">
                                    <Row xs={2} sm={3} md={4} lg={5} className="justify-content-center">
                                        <Col className="d-flex justify-content-center">
                                            <img src={springBootIcon} alt="spring boot" className="skill_image" />
                                        </Col>
                                        <Col className="d-flex justify-content-center">
                                            <img src={pythonIcon} alt="python" className="skill_image" />
                                        </Col>
                                    </Row>
                                    <Row className="text-center"><h4>Back End</h4></Row>
                                </Container>

                                <Container className="skills-slide">
                                    <Row xs={2} sm={3} md={4} lg={5} className="justify-content-center">
                                        <Col className="d-flex justify-content-center">
                                            <img src={junitIcon} alt="junit5" className="skill_image" />
                                        </Col>
                                    </Row>
                                    <Row className="text-center"><h4>Test</h4></Row>
                                </Container>

                                <Container className="skills-slide">
                                    <Row xs={2} sm={3} md={4} lg={5} className="justify-content-center">
                                        <Col className="d-flex justify-content-center">
                                            <img src={intellijIcon} alt="intellij" className="skill_image" />
                                        </Col>
                                        <Col className="d-flex justify-content-center">
                                            <img src={jupyterIcon} alt="jupyter" className="skill_image" />
                                        </Col>
                                    </Row>
                                    <Row className="text-center"><h4>Platform</h4></Row>
                                </Container>

                                <Container className="skills-slide">
                                    <Row xs={2} sm={3} md={4} lg={5} className="justify-content-center">
                                        <Col className="d-flex justify-content-center">
                                            <img src={mongodbIcon} alt="mongodb" className="skill_image" />
                                        </Col>
                                        <Col className="d-flex justify-content-center ">
                                            <img src={mysqlIcon} alt="mysql" className="skill_image" />
                                        </Col>
                                    </Row>
                                    <Row className="text-center"><h4>Database</h4></Row>
                                </Container>

                            </Carousel>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}