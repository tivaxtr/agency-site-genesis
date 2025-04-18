
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-playfair font-bold">
          Ömür Sosyal Medya
        </a>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#shop" className="hover:text-gray-600 transition-colors">MAĞAZA</a>
          <a href="#visit" className="hover:text-gray-600 transition-colors">ZİYARET</a>
          <a href="#about" className="hover:text-gray-600 transition-colors">HAKKIMIZDA</a>
          <a href="#news" className="hover:text-gray-600 transition-colors">HABERLER</a>
          <a href="#tools" className="hover:text-gray-600 transition-colors">HİZMETLER</a>
          <Button variant="outline" className="ml-4">İLETİŞİM</Button>
        </nav>

        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}
