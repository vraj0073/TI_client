import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container, Navbar, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/Testhome1.css";
import saveitlogo from "../Assests/images/saveitlogo.png";

export const Testhome = () => {
  const [user, setUser] = useState();
  const navigator = useNavigate();
  useEffect(() => {
    const u = localStorage.getItem("user");
    if (u !== null) {
      setUser(JSON.parse(u));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigator("/");
  };
  console.log(user);
  return (
    <>
      <Navbar bg="dark">
        <img
          src={saveitlogo}
          width="80"
          height="50"
          alt="Bosch Logo"
          style={{ marginLeft: "1%", cursor: "pointer" }}
          onClick={() => {
            navigator("/");
          }}
        />

        <Container>
          <Row style={{ width: "35%" }}>
            <div className="navheader">
              <Navbar.Brand>
                <Button
                  href="/"
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Home
                </Button>

                <Button
                  href="/donate"
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Donate
                </Button>

                {user?.role == "NGO" && (
                  <Button
                    href="/ngo"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    See Items
                  </Button>
                )}
                {(user?.role == "NGO" || user?.role == "USER") && (
                  <Button
                    href="/recycle"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Recycle Items
                  </Button>
                )}

                {user?.role == "RESTAURANT" && (
                  <Button
                    href="/restaurantfood"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Add Items
                  </Button>
                )}

                {user?.role == "RESTAURANT" && (
                  <Button
                    href="/checkOtp"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Check OTP
                  </Button>
                )}

                {!user && (
                  <>
                    <Button
                      href="/login"
                      style={{
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      Login
                    </Button>

                    <Button
                      href="/register"
                      style={{
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      Register
                    </Button>
                  </>
                )}

                {user && (
                  <Button
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                )}
              </Navbar.Brand>
            </div>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default Testhome;
