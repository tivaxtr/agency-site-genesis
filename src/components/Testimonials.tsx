import { Card } from "@/components/ui/card";

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
    <section className="py-24 bg-gradient-to-b from-robot-background to-black">
      <div className="container mx-auto px-4">
        <Card className="w-full bg-black/[0.96] relative overflow-hidden rounded-xl mb-12 p-8">
          <h2 className="text-4xl md:text-5xl font-playfair text-center mb-16 text-white">Müşteri Hikayeleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-black/70 p-8 rounded-2xl shadow-lg hover:shadow-robot-purple/20 transition-all duration-300 flex items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-50 mr-4 overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-playfair text-lg text-robot-purple">{testimonial.author}</h3>
                  <p className="text-gray-400 text-sm mb-2">{testimonial.position}</p>
                  <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

export default Testimonials;
