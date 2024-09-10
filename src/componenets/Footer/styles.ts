import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  height:20vh;
  padding-top:20px;
  display:flex;
  align-items:center;
  justify-content:start;
  flex-direction:column;
  background-color:white;

  @media screen and (max-width: 1023px) {
    height:60vh;
    gap:30px;
  }
`;

export const Header = styled.div`
  display:flex;
  align-items:center;
  gap:130px;
  height:50%;

  @media screen and (max-width: 1439px) {
    gap:50px;
  }

  @media screen and (max-width: 1023px) {
    flex-direction:Column;
    gap:20px;
    height:60%;
  }
`;

export const Logo = styled.img`
  height:80px;
`;

export const List = styled.div`
  display:flex;
  align-items:center;
  gap:40px;

  @media screen and (max-width: 1023px) {
    gap:10px;
    flex-direction:Column;
  }

  @media screen and (max-width:767px) {
    flex-direction:Column;
  }
`;

export const ListItem = styled.p`
  margin:0;
  font-size:17px;
  font-weight:300;
  color:rgba(0,0,0, 1);

  cursor:pointer;
    transition: .5s;

    &:hover{
        color:rgba(0,0,0, .7);
        opacity: .7;
    }
`;

export const Button = styled.button`
  height:50px;
  width:210px;
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
  display:flex;
  align-items:center;
  justify-content:center;

`;

export const Footer = styled.div`
  display:flex;
  align-items:center;  
  height:50%;
  justify-content:space-between;
  width:57%;  

  .icon{
    width:22px;
    height:22px;
    cursor:pointer;
    transition: .5s;

    &:hover{
        color:rgba(0,0,0, .7);
        opacity: .7;
    }
    }

  @media screen and (max-width: 1439px) {
    width:85%;
    gap:30px;
  }

  @media screen and (max-width: 1023px) {
    flex-direction:Column;
    justify-content:start;
    gap:15px;
    height:30%;
  }

  @media screen and (max-width: 767px) {
      width:100%;
  };
`;

export const FooterCnpj = styled.p`
  margin:0;
  font-size:15px;
  font-weight:300;

`;

export const Socials = styled.div`
  display:flex;
  gap:20px;

  @media screen and (max-width: 1439px) {
    gap:10px;
  }
`;

export const Policy = styled.p`
  margin:0;
  cursor:pointer;
  transition: .5s;
  font-size:15px;
  font-weight:300;

    &:hover{
        color:rgba(0,0,0, .7);
        opacity: .7;
    }
`;

export const Terms = styled.p`
  margin:0;
  cursor:pointer;
  transition: .5s;
  font-size:15px;
  font-weight:300;

  &:hover{
        color:rgba(0,0,0, .7);
        opacity: .7;
  }
`;

export const Dl = styled.div`
  display:flex;
  border:1px solid rgb(25, 118, 210, .7);
  border-radius:5px;
  align-items:center;
  cursor:pointer;
  justify-content:space-evenly;

  p{
    font-weight:300;
    margin:0;
    width:45%;
    font-size:12px;
  }

  span{
    font-weight:bold;
    font-size:15px;
  }
`;

export const Icon = styled.img`
  height:54px;
`;