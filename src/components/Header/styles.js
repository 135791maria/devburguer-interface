

import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
background-color:#1f1f1f;
width:100%;
height:62px;

`;
export const  Content = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width:100%;
max-width:1280px;
margin:0 auto;

`;
export const Navigation = styled.nav`
display:flex;
align-items:center;
justify-content:center;
height:72px;

div{

 display:flex;
 justify-content:center;
 align-items:center;
 gap:20px;
margin-right:100px;


hr{
height:24px;
border:1px solid #625E5E;
}
}

`;

export const HeaderLink = styled(Link)`
color:${props => props.$isActive ? "#9758a6" : "#fff" };
border-bottom:${(props) => (props.$isActive ? "1px solid #9758A6" : "none")};

text-decoration:none;
font-size:14px;
transition:color 200ms;
&:hover{
color:#9758a6;

}


`;

export const Options = styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:70px;

`;

export const Profile = styled.div`
display:flex;
align-items:center;
font-size:14px;
gap:12px;

p{
color: #fff;
line-height:90%;
font-weight:300;


span{
font-weight:700;
color:#9759a6;

}

}



`;

export const LinkContainer = styled.div`
display:flex;
align-items:center;
gap:18px;

`;

export const Logout = styled.button`
color:#ff3205;
text-decoration:none;
font-weight:500;
background-color:transparent;
border:none;


`;