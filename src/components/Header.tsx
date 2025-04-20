import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { to: "/hakkimda", label: "HAKKIMDA" },
    { to: "/calismalarim", label: "ÇALIŞMALARIM" },
    { to: "/yapay-zeka-surecleri", label: "YAPAY ZEKA SÜREÇLERİ" },
    { to: "/referanslar", label: "REFERANSLAR" },
    { to: "/iletisim", label: "İLETİŞİM" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-playfair font-bold">
          Ömür Sosyal Medya Uzmanı
        </NavLink>
        {/* Masaüstü Menü */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `hover:text-gray-600 transition-colors ${isActive ? "text-blue-600 font-bold" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        {/* Mobil Menü Butonu */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menüyü Aç/Kapat">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobil Menü */}
      {mobileOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-sm absolute top-full left-0 w-full flex flex-col items-center gap-4 py-4 shadow-lg z-50 animate-fade-in">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `block w-full text-center py-2 hover:text-gray-600 transition-colors ${isActive ? "text-blue-600 font-bold" : ""}`
              }
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
      <div className="w-full bg-gradient-to-r from-purple-100 to-blue-100 text-center py-1 text-xs text-gray-800">
        Bu web sitesi sıfır kod bilgisiyle, tamamen yapay zeka araçları kullanılarak hazırlanmıştır.
      </div>
    </header>
  );
}
