import React,{ useContext }  from 'react'
import img1 from '../../assets/logo.avif'
import { Typography, IconButton, Badge } from '@mui/material'
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react'
import SearchBar from './Searchbar'
import { SearchContext } from '../SearchContext/Searchcontext'




const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-dot': {
        backgroundColor: theme.palette.success.main,
    },
}));


const Header = () => {
    const { toggleSearchBar } = useContext(SearchContext)
    return (
        <div>
            <div style={{ backgroundColor: "#94618E", display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
                    <img src={img1} style={{ width: "40px", borderRadius: "100%", border: "2px solid black",height:"40px" ,marginTop:"2px"}}></img>

                    <div style={{ paddingTop: "6px" }}>
                        <Typography sx={{ fontFamily: "Raleway, sans-serif", fontSize: "22px", fontWeight: "bold", color: "white" }}>
                            BookCart
                        </Typography>
                    </div>
                </div>
                <div style={{ paddingRight: "80px" }}>
                    <ul style={{ color: 'white', fontSize: "19px", fontFamily: "Poppins, sans-serif", display: "flex", gap: " 60px" }}>
                        <li style={{ listStyle: "none" }}>
                            <NavLink to="/" style={{ textDecoration: "none", color: 'white' }}>Home</NavLink>
                        </li>
                        
                        <li style={{ listStyle: "none" }}>
                            <NavLink to="/about" style={{ textDecoration: "none", color: 'white' }}>About</NavLink>
                        </li>
                        <li style={{ listStyle: "none" }}>
                            <NavLink to="/genres" style={{ textDecoration: "none", color: 'white' }}>Genres</NavLink>
                        </li>
                        <li style={{ listStyle: "none" }}>
                            <Badge color="secondary" badgeContent={0} showZero>
                                <ShoppingCartIcon />
                            </Badge>
                        </li>
                        <li style={{ listStyle: "none" }}>
                        <IconButton onClick={toggleSearchBar} color="inherit">
                                <SearchIcon />
                            </IconButton>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Header