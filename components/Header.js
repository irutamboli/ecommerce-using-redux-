import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import Cart from './Cart'
import { useNavigate } from "react-router-dom";
function Header() {
  const [activeItem,setActiveItem]= useState("reviews");

  const navigate =useNavigate();

  const moveToCartPage=()=>{
    navigate("/cartProducts")

  }
    return (
        <Menu>
        <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
      
        >
          Editorials
        </Menu.Item>

        <Menu.Item
          name='reviews'
          active={activeItem === 'reviews'}
      
        >
          Reviews
        </Menu.Item>

       
        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          position='right'
          style={{cursor:"pointer"}}
          onClick={moveToCartPage}
          
      
        >
         <Cart/>
        </Menu.Item>
      </Menu>
    )
}

export default Header
