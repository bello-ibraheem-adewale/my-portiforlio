// src/contexts/NavbarContext.js
import React, { createContext, useState } from 'react';

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <NavbarContext.Provider value={{ menuOpen, toggleMenu }}>
      {children}
    </NavbarContext.Provider>
  );
};
