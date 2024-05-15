import Link from "next/link";
import "./style.css";
import React from "react";
import CommonBtn from "@/components/local/buttons/commonBtn/CommonBtn";

interface NavbarProps {} // Empty interface for clarity

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="navbar flex alignCenter justifyCenter width100 ">
      <div className="navContainer width95 maxWidth flex alignCenter spaceBtw ">
        <div className="logo">
          <Link href="/">
            <h1>3a Web Solutions</h1>
          </Link>
        </div>
        <div className="menu flex alignCenter justifyCenter gap2">
          <ul className="flex alignCenter justifyCenter gap2">
            <li>
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="">Services</Link>
            </li>
            <li>
              <Link href="">Packages</Link>
            </li>
            <li>
              <Link href="">About</Link>
            </li>
          </ul>
          <CommonBtn text="CONTACT" link="contact" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
