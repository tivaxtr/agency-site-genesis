
import { Button } from "./ui/button";
import { ArrowRight, Bot, Zap } from "lucide-react";
import { SplineScene } from "./ui/SplineScene";
import { Card } from "./ui/card";
import { Spotlight } from "./ui/Spotlight";

export function Hero() {
  return (
    <section className="min-h-screen pt-24 md:pt-32 pb-20 bg-gradient-to-b from-gray-50 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="w-full bg-black/[0.96] relative overflow-hidden rounded-xl mb-12">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />
            
            <div className="flex flex-col md:flex-row h-full min-h-[500px]">
              {/* Left content */}
              <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-purple-400 mb-4">
                  <Bot className="hidden sm:block" size={24} />
                  <p className="text-sm sm:text-base">Yapay Zeka Destekli Sosyal Medya Yönetimi</p>
                  <Zap className="hidden sm:block" size={24} />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-playfair">
                  Ömür Can Ayhan
                </h1>
                <p className="mt-4 text-neutral-300 max-w-lg">
                  Markanızı büyütmek için yapay zeka destekli duygusal pazarlama stratejileri geliştiriyorum. 
                  Sıfır kod bilgisiyle bile, yapay zeka ile harikalar yaratabilirsiniz.
                </p>
                <div className="mt-8">
                  <Button size="lg" className="group">
                    Projenizi Başlatın
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Right content */}
              <div className="flex-1 relative">
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Card>

          <div className="text-center animate-fade-in">
            <p className="text-sm text-gray-500">Merkez</p>
            <p className="text-xl font-playfair">Bursa, Türkiye</p>
          </div>
        </div>
      </div>
    </section>
  );
}
