
export function Process() {
  const steps = [
    {
      id: 1,
      title: "Marka Analizi",
      description: "Markanızın özünü ve hedef kitlenizin duygusal ihtiyaçlarını derinlemesine analiz ediyoruz",
      number: "01"
    },
    {
      id: 2,
      title: "İçerik Planlaması",
      description: "4 haftalık detaylı içerik planı ile farklı duygusal tetikleyicileri test ediyoruz",
      number: "02"
    },
    {
      id: 3,
      title: "Görsel Tasarım",
      description: "Yapay zeka ile markanızın gelecekteki Instagram görünümünü tasarlıyoruz",
      number: "03"
    },
    {
      id: 4,
      title: "Uygulama ve Ölçüm",
      description: "Belirlenen stratejiyi uygulayıp, sonuçları haftalık olarak analiz ediyoruz",
      number: "04"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-playfair text-center mb-16">Çalışma Sürecimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step) => (
            <div key={step.id} className="relative group">
              <div className="text-8xl font-playfair text-gray-100 absolute -top-10 -left-6 z-0">
                {step.number}
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-playfair mb-4 group-hover:text-purple-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
