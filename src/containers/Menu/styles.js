

import styled from "styled-components";
import BannerMenu from "../../assets/banner-menu.svg";
import Background2 from "../../assets/background2.svg"; 
import { Link } from "react-router-dom";

export const Container = styled.div`  
background:url("${Background2}");
background-color:#ffffff;
background-color:#d3d3d3;
width:100%;
min-height:100vh;


`;

export const Banner = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:480px;
width:100%;
position:relative;

background:url("${BannerMenu}") no-repeat;
background-position:center;
background-color:#1f1f1f;
background-size:cover;
background-position:center;

h1{
font-family:"Road Rage", sans-serif;
font-size:80px;
line-height:65px;
color:#fff;
position:absolute;
right:20%;
top:20%;


span{
display:block;
color: #fff;
font-size:18px;



}


}


`;


export const CategoryMenu = styled.div`
display:flex;
justify-content:center;
gap:50px;
margin-top:30px;
padding-bottom:50px;

`;

export const CategoryButton = styled(Link)`
text-decoration:none;
cursor:pointer;
background:none;
color:${props => props.$isActiveCategory ?     " #9758a6" :"rgb(125, 125, 135)"};
font-size:22px;
font-weight:700;
border:none;
border-bottom: ${props => props.$isActiveCategory && "3px solid #9758a6"};

`;


export const ProductsContainer = styled.div`
display:grid;
grid-template-columns:repeat(3,1fr);
padding:40px;
justify-content:center;
max-width:1280px;
gap:50px;
margin: 50px auto;
margin-bottom:0;


`;