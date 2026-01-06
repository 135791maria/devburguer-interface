
import styled from "styled-components";

export const Container = styled.div`

`;
export const ProductImage = styled.img`
padding:12px;
height:60px;
border-radius:16px;



`;
export const EditButton = styled.button`
border:none;
background-color:#f3f3f3;
border-radius:18px;
height:30px;
width:30px;
display:flex;
align-items:center;
justify-content:center;
cursor: pointer;

svg{
 height:20px;
 width:20px; 

}
&:hover{
    background-color:purple;


    svg{
fill:white;
    }
}
`;