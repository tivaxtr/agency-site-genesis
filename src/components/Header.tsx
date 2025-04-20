
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-playfair font-bold">
          Ömür Sosyal Medya Uzmanı
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/hakkimda" className="hover:text-gray-600 transition-colors">HAKKIMDA</Link>
          <Link to="/calismalarim" className="hover:text-gray-600 transition-colors">ÇALIŞMALARIM</Link>
          <Link to="/yapay-zeka-surecleri" className="hover:text-gray-600 transition-colors">YAPAY ZEKA SÜREÇLERİ</Link>
          <Link to="/referanslar" className="hover:text-gray-600 transition-colors">REFERANSLAR</Link>
          <Link to="/iletisim" className="hover:text-gray-600 transition-colors">İLETİŞİM</Link>
        </nav>

        <span className="md:hidden">
          <Menu size={24} />
        </span>
      </div>
      <div className="w-full bg-gradient-to-r from-purple-100 to-blue-100 text-center py-1 text-xs text-gray-800">
        Bu web sitesi sıfır kod bilgisiyle, tamamen yapay zeka araçları kullanılarak hazırlanmıştır.
      </div>
    </header>
  );
}
