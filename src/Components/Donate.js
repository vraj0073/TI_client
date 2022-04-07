import { useState, React } from "react";
import { Form, Button } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import Testhome from "./Testhome";
const axios = require("axios");

const DEF_ITEM_DETAILS = {
  Name: "",
  address: "",
  phoneNumber: "",
  email: "",
  itemName:"",
  timeOfVisit: ""
};

const Donate = () => {
  const [inputFoodDetails, setInputFoodDetails] = useState(DEF_ITEM_DETAILS);

  const inputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "restaurantName":
        setInputFoodDetails({
          ...inputFoodDetails,
          [name]: value,
        });
        break;

      case "address":
        setInputFoodDetails({
          ...inputFoodDetails,
          [name]: value,
        });
        break;

      case "phoneNumber":
        setInputFoodDetails({
          ...inputFoodDetails,
          [name]: value,
        });
        break;

      case "email":
        setInputFoodDetails({
          ...inputFoodDetails,
          [name]: value,
        });
        break;

      case "itemName":
        setInputFoodDetails({
          ...inputFoodDetails,
          [name]: value,
        });
        break;

      case "weight":
        setInputFoodDetails({
          ...inputFoodDetails,
          [name]: value,
        });
        break;

      default:
        break;
    }
  };

  const handlePropertySubmit = (e) => {
    e.preventDefault();

    console.log(inputFoodDetails);

    axios
      .post("https://tiserverb00.herokuapp.com/create-restaurant-item", inputFoodDetails)
      .then((res) => {
        alert("Entry submitted successfully.");
        window.location.reload();
      });

    //navigate(`/app/room-owner-listings/`);
  };

  return (
    <div>
       <Testhome />
    
    <div className="container mt-4">
     
      <center className="mt-5">
        <h3> Donate</h3>
      </center>
      <Form>
        <div className="form-group m-3 p-3">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="restaurantName"
            onChange={inputChange}
          />
        </div>

        <div className="form-group m-3 p-3">
          <label>Address</label>
          <input
            className="form-control"
            type="text"
            name="address"
            onChange={inputChange}
          />
        </div>

        <div className="form-group m-3 p-3">
          <label>Email</label>
          <input
            className="form-control"
            type="text"
            name="email"
            onChange={inputChange}
          />
        </div>

        <div className="form-group m-3 p-3">
          <label>Phone Number</label>
          <input
            className="form-control"
            type="text"
            name="phoneNumber"
            onChange={inputChange}
          />
        </div>

        <div className="form-group green-border-focus m-3 p-3">
          <label htmlFor="exampleFormControlTextarea5">Food Items</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea5"
            rows="3"
            placeholder="Enter the food items here"
            name="itemName"
            onChange={inputChange}
          ></textarea>
        </div>
        <div className="form-group m-3 p-3">
          <label>Day of Visit</label>
          <input
            className="form-control"
            type="date"
            name="weight"
            onChange={inputChange}
          />
        </div>
        <div className="form-group m-3 p-3">
          <label>Time of  Visit</label>
          <input
            className="form-control"
            type="text"
            name="weight"
    
            onChange={inputChange}
          />
        </div>
        <center>
          <Button variant="success" onClick={handlePropertySubmit}>
            Submit
          </Button>
        </center>
      </Form>
    </div>
    </div>
  );
};

export default Donate;
