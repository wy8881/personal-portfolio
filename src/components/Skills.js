import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Col, Container, Row} from "react-bootstrap";
export const Skills = () =>{

    const tech_icons = [
        "java.svg",
        "jupyter.svg",
        "mongodb.svg",
        "python.svg",
        "react-js.svg"
    ]

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
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi aspernatur assumenda aut consequuntur culpa deleniti dolorem dolorum explicabo magnam minus molestias, odit porro recusandae, sed sequi sint, temporibus velit?</p>
                            <Carousel responsive={responsive} infinite={true} className={"skill-slider"}>
                                {tech_icons.map((icon, index) => {
                                    return (
                                        <div className="item" key={index}>
                                            <img src={require(`../assets/img/tech_icon/${icon}`)} alt="Image"/>
                                            <h5>Web Development</h5>
                                        </div>
                                    )
                                })}
                                <div className="item">
                                    <img src="" alt="Image"/>
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src="" alt="Image"/>
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src="" alt="Image"/>
                                    <h5>Web Development</h5>
                                </div><div className="item">
                                    <img src="" alt="Image"/>
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src="" alt="Image"/>
                                    <h5>Web Development</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}