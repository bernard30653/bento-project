import React, { useState,useEffect} from 'react';
import { Box, Card, CardContent, CardActions, CardMedia, Typography, Button, Grid } from '@mui/material';

const dishes = [
  { main_id: 1, name: '爌肉', main_price:80 },
  { main_id: 2, name: '蔥爆牛肉', main_price:90},
  { main_id: 3, name: '滷雞腿', main_price: 100},
  { main_id: 5, name: '煎鱈魚', main_price: 100 },
  { main_id: 6, name: '起司雞排', main_price: 100 },
  { main_id: 7, name: '起司豬排', main_price: 100},
  { main_id: 8, name: '泰式雞排', main_price: 110 },
  { main_id: 9, name: '宮保雞丁', main_price: 80},
];

function DishGrid() {
  const [backendData, setBackendData] = useState([{}]);
  const [loading,setLoading] = useState(false);
  const [posts,setPosts] = useState([]);
  const [selectedDish, setSelectedDish] = useState(null);

  useEffect(()=>{
    fetch("/api/").then(
        response=> response.json()
    ).then(
        data => {
            setBackendData(data)
        }
    )
},[])
  useEffect(()=>{
    const fetchPost =  async()=>{
      setLoading(true);
      //const res = await axios.get('localhost:5000/api/main_dish')
    }
  },[])
  const handleSelectDish = (dish) => {
    setSelectedDish(dish);
  };

  return (
    <Box sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        m: 2, // Add margin to the box, you can change this value as needed
      }}>
      <Grid container spacing={6}>
        {dishes.map((dish) => (
          <Grid key={dish.main_id} item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={dish.imageUrl}
                alt={dish.name}
                sx={{
                    objectFit: 'cover',
                    borderTopLeftRadius: 2,
                    borderTopRightRadius: 2,
                  }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {dish.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleSelectDish(dish)}>
                  Choose
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedDish && (
        <Typography variant="h6" component="p">
          You have selected {selectedDish.name}.
          
        </Typography>
      )}
    </Box>
  );
}

export default DishGrid;