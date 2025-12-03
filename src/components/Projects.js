import {Col, Container, Row} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import {useState} from "react";

export const Projects = () => {
    const [activeTab] = useState("first");
    const projects = [
        {
            title: "E-Voting System",
            description: "A secure online voting app built with React, Spring Boot, and MongoDB. Users can log in, view elections, and cast a single verified vote. Admin and Delegate roles manage the election lifecycle. Fully deployed with Vercel, Railway, Cloudflare, and custom domains.",
            link: "https://voting.wyprojects.com/",
        },
        {
            title: "Recipe Book",
            description: "A recipe app made by Angular. Users can add, edit, delete recipes and ingredients. The app also has a shopping list feature.",
            link: "https://wy8881.github.io/RecipeBook/recipes",
        },
        {
            title: "Tic Tac Toe Game",
            description: "An engaging Tic-Tac-Toe game built using React. This game allows two players to compete against each other by taking turns to mark their symbols (X or O) in a 3x3 grid. The game automatically determines the winner or declares a draw when all the cells are filled without any player winning.",
            link: "https://wy8881.github.io/tic-tac-toe-game/",
        },
    ]
    return(
        <section className={"project"} id={"projects"}>
            <Container>
                <Row>
                    <Col>
                        <h1>Projects</h1>
                        <h3>I have built several projects as part of my studies. Check them out below!</h3>
                    </Col>
                </Row>
                <div id ="tab-button" className="btn-group" role="group" aria-label="Basic outlined example">
                    {/*<button type="button"*/}
                    {/*        className={`btn btn-outline-primary ${activeTab === 'first' ? 'active': ''}`}*/}
                    {/*        onClick={() => setActiveTab('first')}><span>Tab 1</span></button>*/}
                    {/*<button type="button"*/}
                    {/*        className={`btn btn-outline-primary  ${activeTab === 'second' ? 'active': ''}`}*/}
                    {/*        onClick={() => setActiveTab('second')}><span>Tab 2</span></button>*/}
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