
export function RecentWorks() {
  const works = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format",
      title: "Yapay Zeka ile Grafik Tasarım",
      desc: "Prompt bazlı hızlı ve özgün grafik üretimi."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&auto=format",
      title: "Duygusal İçerik Planları",
      desc: "Haftalara bölünmüş, duygusal tetikleyicilere göre optimize edilmiş sosyal medya takvimi."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format",
      title: "Instagram Profil Simülasyonu",
      desc: "Markanız için özel, önceden oluşturulmuş Instagram profil örneği."
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
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

