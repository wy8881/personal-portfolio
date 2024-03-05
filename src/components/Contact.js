import {useState} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import connectBackground from "../assets/img/connect_background.svg";

export const Contact = () => {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [btnText, setBtnText] = useState("Send");
    const [status, setStatus] = useState("");
    const onFormUpdate = (key, value) => {
        // Just update the value in key
        setFormDetails({...formDetails, [key]: value})
    }
    return (
        <section className={"contact"} id={"connect"}>
            <Container>
                <Row>
                </Row>
                <Row className={"align-items-center"}>
                    <Col md={5}>
                        <img src={connectBackground} alt="connect_background"/>
                    </Col>
                    <Col md={7}>
                        <h2>Contact Me!</h2>
                        <form action="">
                            <Row >
                                <Col className={"px-1"}>
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName',e.target.value)}/>
                                </Col>
                                <Col className={"px-1"}>
                                    <input type="text" value={formDetails.firstName} placeholder="Last Name"
                                           onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                </Col>
                                <Col className={"px-1"}>
                                    <input type="email" value={formDetails.firstName} placeholder="Email"
                                           onChange={(e) => onFormUpdate('email', e.target.value)}/>
                                </Col>
                                <Row  style={{paddingTop:"1rem"}}>
                                    <Col>
                                        <textarea rows="6" style={{width:"100%"}}></textarea>
                                        <Button>{btnText}</Button>
                                    </Col>
                                </Row>

                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}