
export function Expression() {
  const categories = [
    {
      id: 1,
      title: "Yapay Zeka Destekli Tasarım",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format",
      desc: "Dakikalar içinde özgün ve etkileyici tasarımlar, tamamen yapay zeka desteğiyle hazırlanır.",
    },
    {
      id: 2,
      title: "Hızlı İçerik Üretimi",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&auto=format",
      desc: "Birbirinden farklı ve yaratıcı içerikleri, zamandan tasarruf ederek hızlıca üretiyorum.",
    },
    {
      id: 3,
      title: "Stratejik Raporlama",
      image: "https://images.unsplash.com/photo-1511203466129-824e631920d4?w=800&auto=format",
      desc: "Tüm süreçler şeffaf analizlerle raporlanır, başarı metrikleri netleşir.",
    },
  ];

  return (
    <section className="py-20" id="ai-processes">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-playfair mb-12 animate-fade-in">Neleri Farklı Yapıyorum?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group relative overflow-hidden rounded-2xl shadow hover:shadow-lg transition-shadow animate-fade-in">
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-col p-4">
                <h3 className="text-white text-xl font-playfair mb-2">{category.title}</h3>
                <p className="text-gray-200 text-center">{category.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
