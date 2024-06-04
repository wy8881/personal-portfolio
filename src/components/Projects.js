import {Col, Container, Row, Tab, Nav} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import {useState} from "react";

export const Projects = () => {
    const [activeTab, setActiveTab] = useState("first");
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda, dolorum est eum illum
                            modi pariatur perferendis porro quaerat quasi quo rem repudiandae sunt temporibus
                            voluptates. Adipisci culpa nemo repudiandae!</p>
                    </Col>
                </Row>
                <div id ="tab-button" className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button"
                            className={`btn btn-outline-primary ${activeTab === 'first' ? 'active': ''}`}
                            onClick={() => setActiveTab('first')}><span>Tab 1</span></button>
                    <button type="button"
                            className={`btn btn-outline-primary  ${activeTab === 'second' ? 'active': ''}`}
                            onClick={() => setActiveTab('second')}><span>Tab 2</span></button>
                </div>
                <div id="tab-content">
                    {
                        activeTab === 'first' ?
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
                            :
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis deserunt dicta eius exercitationem, fugiat illum in itaque iusto, laborum molestias praesentium quam quia ratione reiciendis rem repudiandae veritatis voluptate.</p>
                    }
                </div>
            </Container>

        </section>
    )
}