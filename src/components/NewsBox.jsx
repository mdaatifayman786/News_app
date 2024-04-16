import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import loader from "../img/loader.gif"

export default function MediaCard({mode, api}) {
  const [data,setData] = React.useState(null)
  const [apidata,setApidata] = React.useState(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.REACT_APP_API_KEY}`)
  const fetchData = async () => {
    try {
      // Make API call to fetch data
      const response = await fetch(apidata)
      // Convert response to JSON
      const jsonData = await response.json();
      // Update state with fetched data
      setData(jsonData);
    } catch (error) {
      // Handle errors
      console.error('Error fetching data:', error);
    }
  };
  React.useEffect(() => {
    fetchData();
  }, [apidata]); // Only re-run effect if 'apidata' changes

  React.useEffect(() => {
    // Update 'apidata' state when the 'api' prop changes
    setApidata(api);
  }, [api]);
  console.log(data)
  console.log(apidata)
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
