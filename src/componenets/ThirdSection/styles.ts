import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  height:80vh;
  display:flex;
  align-items:center;
  justify-content:end;
  background-color:rgba(251, 247, 234, 1);
  gap:200px;

  @media screen and (max-width: 1439px) {
    height:100vh;
  }

  @media screen and (max-width: 1023px) {
    height:80vh;
    justify-content:center;
  }

  @media screen and (max-width: 767px) {
    height:100%;
    padding:60px 0;
    gap:50px;
  }
`;

export const Left = styled.div`
  width:40%;
  display:flex;
  flex-direction:column;
  justify-content:End;
  align-items:start;
  gap:45px;

  @media screen and (max-width: 1439px) {
    gap:25px;
  }

  @media screen and (max-width: 1023px) {
    width:90%;
    align-items:center;
    justify-content:center;
    text-align:center;
  }

  @media screen and (max-width: 767px) {
    gap:10px;
  }
`;

export const Headers = styled.div``;

export const SubHeader = styled.p`
  font-weight:300;
  margin:0;
  font-size:17px;
`;

export const Header = styled.h1`
  font-size:48px;
  margin:0;

  @media screen and (max-width: 1439px) {
    font-size:42px;
  }

  @media screen and (max-width: 767px) {
    font-size:32px;
  }
  
`;

export const List = styled.ul`
`;

export const Bullet = styled.li`
  font-weight:300;
  margin-top:15px;
`;

export const Button = styled.button`
  height:50px;
  width:200px;
  font-family: 'Roboto';
  font-size:15px;
  font-weight:500;
  letter-spacing:0.5px;
  border:none;
  outline:none;
  border-radius:10px;
  background-color:rgb(25, 118, 210);
  color:white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;

  @media screen and (max-width: 767px) {
    height:40px;
  }
`;

export const Blocks = styled.div`
  display:flex;
  gap:45px;

  @media screen and (max-width: 424px) {
    flex-direction:column;
    gap:5px;
  }

`;

export const Block = styled.div`
  display:flex;
  gap:10px;
`;

export const Right = styled.div`
  width:35%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:end;
  overflow:hidden; 

   @media screen and (max-width: 1023px) {
    display:none;
  }
`;

export const Img = styled.img`
  position:relative;
  height:93%;
  transform:rotate(353deg);
  left:255px;

  @media screen and (max-width: 1599px) {
    left:430px;
  }

  @media screen and (max-width: 1439px) {
    left:600px;
    height:80%;
  }
`;

export const BlockIcon = styled.div`
  display:flex;
  align-items:center;
  padding:10px;
  border-radius:12px;
  height:20px;
  background-color: rgba(220, 210, 190, 1);

  .icon{
    width:22px;
    height:22px;
  }
`;

export const BlockTexts = styled.div`
  display:flex;
  flex-direction:column;
  gap:5px;
`;

export const BlockName = styled.p`
margin:0;
font-weight:500;
font-size:18px;
`;

export const BlockRating = styled.div`
  color:Grey;
  font-size:16px;
  font-weight:400;
`;

export const Stars = styled.div`

`;

