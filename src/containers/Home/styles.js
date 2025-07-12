
import styled from "styled-components";

import BannerHome from "../../assets/banner-home.svg";
import Background2 from "../../assets/background2.svg"; 

export const Banner = styled.div`
background: url("${BannerHome}");
background-size:cover;
background-position:center;
height:460px;

h1{
font-family: "Road Rage", serif;
font-size:70px;
font-weight:bold;
color:#fff;
position:absolute;
right:20%;
top:10%


}
    

`;
export const Container = styled.div`  
background:url("${Background2}");
background-size:cover;
height:100%;
background-color:#d3d3d3;
`;


