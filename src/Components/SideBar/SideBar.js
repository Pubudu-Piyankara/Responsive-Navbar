import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import * as Falcons from 'react-icons/fa';
import * as Ailcons from 'react-icons/ai';
import { SidebarData } from './SideBarData';

function SideBar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
          <div className="navbar bg-green-300 h-16 flex justify-start items-center">
            <Link to="#" className="menu-bars ml-8">
              <Falcons.FaBars onClick={showSidebar} className="text-2xl" />
            </Link>
          </div>
          <nav className={`${sidebar ? 'nav-menu active' : 'nav-menu'} bg-green-300 w-64 h-full flex justify-center fixed top-0 left-0 transition-transform duration-350`}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle bg-green-300 w-full h-16 flex justify-start items-center">
                <Link to="#" className="menu-bars">
                  <Ailcons.AiOutlineClose className="text-2xl" />
                </Link>
              </li>
              {SidebarData.map((item, index) => (
                <li key={index} className={`${item.cName} nav-text`}>
                  <Link to={item.path} className="flex items-center text-black text-lg w-95 h-full">
                    {item.icon}
                    <span className="ml-4">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      );
}


export default SideBar