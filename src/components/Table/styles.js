
import styled from "styled-components";


export const Root = styled.table`
width:75%;
border-collapse:collapse;
background-color:#fff;
border-radius:17px;

`;

export const Header = styled.thead``;

export const Tr = styled.tr`

`;

export const Th = styled.th`
padding:16px;
text-align:left;
color:#fff;
background-color:#171718;
border-bottom:2px solid #cdcdcd;

&:last-child{
    border-top-right-radius:16px;
}
&:first-child{

border-top-left-radius:16px;
}


`;

export const Td = styled.td`
padding:16px;
color:#484848;
font-weight:400;
line-height:115%;

`;
export const Body = styled.tbody`


`;