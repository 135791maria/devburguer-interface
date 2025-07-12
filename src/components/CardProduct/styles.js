
import styled from "styled-components";



export const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding:20px;
border-radius:8px;
background-color:#ffffff;
cursor:grab;
box-shadow:rgba(0,0,0,0.5) 5px 5px 15px;
position:relative;
margin-left:5px;
bottom:20px;


div{
width:100%;
height:80px;
display:flex;
flex-direction:column;
justify-content:space-between;

p{
font-size:16px;
font-weight:600;
color:#ff8c05;
line-height:25px;
margin-top:60px;
}

strong{

    font-size:21px;
    color:#363636;
    font-weight:800;

}
}

`;

export const CardImage = styled.img`
width:150px;
position:absolute;
top:-50px;

`;