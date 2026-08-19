"use client";

import { Menu, X } from "lucide-react";
import SideMenu from "./SideMenu";
import { useState } from "react";

export default function MobileMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <Menu className="hover:text-dark-color md:hidden cursor-pointer hoverEffect" />
      </button>
      <div className="md:hidden ">
        <SideMenu isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}/>
      </div>
    </div>
  );
}
