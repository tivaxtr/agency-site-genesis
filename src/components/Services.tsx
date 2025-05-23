import { Bot, TrendingUp, Palette } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Services() {
  const services = [
    {
      id: 1,
      title: "AI Destekli Pazarlama",
      description: "GPT-4 ve özel yapay zeka modelleri ile markanızın hikayesini analiz ediyor, hedef kitlenizle duygusal bağ kuracak stratejiler geliştiriyorum",
      icon: <Bot size={48} className="text-robot-purple mb-6" />
    },
    {
      id: 2,
      title: "Büyüme Ortaklığı",
      description: "Başarınız benim başarım. Yapay zeka ile hızlandırılmış büyüme sürecinize ortak oluyorum",
      icon: <TrendingUp size={48} className="text-robot-purple mb-6" />
    },
    {
      id: 3,
      title: "AI Görsel Tasarım",
      description: "Stable Diffusion ve DALL-E ile markanızın Instagram profilini görselleştiriyor, geleceğe dair net bir vizyon sunuyorum",
      icon: <Palette size={48} className="text-robot-purple mb-6" />
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-robot-background to-black">
      <div className="container mx-auto px-4">
        <Card className="w-full bg-black/[0.96] relative overflow-hidden rounded-xl mb-12 p-8">
          <h2 className="text-4xl md:text-5xl font-playfair mb-4 text-white text-center">Hizmetlerimiz</h2>
          <p className="text-gray-300 mb-12 max-w-3xl mx-auto text-center">
            Her marka için özel olarak tasarlanmış duygusal pazarlama stratejileri geliştiriyoruz. 
            Markanızı büyütürken, sizinle birlikte büyüyoruz.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group p-8 rounded-2xl bg-black/70 shadow-lg flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-playfair mb-3 text-robot-purple">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

export default Services;
