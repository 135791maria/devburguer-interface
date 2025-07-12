
import styled from "styled-components";


export const ProductImage = styled.img`
height:80px;
width:80px;
`;

export const ButtonGroup = styled.div`
display:flex;
align-items:center;
gap:12px;


button{
display:flex;
align-items:center;
justify-content:center;
height:20px;
width:20px;
color:#fff;
border-radius:5px;
background-color:#9758a6;
border:none;
transition: all 0.4s;


&:hover{
background-color:#6f357c;

}

}
`;
export const TrashImage = styled.img`
height:20px;
width:20px;
`;
export const ProductTotalPrice = styled.p`
font-weight:bold;
`;