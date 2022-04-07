import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

export default function CardElement({
  itemName,
  content,
  imageUrl,
  weight,
  sender,
  itemId,
  index,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleAccept = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    const res = await axios.post("https://tiserverb00.herokuapp.com/acceptItem", {
      userId: user._id,
      itemId,
    });
    // console.log(res);
    alert("Please check your email for OTP to show to the restaurant for pickup.")
    setOpen(false);
    window.location.reload();
  };

  const handleDecline = () => {
    setOpen(false);
  };
  return (
    <>
      <Grid item xs={3} style={{ marginTop: "2%", marginLeft: "2%" }}>
        <Card sx={{ maxWidth: 345 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ marginLeft: "40%" }}
          >
            Item: {index + 1}
          </Typography>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {itemName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Weight: {weight}
            </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: "center" }}>
            <Button size="small" onClick={handleOpen}>
              Accept
            </Button>
          </CardActions>
          <Dialog
            open={open}
            onClose={handleDecline}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Restaurant Details:"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Restaurant name: {sender.name}
              </DialogContentText>
              <DialogContentText id="alert-dialog-description">
                Addresss: {sender.address}
              </DialogContentText>
              <DialogContentText id="alert-dialog-description">
                Phone Number: {sender.phoneNumber}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleAccept} autoFocus>
                Accept
              </Button>
              <Button onClick={handleDecline} autoFocus>
                Decline
              </Button>
            </DialogActions>
          </Dialog>
        </Card>
      </Grid>
    </>
  );
}
