import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuItems } from '../services/listItems';
import { ChevronDown } from 'lucide-react';

const Navlist = () => {
  const [openSubMenuId, setOpenSubMenuId] = useState(null);

  const toggleSubMenu = (id) => {
    setOpenSubMenuId(openSubMenuId === id ? null : id);
  };

  return (
    <ul className="md:text-[16px] md:font-semibold md:flex md:justify-center md:items-center md:gap-10">
      {menuItems.map((item) => {
        const hasChildren = item.childItems.length > 0;

        return (
          <li key={item.id} className="relative group ">
            
            <div className="flex items-center gap-2">
              <Link to={item.link} className="hover:text-blue-600 flex items-center gap-1">
                <span className='md:hover:text-accent transition-colors duration-300'>{item.icon}</span>
                <span className='md:hover:text-accent transition-colors duration-300'>{item.item}</span>
              </Link>

              {/* Flèche si sous-menu */}
              {hasChildren && (
                <button onClick={() => toggleSubMenu(item.id)} className="text-sm ml-1 md:hover:text-accent transition-colors duration-300">
                  <ChevronDown/>
                </button>
              )}
            </div>

            {/* Sous-menu */}
            {hasChildren && openSubMenuId === item.id && (
              <ul className="md:w-60 md:absolute md:top-16 md:left-0 md:px-2 md:py-4 md:flex md:flex-col md:items-start justify-start md:gap-4 md:bg-white/90 md:bg-blur md:rounded-xl md:shadow-md  md:z-50">
                {item.childItems.map((sub) => (
                  <li key={sub.id} className="hover:text-accent md:font-semibold md:text-[16px] md:py-2 md:px-4 md:w-full">
                    <Link
                    to={sub.link}
                      className="block px-4 py-2 text-sm text-black"
                     >
                      <span>{sub.icon}</span> {sub.item}
                     </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Navlist;
