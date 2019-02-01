import React from 'react';
import styled from 'styled-components';

 const Button = styled.button`
   position: relative;
   background: none;
   border: none;
   margin-left: auto;
   cursor: pointer; 
   text-transform: uppercase;
   padding: 10px;
`;

const ButtonMenu = (props) => {
   return (
     <Button onClick={props.onClick}>
      Меню
     </Button>
   );
 };

 export default ButtonMenu;
