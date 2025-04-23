
import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#works", label: "Çalışmalar" },
    { href: "#services", label: "Hizmetler" },
    { href: "#ai-processes", label: "AI Süreçleri" },
    { href: "#contact", label: "İletişim" }
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="md:hidden p-2">
          <Menu className="h-6 w-6 text-gray-300" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-black/[0.96] border-robot-purple/20">
        <nav className="flex flex-col gap-4 mt-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-robot-accent transition-colors font-medium text-lg py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
