
export function RecentWorks() {
  const works = [
    {
      id: 1,
      image: "/lovable-uploads/1e2da65b-1541-48b4-8abf-2ac892ecffd7.png",
      title: "Digital Art Piece",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800&auto=format",
      title: "Modern Sculpture",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format",
      title: "Abstract Design",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-playfair mb-12">Recent Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <div key={work.id} className="group relative overflow-hidden rounded-2xl">
              <img 
                src={work.image} 
                alt={work.title}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <h3 className="text-white text-xl font-playfair">{work.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
