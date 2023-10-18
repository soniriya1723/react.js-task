import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsJustify,}
 from 'react-icons/bs'
 import {MdAccountCircle } from "react-icons/md";

 import {MdSearch  } from "react-icons/md";

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
           <h3>Hey Shahrukh</h3>
        </div>
  



        <div className="container">

            <div clclassName="row height d-flex justify-content-center align-items-center">

              <div className="col-md-6">

                <div className="form">
               
                  <input type="text" class="form-control form-input" placeholder="Search"/>
                  <MdSearch className='fa-search'/>
                </div>
                
              </div>
              
            </div>
            
          </div>

        
        
    </header>
    
  )
}

export default Header