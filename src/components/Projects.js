import {Col, Container, Row, Tab, Nav} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
export const Projects = () => {
    const projects = [
        {
            title: "Project 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda, dolorum est eum illum modi pariatur perferendis porro quaerat quasi quo rem repudiandae sunt temporibus voluptates. Adipisci culpa nemo repudiandae!",
            link: "https://www.google.com",
        },
        {
            title: "Project 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda, dolorum est eum illum modi pariatur perferendis porro quaerat quasi quo rem repudiandae sunt temporibus voluptates. Adipisci culpa nemo repudiandae!",
            link: "projImg1",
        },
        {
            title: "Project 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda, dolorum est eum illum modi pariatur perferendis porro quaerat quasi quo rem repudiandae sunt temporibus voluptates. Adipisci culpa nemo repudiandae!",
            link: "projImg1",
        },
        {
            title: "Project 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda, dolorum est eum illum modi pariatur perferendis porro quaerat quasi quo rem repudiandae sunt temporibus voluptates. Adipisci culpa nemo repudiandae!",
            link: "projImg1",
        },
    ]
    return(
        <section className={"project"} id={"projects"}>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda, dolorum est eum illum modi pariatur perferendis porro quaerat quasi quo rem repudiandae sunt temporibus voluptates. Adipisci culpa nemo repudiandae!</p>
                    </Col>
                </Row>
                <Tab.Container id="project-tabs" defaultActiveKey="first">
                    <Row>
                        <Col sm={12}>
                            <Nav variant="pills" className="justify-content-center">
                                <Nav.Item className={"tab"}>
                                    <Nav.Link eventKey="first" >Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className={"tab"}>
                                    <Nav.Link eventKey="second" >Tab 2</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>

                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return(
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />

                                                )
                                            })
                                        }
                                    </Row>

                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis deserunt dicta eius exercitationem, fugiat illum in itaque iusto, laborum molestias praesentium quam quia ratione reiciendis rem repudiandae veritatis voluptate.</Tab.Pane>
                                <Tab.Pane eventKey="second">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi, dolor eius eligendi ex expedita iure maxime nam nisi non optio quae, quis quisquam ratione rerum totam velit voluptas voluptate!</Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>

        </section>
    )
}