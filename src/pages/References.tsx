import { Helmet } from "react-helmet-async";
import { Star, UserCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function References() {
  const testimonials = [
    {
      id: 1,
      name: "Ayşe Yılmaz",
      company: "ModaVibe",
      icon: <UserCircle2 size={48} className="text-robot-purple" />,
      content: "Yapay zeka destekli içerik stratejisi sayesinde Instagram takipçilerimiz 3 ayda %200 arttı."
    },
    {
      id: 2,
      name: "Mehmet Kaya",
      company: "TechStart",
      icon: <UserCircle2 size={48} className="text-robot-purple" />,
      content: "Ömür'ün AI odaklı yaklaşımı sayesinde içerik üretim süremiz %70 azaldı ve etkileşimlerimiz arttı."
    },
    {
      id: 3,
      name: "Zeynep Demir",
      company: "EcoBeauty",
      icon: <UserCircle2 size={48} className="text-robot-purple" />,
      content: "Markamızın dijital dönüşümünde yapay zeka kullanımı bize büyük bir rekabet avantajı sağladı."
    }
  ];

  return (
    <div className="pt-32 min-h-screen bg-gradient-to-b from-robot-background to-black">
      <Helmet>
        <title>Referanslar | Ömür Sosyal Medya Uzmanı</title>
        <meta name="description" content="Mutlu müşterilerimizin başarı hikayeleri. Yapay zeka destekli sosyal medya yönetimi ile elde edilen sonuçlar." />
      </Helmet>
      <div className="container mx-auto px-4 py-12">
        <Card className="w-full bg-black/[0.96] relative overflow-hidden rounded-xl mb-12 p-8">
          <h1 className="text-4xl md:text-5xl font-playfair mb-12 text-white text-center">Referanslar</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-black/70 p-8 rounded-2xl shadow-lg flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-50 mr-4">
                    {testimonial.icon}
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg text-robot-purple">{testimonial.name}</h3>
                    <p className="text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card className="w-full bg-black/[0.96] relative overflow-hidden rounded-xl p-8 mt-16">
          <h2 className="text-3xl font-playfair mb-8 text-white text-center">Başarı Metriklerimiz</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-black/70 rounded-xl">
              <h3 className="text-3xl font-playfair text-purple-600 mb-2">45+</h3>
              <p className="text-gray-300">Mutlu Müşteri</p>
            </div>
            <div className="p-6 bg-black/70 rounded-xl">
              <h3 className="text-3xl font-playfair text-purple-600 mb-2">250+</h3>
              <p className="text-gray-300">Başarılı Proje</p>
            </div>
            <div className="p-6 bg-black/70 rounded-xl">
              <h3 className="text-3xl font-playfair text-purple-600 mb-2">%180</h3>
              <p className="text-gray-300">Ortalama Büyüme</p>
            </div>
            <div className="p-6 bg-black/70 rounded-xl">
              <h3 className="text-3xl font-playfair text-purple-600 mb-2">%75</h3>
              <p className="text-gray-300">Zaman Tasarrufu</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
