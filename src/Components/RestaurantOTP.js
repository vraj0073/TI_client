import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import NavigationBar from "./NavigationBar";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import Testhome from "./Testhome";

export default function RestaurantOTP() {
  const [otp, setOtp] = useState("");
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [content, setContent] = useState();

  const handlePick = async () => {
    try {
      const res = await axios.get("https://tiserverb00.herokuapp.com/pickItem", {
        params: {
          itemId: content?._id,
        },
      });
      alert("OTP is matched, food can be delivered to the NGO.");
      window.location.reload();
      console.log(res.data);
      setOpen1(false);
    } catch (error) {
      console.log(error);
      alert("Order cant be picked!");
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.get("https://tiserverb00.herokuapp.com/getItemByOtp", {
        params: {
          otp,
        },
      });
      console.log("HERE" + res.data);
      setContent(res.data);
      setOpen1(true);
      console.log(otp);
      console.log(res.data);
    } catch (error) {
      console.log(error);
      setOpen2(true);
    }
  };
  return (
    <>
      <Testhome />
      <Box
        style={{
          justifyContent: "center",
          marginTop: "15%",
          display: "flex",
          flexDirection: "colum",
        }}
      >
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <Typography variant="h6" style={{ marginBottom: "2%" }}>
            Enter OTP that NGO has received to get the order
          </Typography>

          <TextField
            onChange={(e) => {
              setOtp(e.target.value);
            }}
            fullWidth
            label="Enter OTP"
            id="fullWidth"
          />
        </Box>
      </Box>
      <Box
        style={{
          justifyContent: "center",
          marginTop: "1%",
          display: "flex",
          flexDirection: "colum",
        }}
      >
        <Button variant="contained" onClick={handleSubmit}>
          Get Order
        </Button>
      </Box>
      <Dialog
        open={open1}
        onClose={() => {
          setOpen1(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Item Details:"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Item Name: {content?.name}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            Quantity: {content?.quantity}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            Weight: {content?.weight}
          </DialogContentText>
        </DialogContent>
        <DialogTitle id="alert-dialog-title">{"NGO Details:"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            NGO Name: {content?.receiver.name}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            Phone Number: {content?.receiver.phoneNumber}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            Email: {content?.receiver.email}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePick} autoFocus>
            Accept
          </Button>
          <Button
            onClick={() => {
              setOpen1(false);
            }}
            autoFocus
          >
            Decline
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open2}
        onClose={() => {
          setOpen2(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Error:"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            No Item exist with the given OTP. Please check the OTP again.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen2(false);
            }}
            autoFocus
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
