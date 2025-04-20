
import { Button } from "./ui/button";
import { ArrowRight, Zap, Bot } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-gray-50 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-purple-600 mb-4 animate-fade-in">
            <Bot size={24} />
            <p>Yapay Zeka Destekli Sosyal Medya Yönetimi</p>
            <Zap size={24} />
          </div>
          <h1 className="text-[5rem] md:text-[8rem] leading-none font-playfair animate-fade-in">
            Ömür Can
            <br />
            Ayhan
          </h1>
          <p className="mt-8 text-lg text-gray-600 max-w-xl mx-auto animate-fade-in">
            Markanızı büyütmek için yapay zeka destekli duygusal pazarlama stratejileri geliştiriyorum. 
            Sıfır kod bilgisiyle bile, yapay zeka ile harikalar yaratabilirsiniz.
          </p>
          <div className="mt-12 space-y-4 animate-fade-in">
            <Button size="lg" className="group">
              Projenizi Başlatın
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="mt-16 space-y-4 animate-fade-in">
            <p className="text-sm text-gray-500">Merkez</p>
            <p className="text-xl font-playfair">Bursa, Türkiye</p>
          </div>
        </div>
      </div>
    </section>
  );
}
