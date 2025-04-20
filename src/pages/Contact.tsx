
import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin, Instagram, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-32 min-h-screen bg-gradient-to-b from-gray-50">
      <Helmet>
        <title>İletişim | Ömür Sosyal Medya Uzmanı</title>
        <meta name="description" content="Yapay zeka destekli sosyal medya yönetimi için iletişime geçin. Markanızı birlikte büyütelim." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-playfair mb-12">İletişim</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-playfair mb-6">Bizimle İletişime Geçin</h2>
              <p className="text-gray-600 mb-8">
                Markanızı yapay zeka ile büyütmek için hazırız. 
                Size özel stratejiler geliştirmek için hemen iletişime geçin.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-purple-600 mr-4" />
                <div>
                  <h3 className="font-medium">E-posta</h3>
                  <p className="text-gray-600">info@omursosyal.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="w-6 h-6 text-purple-600 mr-4" />
                <div>
                  <h3 className="font-medium">Telefon</h3>
                  <p className="text-gray-600">+90 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-purple-600 mr-4" />
                <div>
                  <h3 className="font-medium">Adres</h3>
                  <p className="text-gray-600">Nilüfer, Bursa</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-playfair mb-6">Mesaj Gönderin</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
