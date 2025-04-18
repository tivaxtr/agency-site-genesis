
export function Expression() {
  const categories = [
    {
      id: 1,
      title: "Sculpture Art",
      image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&auto=format",
    },
    {
      id: 2,
      title: "Printmaking Art",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&auto=format",
    },
    {
      id: 3,
      title: "Calligraphy Art",
      image: "https://images.unsplash.com/photo-1519376867695-9be36ec35c71?w=800&auto=format",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-playfair mb-12">Our Expression</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group relative overflow-hidden rounded-2xl">
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <h3 className="text-white text-xl font-playfair">{category.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
