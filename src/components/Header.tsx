import { Card } from "@/components/ui/card";

export function Header() {
  return (
    <header className="w-full bg-black/[0.96] shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 flex items-center justify-between h-20 relative">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-playfair font-bold text-robot-purple tracking-tight">Ömür Can Ayhan</span>
        </div>
        <ul className="flex gap-6 items-center">
          <li><a href="#works" className="text-gray-300 hover:text-robot-accent transition-colors font-medium">Çalışmalar</a></li>
          <li><a href="#services" className="text-gray-300 hover:text-robot-accent transition-colors font-medium">Hizmetler</a></li>
          <li><a href="#ai-processes" className="text-gray-300 hover:text-robot-accent transition-colors font-medium">AI Süreçleri</a></li>
          <li><a href="#contact" className="text-gray-300 hover:text-robot-accent transition-colors font-medium">İletişim</a></li>
        </ul>
      </nav>
    </header>
  );
}
