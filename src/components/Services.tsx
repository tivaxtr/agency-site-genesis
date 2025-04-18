
export function Services() {
  const services = [
    {
      id: 1,
      title: "Yapay Zeka ile Görsel Üretimi",
      description: "Gelişmiş yapay zeka algoritmaları kullanarak etkileyici görseller oluşturun",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format"
    },
    {
      id: 2,
      title: "Dijital Pazarlama",
      description: "Dijital varlığınız için stratejik pazarlama çözümleri",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format"
    },
    {
      id: 3,
      title: "Marka Stratejisi",
      description: "Benzersiz marka kimliğinizi oluşturun ve geliştirin",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-playfair mb-12">Hizmetlerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-playfair mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
