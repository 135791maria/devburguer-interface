

import styled from "styled-components";
import Texture from "../../assets/texture.svg";
import Background2 from "../../assets/background2.svg"; 

export const Container = styled.div`
background:url('${Background2}');
background-color:#19191a;
width:100%;
min-height:100vh;

`;

export const Banner = styled.div`
background:url("${Texture}");
background-size:cover;
background-position:center;
display:flex;
align-items:center;
justify-content:center;
position:relative;
height:180px;

`;

export const Title = styled.div`
font-size:28px;
font-weight:800;
padding-bottom:10px;
color:#61a120;
text-align:center;
position:relative;

&::after{
position:absolute;
left:calc(50% - 28px);
bottom:0;
content:"";
width:56px;
height:2px;
background-color:#61a120;

}
`;

export const Content = styled.div`
display:grid;
grid-template-columns:1fr 30%;
width:100%;
max-width:1280px;
padding:40px;
margin:0 auto;
gap:20px;

`;