
import styled from "styled-components";
import Select from 'react-select';



export const ProductImage = styled.img`
height:60px;
padding:12px;
border-radius:16px;
margin-left:25px;
`;
export const SelectStatus = styled(Select)`
width:200px;
`;


export const Filter = styled.div`
display:flex;
justify-content:center;
gap:40px;
height:20px;
width:800px;
margin-left:50px;
margin-bottom:20px;

`;

export const FilterOption  = styled.button`
cursor:pointer;
background:none;
border:none;
color:${props => props.$isActiveStatus ? " #ce28c8ff" :"rgb(125, 125, 135)"};
border-bottom: ${props => props.$isActiveStatus ?     "3px solid  #ce28c8ff" :"none"};
font-size:15px;
line-height:16px;

`;
