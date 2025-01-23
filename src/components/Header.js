import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Icons for menu toggle
import { useState } from "react";

import "../styles/header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); 
    };

    return (
        <nav className="navbar">
            {/* Logo Section */}
            <div>
                <img
                    src="https://media.licdn.com/dms/image/v2/D4E0BAQF6FMGS97z2-A/company-logo_200_200/company-logo_200_200/0/1681216046991?e=2147483647&v=beta&t=Og_X6ccG4OA8jKsvtvInDsyeypQ0Eu3oXV168-XHNaI"
                    className="logo"
                    alt="logo"
                />
            </div>

            {/* Menu Items */}
            <div className="logo-items">
                <h1 className="heading">Logo</h1>
                {/* Button to toggle menu on small devices */}
                <button className="menu-toggle" onClick={toggleMenu}>
                    {menuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </button>

                {/* Menu items: visible based on screen size or menuOpen */}
                <ul className={`items ${menuOpen ? "show" : ""}`}>
                    <li>SHOP</li>
                    <li>SKILLS</li>
                    <li>STORIES</li>
                    <li>ABOUT</li>
                    <li>CONTACT US</li>
                </ul>
            </div>

            {/* Icons Section */}
            <div className="icons">
                <FaSearch size={30} />
                <GrFavorite size={30} />
                <FaShoppingBag size={30} />
                <IoMdContact size={30} />
            </div>
        </nav>
    );
};

export default Header;
