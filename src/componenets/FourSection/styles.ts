import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  height:100%;
  padding:100px 0;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:start;
  text-align:center;
  gap:60px;

   @media screen and (max-width: 1023px) {
    gap:30px;
  }

  @media screen and (max-width: 767px) {
    padding-top:30px;
    height:100%;
  }
`;

export const Texts = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
`;

export const SubHeader = styled.p`
  font-weight:300;
  font-size:16px;
  letter-spacing:0.25px;
  margin:0;
`;

export const Header = styled.h1`
  width:40%;
  font-size:48px;
  letter-spacing:1.25px;
  text-align:center;
  margin:0;

  @media screen and (max-width: 1439px) {
    width:90%;
  }

   @media screen and (max-width: 1023px) {
    font-size:38px;
  }

  @media screen and (max-width: 767px) {
    width:95%;
    font-size:32px;
  }
`;

export const Items = styled.div`
  display:flex;
  flex-wrap:wrap;
  width:65%;
  justify-content:space-between;
  gap:65px;

  @media screen and (max-width: 1599px) {
    width:70%;
  }

  @media screen and (max-width: 1439px) {
    width:90%;
    gap:35px;
  }

   @media screen and (max-width: 767px) {
    flex-direction:column;
    width:100%;
    flex-wrap:none;
    gap:20px;
  }
`;

export const Item = styled.div`
  display:flex;
  flex-direction:column;
  width:29%;
  align-items:start;
  gap:15px;

  .icon{
    width:25px;
    height:25px;
    color:rgb(25, 118, 210);
  }

   @media screen and (max-width: 767px) {
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
  }
`;

export const Helper = styled.div`

`;

export const ItemIcon = styled.div`
  background-color:rgb(25, 118, 210, .3);
  padding:14px 12px;
  width:10%;
  border-radius:12px;
`;

export const ItemTitle = styled.p`
  margin:0;
  font-weight:500;
  font-size:20px;
  letter-spacing:0.5px;
  text-align:start;

  
   @media screen and (max-width: 1023px) {
    font-size:18px;
  }
`;

export const ItemParagraph = styled.p`
  margin:0;
  text-align:start;
  font-weight:300;
  font-size:16px;
  color:rgba(0,0,0, .7);
  letter-spacing:0.25px;
  width:85%;

  
  @media screen and (max-width: 1023px) {
    font-size:15px;
  }
`;
