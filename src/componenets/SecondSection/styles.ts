import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  height:100%;
  padding:100px 0;
  display:flex;
  align-items:start;
  justify-content:center;
  background-color:white;
  gap:200px;
  
  @media screen and (max-width: 1439px) {
    padding-top:30px;
    gap:100px;
  }

   @media screen and (max-width: 767px) {
    height:100%;
    padding-bottom:30px;
  }
`;

export const ItemLogo = styled.div`
  width:45%;
  height:100%;
  display:flex;
  align-items:start;
  justify-content:end;

   @media screen and (max-width: 1023px) {
    display:none;
  }
`;

export const Img = styled.img`
  height:650px;
  transform: rotate(350deg);
`;

export const Right = styled.div`
  width:65%;
  display:flex;
  gap:15px;
  flex-direction:column;

  @media screen and (max-width: 1439px) {
    width:75%;
  }

  @media screen and (max-width: 1023px) {
    width:95%;
    align-items:center;
    justify-content:center;
  }
`;

export const Items = styled.div`
  width:100%;
  display:flex;
  gap:25px;
  flex-wrap:wrap;
  margin-top:10px;

  @media screen and (max-width: 1439px) {
    gap:50px;
  }

  @media screen and (max-width: 1023px) {
    align-items:center;
    justify-content:center;
    gap:75px;
  }

   @media screen and (max-width: 767px) {
    width:100%;
    display:flex;
    flex-direction:column;
    flex-wrap:none;
    gap:30px;
  }
`;

export const Header = styled.h1`
  margin:0;
  font-size:52px;
  width:70%;
  letter-spacing:1px;

  @media screen and (max-width: 1439px) {
    font-size:42px;
    width:100%;
  }

  @media screen and (max-width: 1023px) {
    text-align:center;
  }

   @media screen and (max-width: 767px) {
    font-size:32px;
  }
    
`;

export const SubHeader = styled.p`
  margin:0;
  color:grey;
  font-weight:300;
  letter-spacing:0.5px;
  font-size:19px;
`;

export const Item = styled.div`
  display:flex;
  flex-direction:column;
  width:35%;
  gap:15px;

  @media screen and (max-width: 767px) {
    width:100%;
    gap:5px;
    flex-direction:row;
  }
`;

export const Helper = styled.div`

`;

export const ItemNumber = styled.div`
  background-color:rgb(25, 118, 210,.35);
  padding:12px 16px;
  width:15px;
  font-weight:bold;
  font-size:18px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:12px;
  text-align:center;
`;

export const ItemTitle = styled.p`
margin:0;
font-weight:500;
letter-spacing:0.25px;
font-size:22px;
width:70%;
text-align:justify;

@media screen and (max-width: 1439px) {
    font-size:18px;
  }
`;

export const ItemParagraph = styled.p`
margin:0;
font-weight:300;
letter-spacing:0.5px;
@media screen and (max-width: 1439px) {
    font-size:16px;
  }
`;
