

import styled from "styled-components";


export const Container = styled.div`
background-color:#ffffff;
display:flex;
flex-direction:column;
justify-content:space-between;
border-radius:20px;
gap:30px;

.container-top{  
gap:30px;
display:grid;
grid-gap: 10px 30%;
grid-template-areas:

"title title"
"items items-price"
"delivery-tax delivery-tax-price";

.title{
 grid-area:title;   
 background-color:#19191a;
 width:100%;
 padding:15px;
 border-top-left-radius:20px;
 border-top-right-radius:20px;
 text-align:center;
 color:#fff;
}

.items{
grid-area:items;    
padding-left:20px;
margin-top:20px;
}

.items-price{
grid-area:items-price;    
padding-right:10px;
margin-top:20px;
}

.delivery-tax{
grid-area:delivery-tax;  
padding-left:20px; 
}

.delivery-tax-price{
 grid-area: delivery-tax-price;   
 
}
}

.container-bottom {
display:flex;
justify-content:space-between;
font-size:20px;

padding:20px;
*{
 font-weight:700;   
}

}

`;
export const ButtonDiv = styled.div`
display:flex;
align-items:center;
gap:12px;





button{
display:flex;
align-items:center;
justify-content:center;
height:50px;
width:100%;
color:#fff;
border-radius:7px;
background-color:#9758a6;
border:none;
transition: all 0.4s;
margin-top:10px;
font-size:30px;
font-family: "Road Rage", serif;
font-weight:700;


&:hover{
background-color:#6f357c;

}


}
`;