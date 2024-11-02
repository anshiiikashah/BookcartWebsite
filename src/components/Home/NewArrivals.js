import React, { useState } from 'react';
import { Box, Card, CardMedia, Typography, CardContent, Grid, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MyComponent = ({ newArrivalsData }) => {
    const [startIndex, setStartIndex] = useState(0);
    const cardsToShow = 2;

    const handleNext = () => {
        // Move start index to the right
        setStartIndex((prevIndex) => 
            (prevIndex + cardsToShow) % newArrivalsData.length
        );
    };

    // Calculate visible cards
    const endIndex = startIndex + cardsToShow;
    const visibleCards = newArrivalsData.slice(startIndex, endIndex).concat(
        newArrivalsData.slice(0, Math.max(0, endIndex - newArrivalsData.length))
    );
    return (
        <div style={{ marginTop: "80px" }}>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Grid item xs={12} md={4}>
                    <Box sx={{ maxWidth: "500px", textAlign: "center", margin: "0 auto" }}>
                        <Typography variant='h2' style={{ fontFamily: "DM Serif Display", color: "rgb(148, 97, 142)", textAlign: "center", marginTop: "25px" }}>
                            New Arrivals
                        </Typography>
                        <Typography style={{ fontSize: "20px" }}>
                            Discover the latest additions to our shelves! Our New Arrivals collection features a fresh selection of reads spanning diverse genres, from gripping mysteries to heartwarming romances and insightful non-fiction. Find your next favorite read right here!
                        </Typography>
                    </Box>
                </Grid>
                <Box 
                    marginTop="40px"
                    display="flex" 
                    flexWrap="wrap" 
                    gap={8} 
                    sx={{ justifyContent: 'center' }}
                >
                    {visibleCards.map((data) => (
                        <Card key={data.id} sx={{
                            backgroundColor: "white",
                            width: "200px",
                            height: "300px",
                            padding: "16px",
                            textAlign: "center",
                            cursor: "pointer",
                            border: "2px solid rgb(148, 97, 142)",
                            transition: "background-color 0.3s ease, color 0.3s ease", 
                            "&:hover": {
                                backgroundColor: "rgb(148, 97, 142)", 
                                color: "white",
                            },
                        }}>
                            <CardMedia 
                                component="img"
                                image={data.img}
                                alt='error'
                                style={{ width: "130px", height: "auto", margin: "0 auto", padding: "8px" }} 
                            />
                            <Typography style={{ fontFamily: "Raleway, sans-serif", fontWeight: "bold" }}>
                                {data.title}
                            </Typography>
                            <CardContent>
                                {data.author} <br/>
                                <span style={{ fontWeight: "bold" }}>₹{data.price}</span>
                            </CardContent>
                        </Card>
                    ))}
                    {newArrivalsData.length > cardsToShow && (
                        <IconButton 
                            onClick={handleNext} 
                            sx={{ position: "relative", right: -40, top: "50%", transform: "translateY(-50%)",width: '40px',
                                height: '40px', 
                                padding: 0 }}
                        >
                            <ArrowForwardIcon fontSize="large" sx={{ color: "rgb(148, 97, 142)" }} />
                        </IconButton>
                    )}
                </Box>
            </div>
        </div>
    );
};

export default MyComponent;
