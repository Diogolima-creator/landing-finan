import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  height:100%;
  padding:30px 0;
  display:flex;
  align-items:center;
  background-color:white;
  flex-direction:column;
  border-bottom:1px solid rgba(127,127,127, .3);

  @media screen and (max-width: 1439px) {
    justify-content:space-around;
  }

   @media screen and (max-width: 767px) {
    gap:15px;
    padding-bottom:15px;
  }
`;

export const Header = styled.h1`
  font-size:52px;

  @media screen and (max-width: 1439px) {
    font-size:48px;
  }

  @media screen and (max-width: 1023px) {
    font-size:42px;
  }

  @media screen and (max-width: 424px) {
    text-align:center;
    font-size:38px;
  }
`;

export const List = styled.div`
  width:50%;
  display:flex;
  flex-direction:column;
  gap:15px;
  height:60%;
  padding:40px 0;

  @media screen and (max-width: 1439px) {
    width:70%;
    padding:10px 0;
  }

  .icon{
    color:rgb(25, 118, 210, 1);
    width:18px;
    height:18px;
  }

   @media screen and (max-width: 1023px) {
    width:90%;
  }
`;

export const ListItem = styled.div`
  border:1px solid rgba(127,127,127, .3);
  padding:20px 25px;
  cursor:pointer;
  border-radius:8px;
`;

export const ListHeader = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
`;

export const Question = styled.p`
  font-weight:700;
  color:rgba(0,0,0, .7);
  font-size:17px;
  margin:0;
`;

export const Helper = styled.div`
  background-color:#FFF0E0;
  width:46%;
  height:120px;
  padding:20px 35px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  border-radius:15px;

  @media screen and (max-width: 1439px) {
    width:66%;
  }

  @media screen and (max-width: 1023px) {
    width:83%;
  }

   @media screen and (max-width: 767px) {
      width:75%;
      flex-direction:column;
      height:100%;
      gap:10px; 
    }
`;

export const HelperTexts = styled.div`
  display:flex;
  flex-direction:column;
  gap:15px;
  width:70%
  
  @media screen and (max-width: 767px) {
      width:95%;
  };
`;

export const HelperTitle = styled.p`
  font-size:28px;
  font-weight:bold;
  margin:0;

   @media screen and (max-width: 767px) {
    font-size:14px;
  }
`;

export const HelperParagraph = styled.p`
  color:rgba(0,0,0, .7);
  letter-spacing: 0.25px;
  margin:0;
  font-weight:300;

   @media screen and (max-width: 767px) {
    font-size:14px;
  }
`;

export const Button = styled.button`
  height:55px;
  width:170px;
  font-family: 'Roboto';
  font-size:16px;
  font-weight:500;
  letter-spacing:0.5px;
  border:none;
  outline:none;
  border-radius:10px;
  background-color:#FEB875;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
`;
