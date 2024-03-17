import {Col, Row} from 'react-bootstrap'
export const ProjectCard = ({title, description, link}) => {

    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbox">
                    <a href="#">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </a>
            </div>
        </Col>
    )
}