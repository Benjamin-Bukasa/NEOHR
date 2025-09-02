import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import { menuItems } from '../services/navListItems';
import useMenuStore from '../stores/useMenuStore';

const Navlist = () => {
  const {
    openSubMenuId,
    setOpenSubMenuId,
    closeSubMenu,
  } = useMenuStore();

  const navRef = useRef(null);
  const location = useLocation();

  // Fermer le sous-menu au clic en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeSubMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeSubMenu]);

  // Fermer le sous-menu au changement de route
  useEffect(() => {
    closeSubMenu();
  }, [location.pathname, closeSubMenu]);

  return (
    <ul
      ref={navRef}
      className="md:text-[16px] md:font-semibold md:flex md:justify-center md:items-center md:gap-10"
    >
      {menuItems.map((item) => {
        const hasChildren = item.childItems.length > 0;
        const isOpen = openSubMenuId === item.id;

        return (
          <li
            key={item.id}
            className="relative group text-[16px] text-textSecondary font-medium"
          >
            <div className="flex items-center gap-2">

              {/* Lien principal (ferme aussi le menu au click) */}
              <Link
                to={item.link}
                onClick={() => closeSubMenu()}
                className="hover:text-blue-600 flex items-center gap-1"
              >
                <span className="hover:text-textLightMode transition-colors duration-300">
                  {item.icon}
                </span>
                <span className="hover:text-textLightMode transition-colors duration-300">
                  {item.item}
                </span>
              </Link>

              {/* Bouton pour ouvrir le sous-menu */}
              {hasChildren && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenSubMenuId(item.id);
                  }}
                  className="ml-1 transition-transform duration-300"
                >
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-fontText' : ''
                    }`}
                  />
                </button>
              )}
            </div>

            {/* 🔽 Sous-menu animé */}
            {hasChildren && isOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="md:w-[300px] md:absolute md:top-16 md:left-0 md:px-1 md:py-1 md:flex md:flex-col md:items-start justify-start md:gap-2 md:bg-white/90 md:bg-blur md:rounded-xl md:shadow-md md:z-50 border border-neutral-300"
              >
                {item.childItems.map((sub) => (
                  <li
                    key={sub.id}
                    className="hover:text-accent md:font-semibold md:text-[18px] md:py-1 md:px-1 md:w-full"
                  >
                    <Link
                      to={sub.link}
                      onClick={() => closeSubMenu()}
                      className="px-4 py-2 text-[16px] font-medium text-textSecondary hover:bg-neutral-200 hover:text-textLightMode rounded-md transition-colors duration-300 flex items-center gap-1"
                    >
                      <span>{sub.icon}</span>
                      {sub.item}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Navlist;
