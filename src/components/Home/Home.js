import React, { useContext,useRef } from 'react';
import img1 from '../../assets/img1.jpeg';
import { Card, CardContent, CardMedia, Typography, Grid2, CardHeader,Box } from '@mui/material';
import diffgen from '../../assets/diffgenres.jpeg';
import diffauthor from '../../assets/diffauthors.jpg';
import kids from '../../assets/kids.jpg'
import bannerimg from '../../assets/bannerimg.jpeg'
import twotwisted from '../../assets/twotwisted.jpeg'
import bluehour from '../../assets/bluehour.jpeg'
import SearchBar from '../Header/Searchbar';
import { SearchContext } from '../SearchContext/Searchcontext'
import throne from '../../assets/throneof.jpeg'
import MyComponent from './NewArrivals';

const cardData = [
  { id: 1, title: "Explore different genres", details: "Each genre opens doors to different experiences, settings, and emotions.", img: diffgen },
  { id: 2, title: "Explore books in different languages", details: "Books from various languages, each a window into the cultural richness of its origin:", img: diffauthor },
  { id: 3, title: " A World of Books for Kids", details: "A broad and diverse category, designed to both entertain and educate young readers.", img: kids },
];

const newArrivalsData = [
  { id: 1, title: "Throne Of Secrets", author: "Kerri Maniscalo", price: "240", genre: "Young Adult Fantasy",img:throne },
  { id: 2, title: "Two Twisted Crown", author: "Rachel Gillig", price: "300", genre: "Dark Fantasy" ,img:twotwisted},
  {id:3, title:"The Blue Hour",author:"Paula Hawkins",price:"230",genre:"Thriller",img:bluehour},
]

const Home = () => {



  const { searchVisible } = useContext(SearchContext)
  const newArrivalsRef = useRef(null); 
  const scrollToNewArrivals = () => {
    if (newArrivalsRef.current) {
      newArrivalsRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the New Arrivals section
    }
  };


  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", padding: '8px' }}>
        {searchVisible && <SearchBar />}
      </div>
      <div>
        <div>
          <div div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', marginTop: "20px" }}>
            <Card elevation={4} style={{ display: 'flex', alignItems: 'center', padding: '10px', width: '600px', gap: "8px", border: "2px solid rgb(148, 97, 142)" }}>
              <CardMedia component="img" image={bannerimg} style={{ width: "40px" }} />
              <Typography style={{ fontSize: "20px", fontFamily: "Montserrat , sans-serif" }}>
                New Arrivals Just Landed! See what's new!
                <button style={{
                  backgroundColor: "rgb(148, 97, 142)", border: "none", borderRadius: "15px", width: "100px", color: "white", fontSize: "17px", fontFamily: "Montserrat , sans-serif", cursor: "pointer", marginLeft: "20px", transition: "transform 0.3s ease",
                }}
                onClick={scrollToNewArrivals}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}>Buy Now</button>
              </Typography>
            </Card>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <img src={img1} alt="image" />
          <Card style={{ height: '200px', overflow: 'hidden', marginTop: "200px" }}>
            <CardContent style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <Typography variant='h2' style={{ color: "rgb(148, 97, 142)", fontFamily: "DM Serif Display" }}>Books that feed your thoughts!</Typography>
              <Typography style={{ fontSize: "20px", fontFamily: "Raleway, sans-serif" }}>Discover a world of stories waiting to be explored.</Typography>
              <button style={{ backgroundColor: "rgb(148, 97, 142)", border: "none", borderRadius: "15px", width: "100px", color: "white", fontSize: "20px", fontFamily: "DM Serif Display", cursor: "pointer" }}>Explore</button>
            </CardContent>
          </Card>
        </div>
      </div>
      <Grid2 style={{ padding: "4px", backgroundColor: "rgb(148, 97, 142)" }}>
        <Typography style={{ fontSize: "24px", fontFamily: "DM Serif Display", color: "white", textAlign: "center" }}>Explore new worlds with every turn of the page.</Typography>
        <Grid2 container spacing={2} style={{ padding: "4px", justifyContent: "center" }}>
          {cardData.map((card) => (
            <Grid2 container spacing={8} item key={card.id} >
              <Card style={{ width: '300px', height: '300px', position: 'relative', overflow: 'hidden', margin: "10px" }}>
                <CardMedia
                  component="img"
                  image={card.img}
                  alt='error'
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.3s ease-in-out' }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out',
                }} className="overlay">
                  <Typography variant="h6" style={{ color: 'white', textAlign: 'center', fontFamily: "Raleway, sans-serif" }}>{card.title}</Typography>
                  <CardContent style={{ color: 'white', textAlign: 'center' }}>
                    {card.details}
                  </CardContent>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.previousSibling.style.opacity = 1}
                  onMouseLeave={(e) => e.currentTarget.previousSibling.style.opacity = 0}
                />
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
      <div ref={newArrivalsRef}>
      <MyComponent newArrivalsData={newArrivalsData} />
      </div>
    </div>
  );
}

export default Home; 