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
        <section className="skills" id={"skills"} style={{paddingTop:"10em"}}>
            <Container>
                <Row>
                    <Col>
                        <div className="skill-box">
                            <h2>Skills</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium animi architecto, dolor doloremque est officia rem temporibus. Consequuntur dignissimos dolorum facere magnam molestias neque possimus repellendus rerum! Harum, officiis.</p>
                            <Carousel responsive={responsive} infinite={true} className={"skill-slider"}>
                                <Container className="item">
                                    <Row>
                                        <Col><ShakeLittle><img src={reactIcon} alt="react" className={"skill_image"}/></ShakeLittle></Col>
                                    </Row>
                                    <Row><h5>Front End</h5></Row>
                                </Container>
                                <Container className="item">
                                    <Row >
                                        <Col><ShakeLittle><img src={javaIcon} alt="java" className={"skill_image"}/></ShakeLittle></Col>
                                        <Col><ShakeLittle><img src={pythonIcon} alt="python" className={"skill_image"}/></ShakeLittle></Col>
                                        <Col><ShakeLittle><img src={springBootIcon} alt="spring boot" className={"skill_image"}/></ShakeLittle></Col>
                                    </Row>
                                    <Row><h5>Back End</h5></Row>
                                </Container>
                                <Container className="item">
                                    <Row>
                                        <Col><ShakeLittle><img src={junitIcon} alt="junit5"
                                                               className={"skill_image"}/></ShakeLittle></Col>
                                    </Row>
                                    <Row><h5>Test</h5></Row>
                                </Container>
                                <Container className="item">
                                    <Row>
                                        <Col><ShakeLittle><img src={intellijIcon} alt="intellij" className={"skill_image"}/></ShakeLittle></Col>
                                        <Col><ShakeLittle><img src={jupyterIcon} alt="jupyter" className={"skill_image"}/></ShakeLittle></Col>
                                    </Row>
                                    <Row><h5>Development Platform</h5></Row>
                                </Container>
                                <Container className="item">
                                    <Row>
                                        <Col><ShakeLittle><img src={mongodbIcon} alt="mongodb" className={"skill_image"}/></ShakeLittle></Col>
                                        <Col><ShakeLittle><img src={mysqlIcon} alt="mysql" className={"skill_image"}/></ShakeLittle></Col>
                                    </Row>
                                    <Row><h5>Database</h5></Row>

                                </Container>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}