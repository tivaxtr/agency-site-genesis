
export function Features() {
  const features = [
    {
      id: 1,
      title: "Duygusal Analiz",
      description: "Markanıza en uygun duygusal tetikleyicileri belirleme ve test etme",
      icon: "❤️"
    },
    {
      id: 2,
      title: "İçerik Takvimi",
      description: "4 haftalık detaylı içerik planı ve duygusal yolculuk haritası",
      icon: "📅"
    },
    {
      id: 3,
      title: "Kar Ortaklığı",
      description: "Başarınıza ortak oluyoruz - büyümeniz bizim önceliğimiz",
      icon: "🤝"
    },
    {
      id: 4,
      title: "Görsel Önizleme",
      description: "Yapay zeka ile Instagram profil görünümünüzün simülasyonu",
      icon: "🎨"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-playfair text-center mb-16">Neler Sunuyoruz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-playfair mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
