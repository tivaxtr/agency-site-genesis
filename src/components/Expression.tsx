
export function Expression() {
  const categories = [
    {
      id: 1,
      title: "Hızlı Dijital Tasarım",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format",
      desc: "Yapay zeka ile özgün görsellerin dakikalar içinde hazırlaması."
    },
    {
      id: 2,
      title: "İçerik Stratejisi",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format",
      desc: "Markaya özel test edilmiş içerik stratejileri."
    },
    {
      id: 3,
      title: "Kar Ortaklığı Modeli",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format",
      desc: "Büyümenize tamamen ortak, samimi bir işbirliği süreci."
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-playfair mb-12 animate-fade-in">Neler Sunuyorum?</h2>
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

