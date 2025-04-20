
import { Helmet } from "react-helmet-async";
import { Bot, Zap, Brain, BarChart } from "lucide-react";

export default function AiProcesses() {
  const processes = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "GPT-4 İçerik Analizi",
      description: "Markanızın hedef kitlesine özel, duygu odaklı içerik stratejisi geliştirme"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Hızlı İçerik Üretimi",
      description: "Stable Diffusion ve DALL-E ile özgün görseller, dakikalar içinde hazır"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Duygusal Pazarlama",
      description: "Yapay zeka ile hedef kitlenizin duygusal tetikleyicilerinin analizi"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Performans Takibi",
      description: "AI destekli analiz araçlarıyla gerçek zamanlı başarı ölçümü"
    }
  ];

  return (
    <div className="pt-32 min-h-screen bg-gradient-to-b from-gray-50">
      <Helmet>
        <title>Yapay Zeka Süreçleri | Ömür Sosyal Medya Uzmanı</title>
        <meta name="description" content="Sosyal medya yönetiminde kullandığımız yapay zeka süreçleri. GPT-4, DALL-E ve Stable Diffusion ile marka büyütme stratejileri." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-playfair mb-12">Yapay Zeka Süreçlerimiz</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div key={index} className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="text-purple-600 mb-6">{process.icon}</div>
              <h3 className="text-xl font-playfair mb-4">{process.title}</h3>
              <p className="text-gray-600">{process.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-purple-50 rounded-2xl p-8">
          <h2 className="text-3xl font-playfair mb-6">Neden Yapay Zeka?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-700">
                Modern pazarlama dünyasında hız ve verimlilik çok önemli. Yapay zeka araçları sayesinde:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>İçerik üretim süreleri %75 azalıyor</li>
                <li>Hedef kitle analizi çok daha detaylı yapılıyor</li>
                <li>A/B testleri otomatik olarak yönetiliyor</li>
                <li>Performans ölçümleri gerçek zamanlı takip ediliyor</li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format" 
                alt="Yapay Zeka Süreçleri"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
