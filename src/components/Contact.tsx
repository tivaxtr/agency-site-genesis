
export function Contact() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-playfair mb-6">Birlikte Çalışalım</h2>
          <p className="text-lg text-gray-600 mb-12">
            Dijital varlığınızı dönüştürmeye hazır mısınız? Bizimle iletişime geçin.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-playfair mb-4">Adres</h3>
              <p className="text-gray-600">Nilüfer<br />Bursa, Türkiye</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-playfair mb-4">İletişim</h3>
              <p className="text-gray-600">info@omursosyal.com<br />+90 (555) 123-4567</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-playfair mb-4">Sosyal Medya</h3>
              <p className="text-gray-600">Instagram<br />Twitter</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
