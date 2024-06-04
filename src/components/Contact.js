import {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import connectBackground from "../assets/img/connect_background.svg";
import emailjs from '@emailjs/browser';
import { FiSend } from "react-icons/fi";
import key from "../config/apiKey.json";
import {styled} from "styled-components";

const Input = styled.input`
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid ${({invalid}) => invalid ? "#F08983" : "transparent"};
    color: ${({invalid}) => invalid ? "white" : "black"};
    background-color: ${({invalid}) => invalid ? "#EDC8C6" : "white"};
`
const Textarea = styled.textarea`
    border-radius: 0.5rem;
    padding: 0.5rem;
    border: 1px solid ${({invalid}) => invalid ? "#F08983" : "transparent"};
    color: ${({invalid}) => invalid ? "white" : "black"};
    background-color: ${({invalid}) => invalid ? "#EDC8C6" : "white"};`


export const Contact = () => {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    }



    emailjs.init({
        publicKey: key.PUBLIC_KEY
    })

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [btnText, setBtnText] = useState("Send");
    const [status, setStatus] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const emailInvalid = formDetails.email === "" || !formDetails.email.includes("@") || !formDetails.email.includes(".");
    const messageInvalid = formDetails.message === "";
    const onFormUpdate = (key, value) => {
        // Just update the value in key
        setFormDetails({...formDetails, [key]: value})
    }

    const handleSubmit = () => {
        setStatus("sending")
        setBtnText("Sending...");
        setSubmitted(true);
        if(emailInvalid || messageInvalid) {
            setBtnText("Send");
            setStatus("failed");
        }
        else {
            emailjs.send('personal_portfolio', 'template_c5ka45w', formDetails)
                .then(() => {
                    setFormDetails(formInitialDetails);
                    console.log(formDetails)
                    setBtnText("Send");
                    setStatus("success");
                }, () => {
                    setBtnText("Failed");
                    setStatus("failed");
                });
        }

    }

    const NeumorphismButton = () => {
        return (
            <button
                type={"button"}
                className={`
                    px-4 py-2 rounded-full 
                    flex items-center gap-2 
                    text-slate-500
                    shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
                    
                    transition-all
            
                    hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
                    hover:text-violet-500
                `}
                onClick={handleSubmit}
            >
                <FiSend />
                <span>{btnText}</span>
            </button>
        );
    };

    return (
        <section className={"contact"} id={"contact"}>
            <Container>
                <Row>
                </Row>
                <Row className={"align-items-center"}>
                    <Col md={5}>
                        <img src={connectBackground} alt="connect_background"/>
                    </Col>
                    <Col md={7}>
                        <h2>Contact Me!</h2>
                        <form className={"contactForm"}>
                            <Row>
                                <Col className={"px-1"}>
                                    <Input type="text" value={formDetails.firstName} placeholder="First Name"
                                           onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                                </Col>
                                <Col className={"px-1"}>
                                    <Input type="text" value={formDetails.lastName} placeholder="Last Name"
                                           onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                </Col>
                                <Col className={"px-1"}>
                                    <Input type="email"
                                           invalid={submitted && emailInvalid}
                                           value={formDetails.email}
                                           placeholder="Email"
                                           onChange={(e) => onFormUpdate('email', e.target.value)}/>
                                </Col>
                            </Row>
                            <Row style={{paddingTop: "1rem"}}>
                                <Col>
                                    <Textarea rows="6" style={{width: "100%"}}
                                              invalid={submitted && messageInvalid}
                                              value={formDetails.message}
                                              placeholder="Message"
                                              onChange={(e) => onFormUpdate('message', e.target.value)}></Textarea>

                                </Col>
                            </Row>
                            <div className=" flex items-center justify-center">
                                <NeumorphismButton/>
                            </div>
                            <Row>
                                <Col>
                                    {status === "success" &&
                                        <p style={{color: "green"}}>Thank you for contacting me!</p>}
                                    {status === "failed" &&
                                        <p style={{color: "red"}}>Sorry.....I don't get you message</p>}
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}