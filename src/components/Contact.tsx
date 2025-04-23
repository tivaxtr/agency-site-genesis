import { Card } from "@/components/ui/card";

export function Contact() {
  return (
    <section className="py-24 bg-gradient-to-b from-robot-background to-black">
      <div className="container mx-auto px-4">
        <Card className="w-full bg-black/[0.96] relative overflow-hidden rounded-xl mb-12 p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair mb-4 md:mb-6 text-white">Birlikte Çalışalım</h2>
            <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-12">
              Dijital varlığınızı dönüştürmeye hazır mısınız? Bizimle iletişime geçin.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              <div className="p-4 md:p-6 bg-black/70 rounded-xl">
                <h3 className="text-lg md:text-xl font-playfair mb-3 md:mb-4 text-robot-purple">Adres</h3>
                <p className="text-gray-300">Nilüfer<br />Bursa, Türkiye</p>
              </div>
              <div className="p-4 md:p-6 bg-black/70 rounded-xl">
                <h3 className="text-lg md:text-xl font-playfair mb-3 md:mb-4 text-robot-purple">İletişim</h3>
                <p className="text-gray-300">info@omursosyal.com<br />+90 (555) 123-4567</p>
              </div>
              <div className="p-4 md:p-6 bg-black/70 rounded-xl">
                <h3 className="text-lg md:text-xl font-playfair mb-3 md:mb-4 text-robot-purple">Sosyal Medya</h3>
                <p className="text-gray-300">Instagram<br />Twitter</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default Contact;
