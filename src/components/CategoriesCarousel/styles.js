


import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
    .carousel-item{
        padding-right: 40px;
    }

    padding-left:40px;

    .react-multiple-carousel__arrow--left {
    left: 15px;
    top: 10px;
}

    .react-multiple-carousel__arrow--right {
  
    top: 10px;
}


`;




export const Title = styled.h2`
font-size:34px;
color: #9758a6;
padding-bottom:12px;
position:relative;
text-align:center;
margin-top:10px;
margin-bottom:30px;


&::after{
  content:"" ;
  position:absolute;
  bottom:0;
  width:50px;
  height:4px;
  background-color: #9758a6;
left:calc(50% - 28px);

}
`;

export const ContainerItems = styled.div`
  background-image: url(${(props) => props.$imageUrl});


background-size:cover;
background-position:center;
display:flex;
align-items:center;
padding:20 10px;

width:95%;
height:250px;

border-radius:30px;

`;




export const CategoryButton = styled(Link)`
color:#fff;
background-color:rgba(0,0,0, 0.5);
border-radius:30px;
padding:10px 20px;
font-size:20.5px;
font-weight:500;
font-family: "Poppins", serif;
margin-top:90px;
text-decoration:none;

&:hover{
background:rgb(160, 88, 166);

}
`;