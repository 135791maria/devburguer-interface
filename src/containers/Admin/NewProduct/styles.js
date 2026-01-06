

import styled from "styled-components";

import ReactSelect from "react-select";
import {Button} from "../../../components";



export const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
min-height:100vh;
`;


export const Form = styled.form`
border-radius:20px;
background-color:#000;
padding:30px;
width:1500%;
max-width:700px;
display:flex;
flex-direction:column;
gap:8px;
margin-left:700px;
`;

export const InputGroup = styled.div`
display:flex;
flex-direction:column;
gap:2px;
`;

export const Label = styled.label`
color:#fff;
font-size:14px;`;

export const Input = styled.input`
width:100%;
height:48px;
border-radius:5px;
padding:0 12px;
`;

export const LabelUpload = styled.label`
cursor:pointer;
border:1px dashed #ffffff;
border-radius:6px;
padding:10px;
display:flex;
margin: 20px 0;
font-size:26px;
color:#fff;
width:400px;
input{
 display:none;     
}

`;



export const Select = styled(ReactSelect)``;

export const SubmitButton = styled(Button)``;
export const ErrorMessage = styled.span`
color:darkRed;
font-size:14px;
line-height:80%;
font-weight:600;
`;

