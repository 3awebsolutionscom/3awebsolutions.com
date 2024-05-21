import Link from "next/link";
import "./style.css";
import React from "react";

interface FooterProps {} // Empty interface for clarity

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="with100 flex alignCenter justifyCenter flexColumn">
      <div className="footer width95 maxWidth flex alignCenter justifyCenter">
        <div className="fLeft width50 flex alignStart justifyCenter gap4">
          <div className="fTab flex alignStart justifyCenter flexColumn">
            <h2>Reach us</h2>
            <Link href="" className="fMail">
              hello@3awebsolutions.com
            </Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="fTab flex alignStart justifyCenter flexColumn">
            <h2>Follow us</h2>
            <Link href="">LinkedIn</Link>
            <Link href="">Twitter</Link>
            <Link href="">Instagram</Link>
          </div>
          <div className="fTab flex alignStart justifyCenter flexColumn">
            <h2>Company</h2>
            <Link href="" className="fMail">
              info@3awebsolutions.com
            </Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
          </div>
        </div>
        <div className="fRight width50 flex alignCenter justifyCenter flexColumn">
          <h1>3a Web Solutions</h1>
          <p>- Powered By 3a Learning Solutions India Pvt. Ltd</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
