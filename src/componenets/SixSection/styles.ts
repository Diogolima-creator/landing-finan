import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  height:100%;
  padding:60px 0;
  display:flex;
  align-items:center;
  justify-content:end;
  flex-direction:column;
  background-color:rgb(25, 118, 210, .1);
  gap:50px;
`;

export const Texts = styled.div`
  gap:5px;
  width:40%;
  height:20%;
  text-align:center;
  display:flex;
  align-items:center;
  justify-content:end;
  flex-direction:column;

  @media screen and (max-width: 1439px) {
    width:70%;
  }

  @media screen and (max-width: 1023px) {
    width:95%;
  }
`;

export const SubHeader = styled.p`
  margin:0;
  font-weight:300;
  font-size:17px;
`;

export const Header = styled.h1`
  margin:0;
  font-size:48px;

  @media screen and (max-width: 1023px) {
    font-size:42px;
  }

   @media screen and (max-width: 767px) {
    font-size:32px;
  }
`;


export const Slider = styled.div`
  height:80%;
  display:flex;
  gap:25px;
  overflow:hidden;
  width:100%;
  justify-content:center;

   @media screen and (max-width: 1439px) {
    justify-content:center;
  }
`;


export const Card = styled.div`
  width:250px;
  border-radius:12px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color:white;
  padding:25px;

  @media screen and (max-width: 1599px) {
    width:200px;
  }

  @media screen and (max-width: 1439px) {
    width:150px;
  }
`;

export const Top = styled.div`
  min-height:90%;
  display:flex;
  flex-direction:column;
  gap:10px;
`;

export const CardTitle = styled.p`
  margin:0;
  font-weight:500;
  font-size:20px;

  @media screen and (max-width: 1439px) {
      font-size:16px;
  }
`;

export const CardStars = styled.div`

`;

export const CardParagraph = styled.p`
  color: rgba(0,0,0, .7);
  font-weight:300;
  letter-spacing:1px;
  margin:0;
  font-size:16px;

  @media screen and (max-width: 1439px) {
      font-size:14px;
  }
`;

export const Footer = styled.div`
  min-height:10%;
  display:flex;
  flex-direction:column;
  gap:5px;
`;

export const FooterSubHeader = styled.div`
  font-weight:400;
  color: rgba(0,0,0, .7);
`;

export const FooterAuthor = styled.p`
  margin:0;
  font-weight:bold;
  font-size:18px;
`;
