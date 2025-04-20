
export function Services() {
  const services = [
    {
      id: 1,
      title: "AI Destekli Pazarlama",
      description: "GPT-4 ve özel yapay zeka modelleri ile markanızın hikayesini analiz ediyor, hedef kitlenizle duygusal bağ kuracak stratejiler geliştiriyorum",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format"
    },
    {
      id: 2,
      title: "Büyüme Ortaklığı",
      description: "Başarınız benim başarım. Yapay zeka ile hızlandırılmış büyüme sürecinize ortak oluyorum",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format"
    },
    {
      id: 3,
      title: "AI Görsel Tasarım",
      description: "Stable Diffusion ve DALL-E ile markanızın Instagram profilini görselleştiriyor, geleceğe dair net bir vizyon sunuyorum",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-playfair mb-4">Hizmetlerimiz</h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-center">
          Her marka için özel olarak tasarlanmış duygusal pazarlama stratejileri geliştiriyoruz. 
          Markanızı büyütürken, sizinle birlikte büyüyoruz.
        </p>
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
