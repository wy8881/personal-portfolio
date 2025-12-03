import {Col} from 'react-bootstrap'
import {styled} from "styled-components";
export const ProjectCard = ({title, description, link}) => {

    const ProjectBox = styled.div`
        border-radius: 40px;
        background-color: #023e8a;
        padding: 1rem 1rem;
        margin: 20px;
        height: 100%;
        text-align: left;
        
        & a {
            text-decoration: none;
            display: block;
        }
        
        & h4, span {
            color: #e9edc9;
            text-align: left;
        }
        
        & span {
            display: block;
        }
        
        &:hover {
            background-color: midnightblue;
            transform: scale(1.1);
            transition: 0.5s; 
        }
    `

    return(
        <Col sm={6} md={4}>
            <ProjectBox>
                    <a href={link}>
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </a>
            </ProjectBox>
        </Col>
    )
}