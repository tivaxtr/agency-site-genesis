
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <div className="pt-32 min-h-screen bg-gradient-to-b from-gray-50">
      <Helmet>
        <title>Hakkımda | Ömür Sosyal Medya Uzmanı</title>
        <meta name="description" content="Yapay zeka destekli sosyal medya ve duygusal pazarlama uzmanı Ömür Can Ayhan hakkında detaylı bilgi. AI teknolojileri ile markaları büyütüyorum." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-playfair mb-8">Hakkımda</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format" 
              alt="Ömür Can Ayhan - Sosyal Medya Uzmanı"
              className="rounded-2xl shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              Merhaba, ben Ömür Can Ayhan. Yapay zeka destekli sosyal medya ve duygusal pazarlama stratejileri geliştirerek markaların dijital varlıklarını güçlendiriyorum.
            </p>
            
            <p className="text-lg text-gray-700">
              GPT-4, DALL-E ve Stable Diffusion gibi yapay zeka araçlarını kullanarak, markaların hedef kitleleriyle duygusal bağ kurmalarına yardımcı oluyorum. Bu sayede geleneksel yöntemlerle haftalarca sürecek süreçleri saatler içinde tamamlıyorum.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-3xl font-playfair mb-2">250+</h3>
                <p className="text-gray-600">Başarılı Proje</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-3xl font-playfair mb-2">45+</h3>
                <p className="text-gray-600">Mutlu Müşteri</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
