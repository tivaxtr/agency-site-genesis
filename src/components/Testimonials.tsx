
export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Bu ajansla çalışmak markamızı tamamen dönüştürdü. Yapay zeka destekli çözümleri devrim niteliğinde.",
      author: "Ayşe Yılmaz",
      position: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format"
    },
    {
      id: 2,
      quote: "Yaratıcı yaklaşımları ve detaylara gösterdikleri özen, projemizin pazarda öne çıkmasını sağladı.",
      author: "Mehmet Demir",
      position: "Pazarlama Direktörü, InnovateCo",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-playfair text-center mb-16">Müşteri Hikayeleri</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-playfair text-lg">{testimonial.author}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
