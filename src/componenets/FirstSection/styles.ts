import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  height:83vh;
  padding-top:60px;
  display:flex;
  align-items:center;
  justify-content:center;

  @media screen and (max-width: 767px) {
    height:60vh;
  }

  @media screen and (max-width: 424px) {
    height:100%;
    padding: 80px 0;
  }
`;

export const Items = styled.div`
  width:68%;
  height:85%;
  display:flex;
  justify-content:space-around;

   @media screen and (max-width: 1439px) {
      width:90%;
  }

   @media screen and (max-width: 767px) {
      width:100%;
  }

`;

export const Item = styled.div`
  display:flex;
  flex-direction:column;
  align-items:start;
  justify-content:space-evenly;
  width:48%;

   @media screen and (max-width: 1023px) {
    width:90%;
    align-items:center;
    text-align:center;
  }

  @media screen and (max-width: 424px) {
    gap:15px;
  }
`;

export const ItemRight = styled.div`
  display:flex;
  flex-direction:column;
  align-items:start;
  justify-content:space-evenly;
  width:48%;

   @media screen and (max-width: 1023px) {
      display:none;
  }
  
`;


export const Title = styled.h1`
  margin:0;
  font-size:56px;
  letter-spacing:1.25px;

  span{
    color:rgb(25, 118, 210);
    border-bottom:2px solid ;
  }

   @media screen and (max-width: 1439px) {
    font-size:48px;
  }

   @media screen and (max-width: 767px) {
    font-size:32px;
  }
`;
 
export const Text = styled.p`
  margin:0;
  font-size:17px;
  letter-spacing:0.5px;
  font-weight:300;
  text-shadow: 2px 4px 3px rgba(0,0,0,0.2);

  @media screen and (max-width: 767px) {
      font-size:15px;
    }
  
`;

export const Button = styled.button`
  height:60px;
  width:240px;
  font-family: 'Roboto';
  font-size:16px;
  font-weight:500;
  letter-spacing:0.5px;
  border:none;
  outline:none;
  border-radius:10px;
  background-color:rgb(25, 118, 210);
  color:white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  cursor:pointer;
  padding-left:12px;
  display:flex;
  align-items:center;
  justify-content:end;
  gap:15px;

  span{
    background-color: rgba(0, 0, 0, .3);
    padding:8px;
    border-radius:10px;
  }

  .icon{
    height:20px;
    width:24px;
  }

  @media screen and (max-width: 767px) {
    font-size:15px;
    height:50px;
  }
`;

export const Security = styled.div`
  height:70px;
  width:100%;
  display:flex;
  align-items:center;

  @media screen and (max-width: 424px) {
    flex-direction:column;
    gap:20px;
  }
`;

export const Img = styled.img`
  width:100%;
`;

export const SecurityItem = styled.div`
  display:flex;
  gap:20px;

  .icon{
    padding:11px;
    border-radius:10px;
    background-color: rgba(25, 118, 210, .1);
    height:23px;
    width:23px;
    color:rgb(25, 118, 210);
  }
`;

export const SecurityText = styled.p`
  margin:0;
  letter-spacing:1.25px;
  font-weight:300;
  font-size:16px;
`;
