import styled from "styled-components";

export const ShowDown = styled.div`
  width:100%;
  display:flex;
  box-shadow:rgba(17, 17, 17, 0.1) 0px 1px 1px;
  background-color:rgb(231, 236, 244);
  align-items:start;
  overflow:hidden;
  
  .entranceMenu{
    animation: sliderY 0.6s ease-in-out;

    @keyframes sliderY {
      from {
        transform: translateY(-400px);
      }
      to {
        transform: translateY(0px);
      }
    }
  }
     @media screen and (max-width: 1439px) {
      p{
        font-size:16px;
      }

      h1{
        font-size:18px;
      }
  }
`; 

export const Menu = styled.div`
  width: 20%;
  display:flex;
  flex-direction:column;
  gap:20px;
  padding:20px 60px;
`;

export const MenuTitle = styled.p`
  margin:0;
  font-weight:300;
  font-size:18px;
`;

export const MenuText = styled.h1`
  margin:0;
  text-align:start;
  font-size:24px;
  transition: .15s; 
  cursor:pointer;

  &:hover{
    color:rgb(25, 118, 210);
  }
`;
