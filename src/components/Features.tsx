import { Card } from "@/components/ui/card";

export function Features() {
  const features = [
    {
      id: 1,
      title: "Yapay Zeka Analizi",
      description: "GPT-4 ve özel AI modelleri ile markanıza en uygun duygusal tetikleyicilerin tespiti",
      icon: "🤖"
    },
    {
      id: 2,
      title: "Hızlı Sonuç",
      description: "Yapay zeka ile saatler içinde hazır içerik planı ve duygusal yolculuk haritası",
      icon: "⚡"
    },
    {
      id: 3,
      title: "Kar Ortaklığı",
      description: "Başarınıza ortak oluyorum - büyümeniz benim önceliğim",
      icon: "🤝"
    },
    {
      id: 4,
      title: "AI Görsel Tasarım",
      description: "Stable Diffusion ile markanıza özel görsel içerik ve Instagram profil simülasyonu",
      icon: "🎨"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-robot-background to-black">
      <div className="container mx-auto px-4">
        <Card className="w-full bg-black/[0.96] relative overflow-hidden rounded-xl mb-12 p-8">
          <h2 className="text-4xl md:text-5xl font-playfair text-center mb-16 text-white">Neler Sunuyorum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className="p-8 bg-black/70 rounded-2xl shadow-sm flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-playfair mb-3 text-robot-purple">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

export default Features;
