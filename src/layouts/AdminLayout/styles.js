
import styled from "styled-components";

export const Container = styled.div`
display:grid;
grid-template-columns: minmax(220px, 280px) 1fr;



main{
display:flex;
flex-direction:column;
flex:1;
width:100%;
height:100vh;
background-color: #f0f0f0;
overflow-y:auto;
}


section{
margin-left:200px;
padding: 40px 20px;
max-width:200px;
width:100px;
}



`;