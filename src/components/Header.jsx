import React, { useState } from "react";

export default function Header() {
  const [menuOn, setMenuOn] = useState(false)
  const menuOnStyle = 'h-screen absolute top-0 right-0 z-10'
  let menuStyle = menuOn ? menuOnStyle : ''

  const handleMenu = () => {
    setMenuOn(prev => !prev)
  }
  return (
    <div className="border-4 flex flex-row justify-between relative">
      <div className="px-4">Logo</div>
      <div className={`sm:static px-4 sm:h-auto bg-slate-400 flex flex-col w-full ${menuStyle}`}>
        <button className="sm:hidden self-end" onClick={handleMenu}>Hamburger</button>
        <nav className={`${menuOn ? '' : 'hidden'} flex sm:flex flex-col sm:flex-row items-center sm:gap-4 sm:self-end`}>
          <a>Action</a>
          <a>Action</a>
          <a>Action</a>
        </nav>
      </div>
    </div>
  );
}
