import React from 'react'
import menu from './image/menu.png'
import login from './image/account.png'
import money from './image/save-money.png'
import search from './image/search.png'
import alert from './image/heart.png'
import notification from './image/bell.png'
import graph from './image/bar-chart.png'
import setting from './image/settings.png'
import help from './image/help.png'

import { NavLink } from 'react-router-dom'
const Sidebar = ({children}) =>{
    const menuItem=[
        {
            path:"/",
            name:<img src={menu} className='menu' alt='' width={40} height={40} />
           
            
        },
        {
            path:"/login",
            name:<img src={login} className='menu' alt='' width={40} height={40} />
           
           
        },
        {
            path:"/monetization",
            name:<img src={money} className='menu' alt='' width={40} height={40} />
            
           
        },
        {
            path:"/search",
            name:<img src={search} className='menu' alt='' width={40} height={40} />
            
           
        },
        {
            path:"/ads",
            name:<img src={alert} className='menu' alt='' width={40} height={40} />
           
           
        },
        {
            path:"/notification",
            name:<img src={notification} className='menu' alt='' width={40} height={40} />
            
           
        },
        {
            path:"/insights",
            name:<img src={graph} className='menu' alt='' width={40} height={40} />
           
           
        },
        {
            path:"/setting",
            name:<img src={setting} className='menu' alt='' width={40} height={40} />
           
           
        },
        {
            path:"/help",
            name:<img src={help} className='menu' alt='' width={40} height={40} />
           
           
           
        },
    ]
    
    return (
        <div className="container">
           <div  className="sidebar">
               
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                          
                           <div  className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};
export default Sidebar