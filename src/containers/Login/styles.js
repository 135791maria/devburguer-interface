
import styled from "styled-components";


import Background from "../../assets/background.svg";
import Background2 from "../../assets/background2.svg";

import { Link as ReactLink } from "react-router-dom";
export const Container = styled.div`
display:flex;
height:100vh;
width:100vw;



`;
export const LeftContainer = styled.div`
background:url('${Background}');
background-size:cover;

height:100%;
width:100%;
max-width: 50%;


display:flex;
align-items:center;
justify-content:center;
flex-direction:column;


`;

export const RightContainer = styled.div`
background:url('${Background2}');
background-color:#19191a;
background-position:center;
background-size:cover;
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;
width:100%;
height:100%;
p{
color: #fff;
font-size:18px;
font-weight:bold;
font-family: "Poppins", serif;  

a{
text-decoration:underline;
font-family: "Poppins", serif;
font-weight:200;
font-size:18px;
}
}

`;

export const Title = styled.h2`
font-family: "Road Rage", serif;
color:#fff;
font-size:44px;
font-weight:500;
font-style:15px;
span{
 color: #9758a6;   
 font-family: "Road Rage", serif;
}


`;

export const Form = styled.form`
display:flex;
flex-direction:column;
gap:20px;
width:100%;
max-width:400px;




`;

export const InputContainer = styled.div`
display:flex;
flex-direction:column;
width:100%;


input{
width:100%;
border:none;
height:48px;
border-radius:5px;
padding:0 16px;


}

label{
font-size:16px;
font-weight:800;
color:#fff;
font-family: "Poppins", serif;
}

p{
    font-size:15px;
    line-height:80px;
    color:#cf3057;
    font-weight:700;   
    height:15px;
  
   }


`;

export const Link = styled(ReactLink)`
text-decoration:none;
color:#fff;

`;

