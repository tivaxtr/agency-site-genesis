
export function About() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair mb-8">Duygusal Pazarlama Uzmanınız</h2>
            <p className="text-lg text-gray-600 mb-6">
              Ben Ömür Can Ayhan, duygusal pazarlama ve sosyal medya stratejisti. Bursa'da konumlanmış ajansımda, markaların büyümesine farklı bir yaklaşım getiriyorum.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Her markanın kendine özgü bir hikayesi ve hedef kitlesinde uyandırması gereken özel duygular var. Biz bu duyguları keşfediyor ve markanızı büyütmek için kullanıyoruz.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-3xl font-playfair mb-2">87%</h3>
                <p className="text-gray-600">Ortalama Etkileşim Artışı</p>
              </div>
              <div>
                <h3 className="text-3xl font-playfair mb-2">45+</h3>
                <p className="text-gray-600">Başarılı Ortaklık</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format" 
              alt="Our team"
              className="rounded-2xl w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
