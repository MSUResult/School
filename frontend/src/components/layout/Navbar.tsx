import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import schoolLogo from "@/assets/school-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftMenu = [
    { label: "Academics", href: "/academics" },
    { label: "Login", href: "/login" },
    { label: "Ebooks", href: "/ebooks" },
    { label: "News", href: "/blog" },
  ];

  const centerMenu = [
    { label: "ACADEMIC", href: "/academics" },
    { label: "ABOUT", href: "/about" },
    { label: "ADMISSION", href: "/admission" },
    { label: "PROGRAMS", href: "/programs" },
    { label: "ATHLETIC", href: "/athletic" },
    { label: "GIVING", href: "/giving" },
  ];

  const rightMenu = [
    { label: "Facilities", href: "/facilities" },
    { label: "Contact", href: "/contact" },
    { label: "Login", href: "/login" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "navbar-glass py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Menu */}
          <div className="col-span-3 flex items-center gap-8">
            {leftMenu.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-sm font-medium transition-all ${
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Center - Logo & Main Menu */}
          <div className="col-span-6 flex flex-col items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 transition-transform hover:scale-105"
            >
              <img
                src={"/ILIKE.png"}
                alt="School Logo"
                className={`transition-all ${
                  isScrolled ? "h-11 w-11" : "h-14 w-14"
                }`}
              />
            </Link>
            <div className="flex items-center gap-10">
              {centerMenu.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-xs font-bold transition-all tracking-wider ${
                    isScrolled
                      ? "text-primary hover:text-accent"
                      : "text-white/95 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Menu */}
          <div className="col-span-3 flex items-center justify-end gap-8">
            {rightMenu.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-sm font-medium transition-all ${
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              className={`transition-all ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={"/ILIKE.png"} alt="School Logo" className="h-11 w-11" />
            <span
              className={`font-bold text-lg transition-colors ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              Asha Modern School
            </span>
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-white/80"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-4 navbar-glass rounded-xl p-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {[...leftMenu, ...centerMenu, ...rightMenu].map((item, index) => (
                <Link
                  key={`${item.label}-${index}`}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-border/50 last:border-0"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
