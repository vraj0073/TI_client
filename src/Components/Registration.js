import React, { useState } from "react";
import { Col, Container, Form, InputGroup, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/Registration.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./NavigationBar";
import background from "../Assests/images/login.jpg";
import backgroundcontainer from "../Assests/images/loginback.jpg";
import axios from "axios";
import Testhome from "./Testhome";

export const Registration = () => {
  const history = useNavigate();
  const emailRegex = /\S+@\S+\.\S+/;
  const nameRegex = /^[A-Za-z ]+$/;
  const passwordRegex = /^[-@.\/#&+\w\s]*$/;
  const phoneRegex = /^[0-9]*$/;
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [Phonemessage, setPhoneMessage] = useState("");
  const [Emailmessage, setEmailMessage] = useState("");
  const [Passwordmessage, setPasswordMessage] = useState("");
  const [Confirmmessage, setConfirmMessage] = useState("");
  const [Rolemessage, setRoleMessage] = useState("");
  const [Firstmessage, setFirstMessage] = useState("");
  const [Role, setRole] = useState();
  const [Phonenumber, setPhonenumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [flag, setflag] = useState(1);

  const validsubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      alert("Required field empty");
    } else if (flag === 0) {
      e.preventDefault();
      setValidated(true);
      axios
        .post("https://tiserverb00.herokuapp.com/signup", {
          email: Email,
          password: Password,
          name: name,
          phoneNumber: Phonenumber,
          address: address,
          role: Role,
        })
        .then(function (response) {
          console.log(response);
          alert("Registration successful. Please Login to access our website.");
          history("/login");
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("Required field empty");
    }
  };

  const validatename = (e) => {
    const firstname = e.target.value;
    if (nameRegex.test(firstname)) {
      setname(firstname);
      setFirstMessage(" ");
    } else {
      setFirstMessage("only letters are permitted!");
    }
  };

  const validemail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setEmail(email);
      setEmailMessage(" ");
    } else {
      setEmailMessage("Please enter a valid email!");
    }
  };
  const validatephone = (e) => {
    const phone = e.target.value;
    if (phoneRegex.test(phone) && phone.length > 9) {
      setPhonenumber(phone);
      setPhoneMessage(" ");
    } else {
      setPhoneMessage("Please entre valid mobile number!");
    }
  };
  const validpassword = (e) => {
    var password = e.target.value;
    window.pass = password;
    if (passwordRegex.test(password) && password.length >= 8) {
      setPasswordMessage(" ");
      setPassword(password);
    } else {
      setPasswordMessage("Invalid Password");
    }
  };

  const validateRole = (e) => {
    var Role = e.target.value;

    if (Role == "NGO") {
      setRole(Role);
      setflag(0);
    } else if (Role == "RESTAURANT") {
      setRole(Role);
      setflag(0);
    } else {
      setRoleMessage("Select Role!");
      alert("select role");
    }
  };
  const validateaddress = (e) => {
    const address = e.target.value;
    setaddress(address);
  };
  const validconfim = (e) => {
    const confirmPassword = e.target.value;
    if (confirmPassword === window.pass) {
      setConfirmMessage("Password Match");
    } else {
      setConfirmMessage("confirm password does not match!");
    }
  };

  return (
    <>
      <Testhome />
      <Row
        style={{
          backgroundImage: `url(${backgroundcontainer})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Col>
          <h1
            style={{
              color: "orange",
              fontFamily: "serif",
              paddingTop: "30%",
              paddingLeft: "10%",
            }}
          >
          Welcome
          </h1>
          <h1
            style={{ color: "white", fontFamily: "serif", paddingLeft: "10%" }}
          >
            To SaveIt
          </h1>
        </Col>
        <Col>
          <div>
            <Container
              className="registrationcontainer"
              style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <Form
                noValidate
                validated={validated}
                className="registrationbox"
                onSubmit={validsubmit}
              >
                <h1
                  id="registrationheading"
                  style={{ color: "white", fontFamily: "serif" }}
                >
                  Registration
                </h1>
                <div>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{ color: "white" }}>
                      User Name
                    </Form.Label>

                    <Form.Control
                      required
                      type="text"
                      onChange={validatename}
                      placeholder="Name"
                      autoComplete="off"
                    />
                    <small
                      id="passwordHelpBlock"
                      className="error-label form-text text-muted"
                    >
                      {Firstmessage}
                    </small>
                  </Form.Group>
                </div>
                <br></br>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{ color: "white" }}>
                    Email Address :{" "}
                  </Form.Label>
                  <Form.Control
                    type="email"
                    onChange={validemail}
                    placeholder="Enter email"
                    required
                  />
                  <div>
                    <small
                      id="passwordHelpBlock"
                      className="error-label form-text text-muted"
                    >
                      {Emailmessage}
                    </small>
                  </div>
                </Form.Group>
                <br></br>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label style={{ color: "white" }}>
                    Password :{" "}
                  </Form.Label>
                  <Form.Control
                    required
                    onChange={validpassword}
                    type="password"
                    placeholder="Password"
                  />
                  <div>
                    <small
                      id="passwordHelpBlock"
                      className="error-label form-text text-muted"
                    >
                      {Passwordmessage}
                    </small>
                  </div>
                </Form.Group>
                <br></br>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label style={{ color: "white" }}>
                    Confirm Password :{" "}
                  </Form.Label>
                  <Form.Control
                    required
                    type="password"
                    onChange={validconfim}
                    placeholder="Password"
                  />
                  <div>
                    <small
                      id="passwordHelpBlock"
                      className="error-label form-text text-muted"
                    >
                      {Confirmmessage}
                    </small>
                  </div>
                </Form.Group>
                <br></br>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label style={{ color: "white" }}>
                    Phone Number :{" "}
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    onChange={validatephone}
                    placeholder="Phone Number"
                  />
                  <div>
                    <small
                      id="passwordHelpBlock"
                      className="error-label form-text text-muted"
                    >
                      {Phonemessage}
                    </small>
                  </div>
                </Form.Group>
                <br></br>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label style={{ color: "white" }}> Address</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows="3"
                    placeholder="Address"
                    onChange={validateaddress}
                  />
                </Form.Group>
                <br></br>
                <div style={{ color: "white" }}>
                  Register as : {""}
                  <select
                    required
                    onChange={validateRole}
                    defaultValue="Select Role"
                  >
                    <option required defaultValue>
                      Select Role
                    </option>
                    <option required value="RESTAURANT">
                      Restaurant
                    </option>
                    <option required value="NGO">
                      NGO
                    </option>
                  </select>
                </div>

                <button id="registrationbutton" type="submit">
                  Submit
                </button>
              </Form>
            </Container>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Registration;
