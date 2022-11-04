import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function Cart(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state;

  const [allproduct, setallProduct] = useState([]);
  const handleClick = (e) => {
    navigate("/details", { state: { id: e.target.id } });
  };
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    if (searchTerm.length > 0) {
      const results = allproduct.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log(results);
      setallProduct(results);
    } else {
      const url = "https://fakestoreapi.com/products/category/" + from;
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          // setCategories(json)
          setallProduct(json);
          console.log(json);
        } catch (error) {
          console.log("error", error);
        }
      };
      fetchData();
    }
  }, [searchTerm]);

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <br />
      <br />
      <br />
      <br />
      <Grid container spacing={5} justifyContent="center">
        {allproduct.map((value, index) => {
          return (
            <>
              {/* {value.image} */}
              <Grid
                item
                xs={3}
                md={3}
                component={Card}
                id={index}
                onClick={(e) => handleClick(e)}
                style={{
                  backgroundImage: `url(${value.image}
)`
                }}
              >
                {/* <Link>  component={Link} to="/details" */}
                <CardContent state={{ from: value.id }}>
                  <Typography color="textSecondary" gutterBottom>
                    {value.title}
                  </Typography>
                </CardContent>
                {/* </Link> */}
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
}
