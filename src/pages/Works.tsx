import { Helmet } from "react-helmet-async";
import { Briefcase, Utensils, Sparkles } from "lucide-react";

export default function Works() {
  const works = [
    {
      id: 1,
      title: "E-ticaret Marka Stratejisi",
      description: "Yapay zeka destekli içerik stratejisi ile 3 ayda %150 etkileşim artışı",
      icon: <Briefcase size={64} className="text-robot-purple mb-6" />
    },
    {
      id: 2,
      title: "Restoran Zinciri Sosyal Medya Yönetimi",
      description: "AI görsel üretimi ile aylık içerik üretim süresinde %75 azalma",
      icon: <Utensils size={64} className="text-robot-purple mb-6" />
    },
    {
      id: 3,
      title: "Kozmetik Markası Dönüşümü",
      description: "GPT-4 destekli kopya yazımı ile satış dönüşüm oranında %80 artış",
      icon: <Sparkles size={64} className="text-robot-purple mb-6" />
    }
  ];

  return (
    <div className="pt-32 min-h-screen bg-gradient-to-b from-gray-50">
      <Helmet>
        <title>Çalışmalarım | Ömür Sosyal Medya Uzmanı</title>
        <meta name="description" content="Yapay zeka destekli sosyal medya projeleri ve başarı hikayeleri. AI ile markaların dijital dönüşüm süreçleri." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-playfair mb-12">Çalışmalarım</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <div key={work.id} className="group relative overflow-hidden rounded-2xl shadow-lg bg-white flex flex-col items-center justify-center p-8 min-h-[400px]">
              <div className="mb-6">{work.icon}</div>
              <h3 className="text-xl font-playfair mb-4 text-robot-purple">{work.title}</h3>
              <p className="text-gray-700 text-center">{work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
