import "./styles.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Productdetails from "./Productdetail";
import { useEffect, useState, useCallback } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { Avatar } from "@mui/material";

export default function Profile() {
  const [count, setCount] = useState(0);
  const updateCount = useCallback(() => {
    setCount((previousState) => previousState + 1);
  }, []);

  return (
    <div className="Profile">
      <div className="container">
        <Badge badgeContent={count} color="success">
          <ShoppingCartIcon />
        </Badge>
        <Avatar />
      </div>
      <br />
      <br />

      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route
            path="/details"
            element={<Productdetails updateCount={updateCount} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}
