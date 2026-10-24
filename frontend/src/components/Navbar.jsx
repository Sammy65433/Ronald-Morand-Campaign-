import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";

import LanguageButtons from "./LanguageButtons";
import "../styles/Navbar.css";

function Navbar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/about", label: t("about") },
    { to: "/community", label: t("community") },
    { to: "/donate", label: t("donate") },
    { to: "/contact", label: t("contact") },
  ];

  return (
    <nav className="navbar sticky top-0 z-[1000] text-white" aria-label="Main navigation">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="font-['Outfit'] text-lg font-extrabold text-white sm:text-xl"
          aria-label={t("home")}
        >
          {t("home")}
        </Link>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/50 bg-[#00209f]/50 text-white md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-nav-links"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>

        <div
          id="main-nav-links"
          className={`${menuOpen ? "flex" : "hidden"} w-full flex-col gap-3 border-t border-white/30 pt-4 md:flex md:w-auto md:flex-row md:items-center md:gap-6 md:border-0 md:pt-0`}
        >
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-bold transition hover:bg-white/20 ${
                  isActive ? "bg-white text-[#00209f]" : "text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          <div className="nav-language border-t border-white/30 pt-3 md:ml-2 md:border-l md:border-t-0 md:pl-4 md:pt-0">
            <LanguageButtons />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
