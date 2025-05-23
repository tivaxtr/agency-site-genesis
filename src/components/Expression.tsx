import { Lightbulb, Clock, PieChart, Palette, Brain, Code } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Expression() {
  const categories = [
    {
      id: 1,
      title: "Yapay Zeka Destekli Tasarım",
      icon: <Palette size={48} className="text-robot-purple mb-4" />,
      desc: "Dakikalar içinde özgün ve etkileyici tasarımlar, tamamen yapay zeka desteğiyle hazırlanır.",
    },
    {
      id: 2,
      title: "Hızlı İçerik Üretimi",
      icon: <Clock size={48} className="text-robot-purple mb-4" />,
      desc: "Birbirinden farklı ve yaratıcı içerikleri, zamandan tasarruf ederek hızlıca üretiyorum.",
    },
    {
      id: 3,
      title: "Stratejik Raporlama",
      icon: <PieChart size={48} className="text-robot-purple mb-4" />,
      desc: "Tüm süreçler şeffaf analizlerle raporlanır, başarı metrikleri netleşir.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-robot-background to-black" id="ai-processes">
      <div className="container mx-auto px-4">
        <Card className="w-full bg-black/[0.96] relative overflow-hidden rounded-xl mb-12 p-8">
          <h2 className="text-4xl md:text-5xl font-playfair mb-12 animate-fade-in text-white text-center">Neleri Farklı Yapıyorum?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.id} className="group p-8 rounded-2xl bg-black/70 shadow-lg hover:shadow-robot-purple/20 transition-all duration-300 animate-fade-in flex flex-col items-center text-center">
                {category.icon}
                <h3 className="text-robot-purple text-xl font-playfair mb-3">{category.title}</h3>
                <p className="text-gray-300">{category.desc}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

export default Expression;
