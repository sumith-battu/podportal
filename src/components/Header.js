import React, {Component} from 'react'
import './Header.css'
import {Link, NavLink} from 'react-router-dom'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const options = [
  {
    name: 'Enable both scrolling & backdrop',
    scroll: true,
    backdrop: true,
  },
];

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
   <>
     <Button onClick={toggleShow} className="me-2">
     <img
         width={60}
         src='https://images-platform.99static.com//h-1iV6ICnG8Dy-aHHVKD_bIAFH0=/0x0:1996x1996/fit-in/590x590/99designs-contests-attachments/79/79969/attachment_79969488'
         />
     </Button>
     <Offcanvas show={show} onHide={handleClose} {...props}>
       <Offcanvas.Header closeButton>
         <Offcanvas.Title>Offcanvas</Offcanvas.Title>
       </Offcanvas.Header>
       <Offcanvas.Body>
         Some text as placeholder. In real life you can have the elements you
         have chosen. Like, text, images, lists, etc.
       </Offcanvas.Body>
     </Offcanvas>
   </>
 );
}



export default class Header extends Component  {
  render(){
    return (
        <div className='main-header'>
            <nav className='navbar pt-0' id='navbar1'>
               <div className='container-fluid ' id='container'>
                  <div className='logo-name'>
                  {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
                     <h1 className=''>PodPortal</h1>
                  </div>
                  <div className='sign-login'>
                     
                     <NavLink className='nav-link active' to='/'>
                        Home
                     </NavLink>

                        <NavLink className='nav-link' to='/signup'>
                           Signup
                        </NavLink>

                        <NavLink className='nav-link' to='/login'>
                           Login
                        </NavLink>
                     
                  </div>
               </div>
            </nav>
         </div>
      )
   }
}
