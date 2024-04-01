import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import loader from "../img/loader.gif"

export default function MediaCard({mode}) {
  const [data,setData] = React.useState(null)
  React.useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Make API call to fetch data
        const response = await fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=b25243b1c049414d9a4258bc71095bd4')
        // Convert response to JSON
        const jsonData = await response.json();
        // Update state with fetched data
        setData(jsonData);
      } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetch data function
    fetchData();
  }, []);
  console.log(data)
  return (
    <div className='mainBox'>
      {/* Conditionally render the Card component if data is not null */}
      {data!==null && data["articles"].map((element)=>{
        return <Card key={element["url"]} sx={{ maxWidth: 345, marginRight: "25px", marginBottom: "50px", marginLeft: "25px", backgroundColor: mode === "light" ? "ivory" : "darkgray" }}>
          <CardMedia
            sx={{ height: 140 }}
            image={element["urlToImage"]}
            title={data["content"]}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {element["title"]}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {element["description"]}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button href={element["url"]} size="small">Learn More</Button>
          </CardActions>
        </Card>}
      )}
      {/* Render a loading message if data is null */}
      {data === null && <img src={loader} alt='Loading.....'/>}
    </div>
  );
}
