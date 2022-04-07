import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardElement from "./CardElement";
import axios from "axios";
import Testhome from "./Testhome";
import { useNavigate } from "react-router-dom";
import "../css/CardElement.css";

function NgoFeature() {
  console.log("EHEREREE");
  const navigator = useNavigate();
  const [items, setItems] = useState();

  let content = "No items for recycle yet!";
  console.log(items);
  if (items?.length > 0) {
    content = "Items for pickup";
  }

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigator("/login");
    } else {
      const getData = async () => {
        const res = await axios.get(
          "https://tiserverb00.herokuapp.com/getItems"
        );
        console.log(res.data);
        const ds = [];
        res.data.map((i) => {
          if (i.status === "NOT_ACCEPTED") {
            ds.push(i);
          }
        });
        console.log(ds);
        setItems(ds);
      };
      getData();
    }
  }, []);

  return items ? (
    <div>
      <Testhome />
      <Grid
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {content}
        </Typography>
      </Grid>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        style={{ marginTop: "2%" }}
      >
        {items.map((i, idx) => (
          <CardElement
            itemName={i.name}
            content={i.sender.address}
            weight={i.weight}
            sender={i.sender}
            itemId={i._id}
            index={idx}
            className="grid"
            // imageUrl={i.imageUrl}
          ></CardElement>
        ))}
      </Grid>
    </div>
  ) : (
    <p>loading</p>
  );
}

export default NgoFeature;
