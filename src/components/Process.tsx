import { Card } from "@/components/ui/card";

export function Process() {
  const steps = [
    {
      id: 1,
      title: "AI Marka Analizi",
      description: "Yapay zeka ile markanızın özünü ve hedef kitlenizin duygusal ihtiyaçlarını dakikalar içinde analiz ediyorum",
      number: "01"
    },
    {
      id: 2,
      title: "Hızlı Planlama",
      description: "GPT-4 ile içerik planını ve duygusal tetikleyicileri saatler içinde belirliyorum",
      number: "02"
    },
    {
      id: 3,
      title: "AI Görsel Üretimi",
      description: "Stable Diffusion ile markanıza özel görseller ve Instagram simülasyonunu anında oluşturuyorum",
      number: "03"
    },
    {
      id: 4,
      title: "Sonuç Odaklı Takip",
      description: "Yapay zeka destekli analiz araçlarıyla performansı gerçek zamanlı ölçümlüyorum",
      number: "04"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-robot-background to-black">
      <div className="container mx-auto px-4">
        <Card className="w-full bg-black/[0.96] relative overflow-hidden rounded-xl mb-12 p-8">
          <h2 className="text-4xl md:text-5xl font-playfair text-center mb-16 text-white">Çalışma Sürecimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step) => (
              <div key={step.id} className="relative group bg-black/70 rounded-2xl p-8 flex flex-col items-center text-center">
                <div className="text-8xl font-playfair text-gray-100 absolute -top-10 -left-6 z-0 opacity-30">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-playfair mb-4 group-hover:text-purple-600 transition-colors text-robot-purple">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

export default Process;
