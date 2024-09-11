import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  height:100%;
  padding:30px 0;
  display:flex;
  align-items:center;
  justify-content:start;
  flex-direction:column;
  background-color:rgb(25, 118, 210, .1);
  gap:100px;

   @media screen and (max-width: 1439px) {
    padding-top:40px;
    gap:30px;
  }

   @media screen and (max-width: 767px) {
    height:100%;
  }
`;

export const Texts = styled.div`
  display:flex;
  flex-direction:column;
  width:60%;
  text-align:center;
  gap:20px;
  align-items:center;

  @media screen and (max-width: 767px) {
    width:100%;
  }
`;

export const Header = styled.h1`
  margin:0;
  font-size:48px;
`;

export const SubHeader = styled.p`
  margin:0;
  width:55%;
  font-weight:300;
  font-size:17px;
  color:rgba(0,0,0, .7);

   @media screen and (max-width: 1439px) {
    width:90%;
  }
`;

export const Menu = styled.div`
  display:flex;
  width:65%;


  @media screen and (max-width: 1439px) {
    width:90%;
  }

  .icon{
    width:32px;
    height:32px;
    color:rgb(25, 118, 210, 1);
  }

  @media screen and (max-width: 1023px) {
    width:100%;
    align-items:center;
    justify-content:end;
    gap:75px;
  }

  @media screen and (max-width: 767px) {
    flex-direction:column;
    gap:15px;
  }
`;

export const Left = styled.div`
  display:flex;
  flex-direction:Column;
  justify-content:space-between;
  height:100%;
  gap:65px;
  width:25%;

  @media screen and (max-width: 1023px) {
    width:38%;
    gap:15px; 
  }

  @media screen and (max-width: 767px) {
    width:100%;
    align-items:center;
    justify-content:center;
  }
`;

export const Item = styled.div`
  display:flex;
  flex-direction:column;
  align-items:start;
  gap:15px;

  @media screen and (max-width: 1023px) {
    width:80%;
  }

  @media screen and (max-width: 767px) {
    width:90%;
    align-items:center;
    justify-content:center;
    text-align:center;
  }
`;

export const ItemTitle = styled.p`
  margin:0;
  font-weight:500;
  font-size:20px;
`;

export const ItemText = styled.p`
  margin:0;
  font-weight:300;
  font-size:17px;

  @media screen and (max-width: 767px) {
    width:90%;
  }

`;


export const Center = styled.div`
  width:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  height:100%;

  @media screen and (max-width: 1023px) {
    display:none;
  }
`;

export const Img = styled.img`
  width:60%;
  height:680px;
  transform:scale(1.2);

  @media screen and (max-width: 1439px) {
    height:600px;
    transform:scale(1.25);
  }

  
`;


