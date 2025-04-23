
import { Calendar, Image, TrendingUp, Brain, Cpu, Database } from "lucide-react";

export function RecentWorks() {
  const works = [
    {
      id: 1,
      icon: <Calendar size={64} className="text-robot-purple mb-6" />,
      title: "Kişiye Özel İçerik Takvimi",
      desc: "Markanızın hedef kitlesine özel, güçlü etkileşim odaklı içerik takvimleri oluşturuyorum.",
    },
    {
      id: 2,
      icon: <Image size={64} className="text-robot-purple mb-6" />,
      title: "Yapay Zeka ile Görsel Üretimi",
      desc: "Hızlı ve özgün sosyal medya görsellerini yapay zeka ile dakikalar içinde hazırlıyorum.",
    },
    {
      id: 3,
      icon: <TrendingUp size={64} className="text-robot-purple mb-6" />,
      title: "Gerçek Zamanlı Trend Analizi",
      desc: "Trend analizleriyle öne çıkan, markanızı sektörün gündemine taşıyan içerikler sunuyorum.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-robot-background to-black" id="works">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-playfair mb-12 animate-fade-in text-white">Son Çalışmalarım</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <div key={work.id} className="group p-8 rounded-2xl bg-black/50 shadow-lg hover:shadow-robot-purple/20 transition-all duration-300 animate-fade-in">
              <div className="flex flex-col items-center text-center">
                {work.icon}
                <h3 className="text-robot-purple text-xl font-playfair mb-3">{work.title}</h3>
                <p className="text-gray-300">{work.desc}</p>
                <div className="h-1 w-0 group-hover:w-1/2 bg-robot-purple mt-4 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
