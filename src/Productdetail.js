import { useLocation } from 'react-router-dom'
import { useEffect,useState} from "react"
import { Card, CardContent, Typography, Grid } from '@mui/material';
import {Button} from "@mui/material"
export default function Productdetails(props) {
  const location = useLocation();
  const [allproduct,setallProduct]=useState([])


  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  
  
  useEffect(() => {

    if(searchTerm.length>0){
      const results = allproduct.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log(results)
      setallProduct(results);
    }
    else{
    const url = "https://fakestoreapi.com/products/"+location.state.id;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        // setCategories(json)
        setallProduct(json)
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }
}, [searchTerm]);


return(
<>
{
  console.log(location.state.id)
}
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <br/>
      <br />
      <br />
      <br />  
<Grid container spacing={5} justifyContent="center">
  {

allproduct.map((value,index)=>{
  return(
    <>
  
    {/* {value.image} */}
      <Grid item xs={4} md={8} component={Card} id={index}  style={{  backgroundImage: `url(${value.image}
)` }}>
      {/* <Link>  component={Link} to="/details" */}
    <CardContent  state={{ from: value.id }}>
      <Typography color="textSecondary" gutterBottom>
       {value.title}
      </Typography>
      {/* <Typography color="textSecondary" gutterBottom>
      add To cart
      </Typography> */}
      <Button onClick={()=>props.updateCount()}>add To cart </Button>
    </CardContent>
     {/* </Link> */}
    </Grid>
    
    </>
  )
})
  }
  </Grid>

</>


)

}