import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../assets/Home/secai_white_with_text.svg";
import MagicalButton from "./MagicalButton";

const menuData = [
  { id: 1, title: "About", path: "#about" },
  { id: 3, title: "Speakers", path: "#speakers" },
  { id: 2, title: "Agenda", path: "#agenda" },
  { id: 5, title: "FAQs", path: "#faqs" },
  { id: 4, title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleStickyNavbar = () => {
      setSticky(window.scrollY >= 80);
    };
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex items-center min-h-24 fixed max-w-[100vw] w-full transition-colors duration-300 ${
          sticky
            ? "bg-black/10 backdrop-blur-sm text-white"
            : "bg-transparent text-white"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <RouterLink to="/" className="text-2xl md:text-4xl lg:text-5xl font-bold">
            <img src={logo} alt="" className="h-20" />
          </RouterLink>

          <div className="flex gap-2">
            <button
              onClick={toggleNavbar}
              className="lg:hidden px-3 py-2 border rounded"
            >
              &#9776;
            </button>
          </div>

          <nav className="hidden lg:flex lg:items-center justify-center">
            <ul className="lg:flex lg:space-x-8 items-center">
              {menuData.map((menuItem) => (
                <li key={menuItem.id}>
                  <a
                    href={menuItem.path}
                    className={`block py-2 px-4 ${
                      sticky ? "text-white" : "text-white"
                    }`}
                  >
                    {menuItem.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:block">
            <MagicalButton variant="white" />
          </div>
        </div>
      </header>

      {/* Popup Navigation for Smaller Screens */}
      {navbarOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-start pt-20">
          <div className="bg-dark border-2 border-white w-full max-w-sm rounded-lg shadow-lg p-6">
            <nav className="flex flex-col justify-center items-center relative">
              <div className="flex justify-end w-full">
                <button
                  onClick={closeNavbar}
                  className="text-black font-bold text-3xl bg-white py-2 px-4 rounded-full fixed top-4 right-4"
                >
                  &times;
                </button>
              </div>
              <ul className="space-y-4 w-full flex flex-col justify-center text-white items-center">
                <MagicalButton variant="white" />
                {menuData.map((menuItem) => (
                  <li key={menuItem.id}>
                    <a
                      href={menuItem.path}
                      className={`block py-2 px-4 ${
                        location.pathname === menuItem.path
                          ? "font-semibold"
                          : ""
                      }`}
                      onClick={closeNavbar}
                    >
                      {menuItem.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;