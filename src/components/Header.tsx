
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-playfair font-bold">
          Ömür Sosyal Medya Uzmanı
        </a>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-gray-600 transition-colors">HAKKIMDA</a>
          <a href="#works" className="hover:text-gray-600 transition-colors">ÇALIŞMALARIM</a>
          <a href="#ai-processes" className="hover:text-gray-600 transition-colors">YAPAY ZEKA SÜREÇLERİ</a>
          <a href="#references" className="hover:text-gray-600 transition-colors">REFERANSLAR</a>
          <a href="#contact" className="hover:text-gray-600 transition-colors">İLETİŞİM</a>
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
