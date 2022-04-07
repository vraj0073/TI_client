import { useState, React } from "react";
import { Form, Button } from "react-bootstrap";
import Testhome from "./Testhome";
const axios = require("axios");

const DEF_ITEM_DETAILS = {
  itemName: "",
  quantity: "",
  weight: "",
};

const RestaurantFood = () => {
  const [inputFoodDetails, setInputFoodDetails] = useState(DEF_ITEM_DETAILS);

  const inputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
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

      case "quantity":
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
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    console.log(inputFoodDetails);

    axios
      .post("https://tiserverb00.herokuapp.com/createItem", {
        name: inputFoodDetails.itemName,
        weight: inputFoodDetails.weight,
        quantity: inputFoodDetails.quantity,
        sender: userId,
        status: "NOT_ACCEPTED",
      })
      .then((res) => {
        alert("Entry submitted successfully.");
        window.location.reload();
      });
  };

  return (
    <div>
       <Testhome />
    
    <div className="container mt-4">
     
      <center className="mt-5">
        <h3> Post excess food</h3>
      </center>
      <Form>
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
          <label>Total Weight</label>
          <input
            className="form-control"
            type="text"
            name="weight"
            placeholder="Total weight of food items in Kg"
            onChange={inputChange}
          />
        </div>
        <div className="form-group m-3 p-3">
          <label>Quantity</label>
          <input
            className="form-control"
            type="text"
            name="quantity"
            placeholder="Enter quantity"
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

export default RestaurantFood;
