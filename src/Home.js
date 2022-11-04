import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

export default function Home() {
  const [categories, setCategories] = useState([]);
  // function handleClick() {
  //   history.push("/home");
  // }
  useEffect(() => {
    const url = "https://fakestoreapi.com/products/categories";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setCategories(json);
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {categories.map((value, index) => {
        return (
          <>
            <li>
              <Link to="/cart" state={{ from: value }}>
                {value}
              </Link>
            </li>
          </>
        );
      })}
    </>
  );
}
