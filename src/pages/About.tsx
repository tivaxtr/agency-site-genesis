import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <div className="pt-32 min-h-screen bg-gradient-to-b from-gray-50">
      <Helmet>
        <title>Hakkımda | Ömür Sosyal Medya Uzmanı</title>
        <meta name="description" content="Yapay zeka destekli sosyal medya ve duygusal pazarlama uzmanı Ömür Can Ayhan hakkında detaylı bilgi. AI teknolojileri ile markaları büyütüyorum." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-playfair mb-8 text-center">Hakkımda</h1>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <img 
              src="/lovable-uploads/1e2da65b-1541-48b4-8abf-2ac892ecffd7.png" 
              alt="Ömür Can Ayhan - Dijital Pazarlama ve Sosyal Medya Uzmanı, profesyonel iş dünyası portresi"
              className="rounded-2xl shadow-2xl w-full max-w-md mb-6 md:mb-0 border-4 border-purple-100 object-cover object-center"
            />
            <div className="flex gap-4 mt-6">
              <div className="bg-white rounded-xl shadow p-4 text-center">
                <h3 className="text-2xl font-bold text-purple-700 mb-1">250+</h3>
                <p className="text-gray-600 text-sm">Başarılı Proje</p>
              </div>
              <div className="bg-white rounded-xl shadow p-4 text-center">
                <h3 className="text-2xl font-bold text-purple-700 mb-1">45+</h3>
                <p className="text-gray-600 text-sm">Mutlu Müşteri</p>
              </div>
              <div className="bg-white rounded-xl shadow p-4 text-center">
                <h3 className="text-2xl font-bold text-purple-700 mb-1">10+</h3>
                <p className="text-gray-600 text-sm">Yıl Tecrübe</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar bg-white/80 rounded-2xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-2">Kimim?</h2>
              <p className="text-gray-700 text-base">
                Merhaba! Ben Ömür Can Ayhan, sosyal medya ve dijital pazarlama alanında uzmanlaşmış bir danışmanım. 10 yılı aşkın süredir markaların dijital dünyada öne çıkmasını sağlıyor, yenilikçi ve veri odaklı stratejiler geliştiriyorum. Özellikle yapay zeka destekli içerik üretimi, duygusal pazarlama ve marka hikayesi oluşturma konularında derin bir tecrübeye sahibim.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-2">Vizyonum</h2>
              <p className="text-gray-700 text-base">
                Vizyonum; teknolojinin sunduğu tüm olanakları kullanarak, markaların dijitalde sadece var olmasını değil, aynı zamanda fark yaratmasını sağlamak. Her işbirliğinde şeffaflık, güven ve sürdürülebilir başarıyı ön planda tutuyorum.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-2">Uzmanlık Alanlarım</h2>
              <ul className="list-disc pl-6 text-gray-700 text-base space-y-1">
                <li>Yapay zeka destekli içerik üretimi</li>
                <li>SEO uyumlu metin ve blog yazarlığı</li>
                <li>Sosyal medya yönetimi ve reklam optimizasyonu</li>
                <li>Marka hikayesi ve duygusal pazarlama</li>
                <li>Görsel tasarım ve kreatif kampanyalar</li>
                <li>Veri analitiği ve performans raporlaması</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-2">Neden Yapay Zeka?</h2>
              <p className="text-gray-700 text-base">
                Dijital pazarlama yolculuğumda, GPT-4, DALL-E ve Stable Diffusion gibi ileri seviye yapay zeka araçlarını kullanarak, markaların hedef kitleleriyle daha güçlü ve kalıcı bağlar kurmasına yardımcı oluyorum. Her projede, markanın özgün değerlerini ve hedef kitlesinin duygusal ihtiyaçlarını analiz ederek, kişiselleştirilmiş ve etkili kampanyalar tasarlıyorum.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-2">SEO ve İçerik Stratejisi</h2>
              <p className="text-gray-700 text-base">
                SEO uyumlu içerik üretimi, sosyal medya yönetimi, görsel tasarım ve reklam optimizasyonu gibi alanlarda uçtan uca hizmet sunuyorum. Yapay zeka ile desteklenen analizler sayesinde, markanızın dijitaldeki görünürlüğünü artırıyor, dönüşüm oranlarını yükseltiyor ve sürdürülebilir büyüme sağlıyorum.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-2">Değerlerim</h2>
              <ul className="list-disc pl-6 text-gray-700 text-base space-y-1">
                <li>Şeffaflık ve güven</li>
                <li>Yaratıcılık ve yenilikçilik</li>
                <li>Sürekli öğrenme ve gelişim</li>
                <li>Müşteri odaklılık</li>
                <li>Sürdürülebilir başarı</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-purple-700 mb-2">Birlikte Çalışalım</h2>
              <p className="text-gray-700 text-base">
                Eğer siz de markanızı dijitalde bir adım öne taşımak, yapay zekanın gücünden faydalanmak ve hedef kitlenizle gerçek bir bağ kurmak istiyorsanız, birlikte çalışmak için iletişime geçebilirsiniz. Her marka bir hikayedir ve bu hikayeyi birlikte yazalım!
              </p>
            </section>
          </div>
        </div>
        <section className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-purple-700">Neden Yapay Zeka Destekli Pazarlama?</h2>
          <p className="text-gray-700 mb-4">
            Günümüz dijital dünyasında, yapay zeka teknolojileri markaların rekabet gücünü artırmak için vazgeçilmez hale gelmiştir. Doğru analizler ve kişiselleştirilmiş içeriklerle, hedef kitlenize ulaşmak ve onların ilgisini çekmek artık çok daha kolay. Yapay zeka ile desteklenen pazarlama stratejileri, dönüşüm oranlarını artırırken, reklam bütçenizin de daha verimli kullanılmasını sağlar.
          </p>
          <p className="text-gray-700 mb-4">
            SEO uyumlu içerikler, arama motorlarında üst sıralarda yer almanızı sağlar. Markanızın hikayesini doğru anlatmak, güvenilirlik ve sadakat oluşturmak için en önemli adımdır. Ben de bu süreçte, markanızın dijitaldeki yolculuğunda size rehberlik ediyorum.
          </p>
        </section>
        <section className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-purple-700">Dijitalde Fark Yaratmanın Yolu: Strateji ve Yaratıcılık</h2>
          <p className="text-gray-700 mb-4">
            Sadece var olmak değil, dijitalde fark yaratmak için stratejik düşünmek ve yaratıcı çözümler üretmek gerekir. Markanızın hedeflerine ulaşması için özgün içerikler, yenilikçi kampanyalar ve etkili iletişim kanalları kullanıyorum. Her marka için özel bir yol haritası oluşturuyor, başarıya giden yolda birlikte ilerliyoruz.
          </p>
        </section>
        <section className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-purple-700">Veri Odaklı Yaklaşım ile Başarıya Ulaşın</h2>
          <p className="text-gray-700 mb-4">
            Dijital pazarlamada başarı, doğru verileri analiz etmek ve bu veriler ışığında aksiyon almaktan geçer. Yapay zeka destekli analizler sayesinde, hedef kitlenizin davranışlarını ve eğilimlerini anlıyor, kampanyalarınızı en verimli şekilde optimize ediyorum. Böylece yatırımınızın karşılığını en üst düzeye çıkarıyorum.
          </p>
        </section>
        <section className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-purple-700">Sürdürülebilir Büyüme İçin Doğru Partner</h2>
          <p className="text-gray-700 mb-4">
            Kısa vadeli başarılar yerine, markanızın uzun vadede sürdürülebilir bir büyüme yakalaması için çalışıyorum. Güven, şeffaflık ve sürekli gelişim ilkeleriyle, iş ortaklarımın dijitalde kalıcı bir iz bırakmasını sağlıyorum. Siz de bu yolculukta güçlü bir partner arıyorsanız, birlikte çalışmak için iletişime geçebilirsiniz.
          </p>
        </section>
      </div>
    </div>
  );
}
