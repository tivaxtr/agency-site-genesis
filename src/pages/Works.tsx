
import { Helmet } from "react-helmet-async";

export default function Works() {
  const works = [
    {
      id: 1,
      title: "E-ticaret Marka Stratejisi",
      description: "Yapay zeka destekli içerik stratejisi ile 3 ayda %150 etkileşim artışı",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format"
    },
    {
      id: 2,
      title: "Restoran Zinciri Sosyal Medya Yönetimi",
      description: "AI görsel üretimi ile aylık içerik üretim süresinde %75 azalma",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format"
    },
    {
      id: 3,
      title: "Kozmetik Markası Dönüşümü",
      description: "GPT-4 destekli kopya yazımı ile satış dönüşüm oranında %80 artış",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&auto=format"
    }
  ];

  return (
    <div className="pt-32 min-h-screen bg-gradient-to-b from-gray-50">
      <Helmet>
        <title>Çalışmalarım | Ömür Sosyal Medya Uzmanı</title>
        <meta name="description" content="Yapay zeka destekli sosyal medya projeleri ve başarı hikayeleri. AI ile markaların dijital dönüşüm süreçleri." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-playfair mb-12">Çalışmalarım</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <div key={work.id} className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={work.image}
                alt={work.title}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                <h3 className="text-white text-xl font-playfair mb-4">{work.title}</h3>
                <p className="text-gray-200">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
