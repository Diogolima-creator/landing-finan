import styled from "styled-components";

export const HeaderAndShowDown = styled.div`
  display:flex;
  flex-direction:column;
  position:fixed;
  width:100%;
  z-index:100;
  
  .entrance{
    animation: slider 0.6s ease-in-out;
  }

  .exit{
    animation: slider-exit 0.6s ease-in-out;
  }

  @keyframes slider {
    from {
      height: 0;
    }
    to {
      height: 255px;
    }
  }


  @keyframes slider-exit {
    from {
      height: 255px;
    }
    to {
      height: 0;
    }
  }

 

`;

export const Header = styled.div`
  height:60px;
  width:100%;
  display:flex;
  box-shadow:rgba(17, 17, 17, 0.1) 0px 1px 1px;
  background-color:rgb(231, 236, 244);


   @media screen and (max-width: 1023px) {
    justify-content:space-between;
  }

`;

export const ShowDown = styled.div`

`;

export const Logo = styled.div`
  width:15%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
`;

export const Img = styled.img`
  height:50px;
`;

export const List = styled.div`
  height:100%;
  display:flex;
  align-items:center;
  gap:20px;
  font-weight:500;
  letter-spacing:0.45px;
  font-size:16px;

  p{
      transition: 0.25s;
  }

  &:hover{
    p{
      opacity: .5;
    }
  }

  .item, .itemShowDown{
    &:hover{
      opacity:1;
    }
  }

  .itemShowDown{
    cursor:default;
  }

  .dot{
    opacity:0;
    width:4px;
    height:4px;
    background-color:rgb(25, 118, 210);
    border-radius:10px;
  }

  .selected{
    span{
      opacity:1;
    }
      &:hover{
      opacity:1;
    }
  }

  @media screen and (max-width: 1023px) {
    display:none;
  }

   
`;

export const ListItem = styled.p`
  margin:0;
  cursor:pointer;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding-top:7px;
  justify-content:center;
  height:100%;
`;

export const Buttons = styled.div`
  height:100%;
  width:49%;
  display:flex;
  align-items:center;
  justify-content:end;
  transition:0.6s;

.icon{
    color:rgb(25, 118, 210);
    height:21px;
    width:21px;
  }

  .show{
    animation: show 0.2s ease-in-out;
    width:100%;
  }

  .remove{
    width:0;
    animation: remove 0.2s ease-in-out;
  }
  
  @keyframes show {
    from {
      width: 0;
    }
    to {
      width: 100%;
      }
    }

    @keyframes remove {
    from {
      width: 100%;
    }
    to {
      width: 0;
      }
    }

    @media screen and (max-width: 1599px) {
      width:40%;
    }

    @media screen and (max-width: 1439px) {
        width:20%;
    }

  @media screen and (max-width: 1023px) {
      display:none;
  }
`;

export const Button = styled.div`
  display:flex;
  flex-direction:column;
  height:100%;
  justify-content:center;
`;

export const Helper = styled.div`
  display:flex;
  gap:10px;
  cursor:pointer;
`;

export const Login = styled.a`
  margin:0;
  font-weight:700;
  color:rgb(25, 118, 210);
  font-size:17px;
  text-decoration:none;
`;

export const BorderBottom = styled.div`
  width:0;
  height:2px;
  background-color:rgb(25, 118, 210);  
`;

export const Bars = styled.div`
  height:100%;
  align-items:center;
  display:none;
  width:10%;
  .icon{
    width:24px;
    height:24px;
    color:rgb(25, 118, 210);  
  }

  @media screen and (max-width: 1023px) {
      display:flex;
  }
`;

export const Menu = styled.div`
  position:absolute;
  height:calc( 100vh - 60px);
  width:100vw;
  margin-top:60px;
  background-color:rgb(231, 236, 244);
  z-index:101;
  animation: slider-menu 0.3s ease-in-out;

  @keyframes slider-menu {
    from {
      height: 0;
    }
    to {
      height:calc( 100vh - 60px);
    }
  }


  @keyframes slider-exit-menu {
    from {
      height: calc( 100vh - 60px);
    }
    to {
      height: 0;
    }
  }
`;

export const MenuItem = styled.h1`
  font-size:38px;
  font-weight:500;
  animation: sliderY-menu 0.4s ease-in-out;
  border-bottom:1px solid rgba(0,0,0, .3);
  padding:18px;

  a{
    font-size:38px;
  }

  @keyframes sliderY-menu {
    from {
      transform: translateY(-400px);
    }
    to {
      transform: translateY(0px);
    }
  }

  .icon{
    color:rgb(25, 118, 210);
  }
    
`;