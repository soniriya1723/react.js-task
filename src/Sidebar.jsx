import React from 'react'

import { MdHome, MdOutlineHome, MdMoveToInbox, MdOutlineContactPage, MdOutlineAttachMoney,
    MdSettingsSuggest, MdOutlineHelpCenter,MdChevronRight } from "react-icons/md";

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <MdHome  className='icon_header'/> Dashboard
          
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
                <a href="">
                <MdOutlineHome  className='icon_header'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <MdMoveToInbox  className='icon_header'/> Product
                <MdChevronRight className='right'/>


                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <MdOutlineContactPage  className='icon_header'/> Customers
                <MdChevronRight className='right'/>


                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <MdOutlineAttachMoney  className='icon_header'/> Income
                <MdChevronRight className='right'/>


                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <MdSettingsSuggest  className='icon_header'/> Promote
                <MdChevronRight className='right'/>


                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <MdOutlineHelpCenter  className='icon_header'/> Help
                <MdChevronRight className='right'/>


                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar