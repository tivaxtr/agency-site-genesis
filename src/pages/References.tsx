
import { Helmet } from "react-helmet-async";
import { Star } from "lucide-react";

export default function References() {
  const testimonials = [
    {
      id: 1,
      name: "Ayşe Yılmaz",
      company: "ModaVibe",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format",
      content: "Yapay zeka destekli içerik stratejisi sayesinde Instagram takipçilerimiz 3 ayda %200 arttı."
    },
    {
      id: 2,
      name: "Mehmet Kaya",
      company: "TechStart",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format",
      content: "Ömür'ün AI odaklı yaklaşımı sayesinde içerik üretim süremiz %70 azaldı ve etkileşimlerimiz arttı."
    },
    {
      id: 3,
      name: "Zeynep Demir",
      company: "EcoBeauty",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format",
      content: "Markamızın dijital dönüşümünde yapay zeka kullanımı bize büyük bir rekabet avantajı sağladı."
    }
  ];

  return (
    <div className="pt-32 min-h-screen bg-gradient-to-b from-gray-50">
      <Helmet>
        <title>Referanslar | Ömür Sosyal Medya Uzmanı</title>
        <meta name="description" content="Mutlu müşterilerimizin başarı hikayeleri. Yapay zeka destekli sosyal medya yönetimi ile elde edilen sonuçlar." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-playfair mb-12">Referanslar</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-playfair text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-playfair mb-8">Başarı Metriklerimiz</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-3xl font-playfair text-purple-600 mb-2">45+</h3>
              <p className="text-gray-600">Mutlu Müşteri</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-3xl font-playfair text-purple-600 mb-2">250+</h3>
              <p className="text-gray-600">Başarılı Proje</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-3xl font-playfair text-purple-600 mb-2">%180</h3>
              <p className="text-gray-600">Ortalama Büyüme</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-3xl font-playfair text-purple-600 mb-2">%75</h3>
              <p className="text-gray-600">Zaman Tasarrufu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
