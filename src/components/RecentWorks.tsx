
export function RecentWorks() {
  // Yeni Türkçe çalışmalar ve güncel görseller
  const works = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format",
      title: "Kişiye Özel İçerik Takvimi",
      desc: "Markanızın hedef kitlesine özel, güçlü etkileşim odaklı içerik takvimleri oluşturuyorum.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&auto=format",
      title: "Yapay Zeka ile Görsel Üretimi",
      desc: "Hızlı ve özgün sosyal medya görsellerini yapay zeka ile dakikalar içinde hazırlıyorum.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&auto=format",
      title: "Gerçek Zamanlı Trend Analizi",
      desc: "Trend analizleriyle öne çıkan, markanızı sektörün gündemine taşıyan içerikler sunuyorum.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="works">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-playfair mb-12 animate-fade-in">Son Çalışmalarım</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <div key={work.id} className="group relative overflow-hidden rounded-2xl shadow hover:shadow-lg transition-shadow animate-fade-in">
              <img 
                src={work.image} 
                alt={work.title}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-col p-4">
                <h3 className="text-white text-xl font-playfair mb-2">{work.title}</h3>
                <p className="text-gray-200 text-center">{work.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
