
import { Button } from "./ui/button";
import { ArrowRight, Bot, Zap } from "lucide-react";
import { SplineScene } from "./ui/SplineScene";
import { Card } from "./ui/card";
import { Spotlight } from "./ui/Spotlight";

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-5rem)] pt-12 md:pt-24 pb-12 md:pb-20 bg-gradient-to-b from-robot-background to-black flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="w-full bg-black/[0.96] relative overflow-hidden rounded-xl mb-12">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="#9b87f5"
            />
            
            <div className="flex flex-col md:flex-row h-full min-h-[500px]">
              <div className="flex-1 p-6 md:p-8 relative z-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-robot-purple mb-4">
                  <Bot className="w-5 h-5 md:w-6 md:h-6" />
                  <p className="text-sm sm:text-base">Yapay Zeka Destekli Sosyal Medya Yönetimi</p>
                  <Zap className="hidden sm:block w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-robot-purple to-robot-accent font-playfair">
                  Ömür Can Ayhan
                </h1>
                <p className="mt-4 text-sm md:text-base text-neutral-300 max-w-lg">
                  Markanızı büyütmek için yapay zeka destekli duygusal pazarlama stratejileri geliştiriyorum. 
                  Sıfır kod bilgisiyle bile, yapay zeka ile harikalar yaratabilirsiniz.
                </p>
                <div className="mt-6 md:mt-8">
                  <Button size="lg" className="w-full sm:w-auto group bg-robot-purple hover:bg-robot-darkPurple text-white">
                    Projenizi Başlatın
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              <div className="flex-1 relative h-[300px] md:h-auto">
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Card>

          <div className="text-center animate-fade-in">
            <p className="text-xs md:text-sm text-gray-400">Merkez</p>
            <p className="text-lg md:text-xl font-playfair text-robot-accent">Bursa, Türkiye</p>
          </div>
        </div>
      </div>
    </section>
  );
}
