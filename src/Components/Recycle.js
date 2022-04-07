import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardElement from "./CardElement";
import Box from "@mui/material/Box";
import data from "../data";
import dayjs from "dayjs";
import axios from "axios";
import NavigationBar from "./NavigationBar";
import Header from "./Header";
import Testhome from "./Testhome";
import { useNavigate } from "react-router-dom";

export default function Recycle() {
  console.log("EHEREREE");
  const navigator = useNavigate();
  const [items, setItems] = useState();

  let content = "No items for recycle yet!";
  console.log(items);
  if (items?.length > 0) {
    content = "Items for recycle";
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
          if (
            i.status === "NOT_ACCEPTED" &&
            dayjs().diff(i.createdAt, "hours") >= 24
          ) {
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
            quantity={i.quantity}
            sender={i.sender}
            itemId={i._id}
            index={idx}
            // imageUrl={i.imageUrl}
          ></CardElement>
        ))}
      </Grid>
    </div>
  ) : (
    <p>loading</p>
  );
}
