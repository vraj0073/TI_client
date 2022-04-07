import React from "react";
import NavigationBar from "./NavigationBar";
import { Row, Card, Container, Button } from "react-bootstrap";
import EmailService from "../services/email-service";
import "../css/Ngo.css";

function Ngo() {
  const foodwastage = [
    {
      name: "Restaurant1",
      address: "1709 Gafton Street",
      Emailid: "fijoha9533@royins.com",
      contactno: "9029895572",
      itemname: "Bottleguard",
      weight: "1.2kg",
    },
    {
      name: "Restaurant2",
      address: "1709 Gafton Street",
      Emailid: "fijoha9533@royins.com",
      contactno: "9029895572",
      itemname: "Bottleguard",
      weight: "1.2kg",
    },
    {
      name: "Restaurant3",
      address: "1709 Gafton Street",
      Emailid: "fijoha9533@royins.com",
      contactno: "9029895572",
      itemname: "Bottleguard",
      weight: "1.2kg",
    },
    {
      name: "Restaurant4",
      address: "1709 Gafton Street",
      Emailid: "fijoha9533@royins.com",
      contactno: "9029895572",
      itemname: "Bottleguard",
      weight: "1.2kg",
    },
    {
      name: "Restaurant5",
      address: "1709 Gafton Street",
      Emailid: "fijoha9533@royins.com",
      contactno: "9029895572",
      itemname: "Bottleguard",
      weight: "1.2kg",
    },
    {
      name: "Restaurant6",
      address: "1709 Gafton Street",
      Emailid: "fijoha9533@royins.com",
      contactno: "9029895572",
      itemname: "Bottleguard",
      weight: "1.2kg",
    },
    {
      name: "Restaurant7",
      address: "1709 Gafton Street",
      Emailid: "fijoha9533@royins.com",
      contactno: "9029895572",
      itemname: "Bottleguard",
      weight: "1.2kg",
    },
    {
      name: "Restaurant8",
      address: "1709 Gafton Street",
      Emailid: "fijoha9533@royins.com",
      contactno: "9029895572",
      itemname: "Bottleguard",
      weight: "1.2kg",
    },
  ];

  const handleFoodAccept = (foodwaste) => {
    EmailService.sendEmail(foodwaste);
  };
  return (
    <Container className="mt-5">
      <Row className="my-1">
        <NavigationBar />
      </Row>
      <Row className="mt-10">
        {foodwastage &&
          foodwastage.map((foodwaste) => (
            <div className="col-lg-4 ml-4">
              <Card
                border="shadow-lg p-3 mb-5 bg-body rounded primary border-2"
                className="p-2 cardngo"
              >
                <Card.Body>
                  <Card.Title>{foodwaste.name}</Card.Title>
                  <Card.Text>Address: {foodwaste.address}</Card.Text>
                  <Card.Text>Emailid: {foodwaste.Emailid}</Card.Text>
                  <Card.Text>Contact number: {foodwaste.contactno}</Card.Text>
                  <Card.Text>Item name: {foodwaste.itemname}</Card.Text>
                  <Card.Text>Qantity: {foodwaste.weight}</Card.Text>
                  <Button
                    onClick={handleFoodAccept(foodwaste)}
                    className="float-end"
                    variant="success"
                  >
                    Accept
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
      </Row>
    </Container>
  );
}

export default Ngo;
