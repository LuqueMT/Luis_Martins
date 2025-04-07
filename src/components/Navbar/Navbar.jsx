"use client";
import Link from "next/link";
import "./navbar.css"
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useState }  from "react";

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <div className="nav-container">
            <header>
                <nav className="navbar">
                    <a href="https://luquemt.github.io/Luis_Martins/" className="logo-name">Nexus</a>
                    <ul className={`nav-items ${openMenu ? 'open' : ''}`}>
                        <li className="nav-item"><a href="https://luquemt.github.io/Luis_Martins/">Home</a></li>
                        <li className="nav-item"><Link href="certificados">Certificados</Link></li>
                        <li className="nav-item"><Link href="#LP">Landing Pages</Link></li>
                    </ul>
                    <button className="btn-mobile" onClick={()=> setOpenMenu(!openMenu)}>
                       {openMenu ? <FaXmark/> : <FaBars/>}
                    </button>
                    <Link href="/contatos">
                    <button className="btn-default">
                        Contatar
                    </button>
                    </Link>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
