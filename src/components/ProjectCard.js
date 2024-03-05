import {Col, Row} from 'react-bootstrap'
export const ProjectCard = ({title, description, link}) => {

    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbox">
                <div className="proj-tx">
                    <Row>
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </Row>
                    <Row>
                        <a  href={link}>Go to Github!</a>
                    </Row>

                </div>
            </div>
        </Col>
    )
}