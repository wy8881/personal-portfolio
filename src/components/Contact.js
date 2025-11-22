import {useState, useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import connectBackground from "../assets/img/connect_background.svg";
import emailjs from '@emailjs/browser';
import { FiSend } from "react-icons/fi";
import {styled} from "styled-components";

const ContactBoard = styled.section`
    & form {
        position: relative;
        z-index: 2;
        padding: 50px;
        border: 1px solid #e5989b;
        border-radius:  1rem;
        background-color: #f6bd60;
    }
    
    & input, textarea{
        padding: 0;
        margin:1rem;
        border-radius: 0.5rem;
        font-size: 1rem;
    }


    `

const Input = styled.input`
    border: 1px solid ${({invalid}) => invalid ? "#F08983" : "transparent"};
    color: ${({invalid}) => invalid ? "white" : "black"};
    background-color: ${({invalid}) => invalid ? "#EDC8C6" : "white"};
    opacity: ${({disabled}) => disabled ? 0.6 : 1};
    cursor: ${({disabled}) => disabled ? "not-allowed" : "text"};
    pointer-events: ${({disabled}) => disabled ? "none" : "auto"};
`
const Textarea = styled.textarea`
    border: 1px solid ${({invalid}) => invalid ? "#F08983" : "transparent"};
    color: ${({invalid}) => invalid ? "white" : "black"};
    background-color: ${({invalid}) => invalid ? "#EDC8C6" : "white"};
    opacity: ${({disabled}) => disabled ? 0.6 : 1};
    cursor: ${({disabled}) => disabled ? "not-allowed" : "text"};
    pointer-events: ${({disabled}) => disabled ? "none" : "auto"};
`


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
    const [submitted, setSubmitted] = useState(false);
    const [apiKeyLoaded, setApiKeyLoaded] = useState(false);

    // Conditionally load apiKey.json if it exists
    useEffect(() => {
        const loadApiKey = async () => {
            try {
                const key = await import("../config/apiKey.json");
                if (key && key.PUBLIC_KEY) {
                    emailjs.init({
                        publicKey: key.PUBLIC_KEY
                    });
                    setApiKeyLoaded(true);
                }
            } catch (error) {
                setApiKeyLoaded(false);
            }
        };
        loadApiKey();
    }, []);

    const emailInvalid = formDetails.email === "" || !formDetails.email.includes("@") || !formDetails.email.includes(".");
    const messageInvalid = formDetails.message === "";
    const onFormUpdate = (key, value) => {
        // Just update the value in key
        setFormDetails({...formDetails, [key]: value})
    }

    const handleSubmit = () => {
        if (!apiKeyLoaded) {
            return;
        }

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
                disabled={!apiKeyLoaded}
                className={`
                    px-4 py-2 rounded-full 
                    flex items-center gap-2 
                    text-slate-500
                    shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
                    
                    transition-all
                    ${!apiKeyLoaded ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] hover:text-violet-500'}
                `}
                onClick={handleSubmit}
            >
                <FiSend />
                <span>{btnText}</span>
            </button>
        );
    };

    return (
        <ContactBoard id={'contact'}>
            <Container>
                <Row>
                </Row>
                <Row className={"align-items-center"}>
                    <Col md={4} className={"d-none d-md-block"}>
                        <img src={connectBackground} alt="connect_background"/>
                    </Col>
                    <Col md={8}>
                        <h2>Contact Me!</h2>
                        {!apiKeyLoaded && (
                            <div style={{
                                padding: "20px",
                                marginBottom: "20px",
                                backgroundColor: "#ffebee",
                                border: "1px solid #f44336",
                                borderRadius: "0.5rem",
                                color: "#c62828"
                            }}>
                                <p style={{margin: 0, fontWeight: "bold"}}>
                                    Sorry. Email service is not available at the moment. Please find me via LinkedIn or GitHub.
                                </p>
                            </div>
                        )}
                        <form >
                            <Row >
                                <Col >
                                    <Input 
                                        type="text" 
                                        value={formDetails.firstName} 
                                        placeholder="First Name"
                                        disabled={!apiKeyLoaded}
                                        onChange={(e) => onFormUpdate('firstName', e.target.value)}
                                    />
                                </Col>
                                <Col >
                                    <Input 
                                        type="text" 
                                        value={formDetails.lastName} 
                                        placeholder="Last Name"
                                        disabled={!apiKeyLoaded}
                                        onChange={(e) => onFormUpdate('lastName', e.target.value)}
                                    />
                                </Col>
                                <Col >
                                    <Input 
                                        type="email"
                                        invalid={submitted && emailInvalid}
                                        value={formDetails.email}
                                        placeholder="Email"
                                        disabled={!apiKeyLoaded}
                                        onChange={(e) => onFormUpdate('email', e.target.value)}
                                    />
                                </Col>
                            </Row>
                            <Row style={{paddingTop: "1rem"}}>
                                <Col>
                                    <Textarea 
                                        rows="6" 
                                        style={{width: "100%"}}
                                        invalid={submitted && messageInvalid}
                                        value={formDetails.message}
                                        placeholder="Message"
                                        disabled={!apiKeyLoaded}
                                        onChange={(e) => onFormUpdate('message', e.target.value)}
                                    />
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
        </ContactBoard>
    )
}