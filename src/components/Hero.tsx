
export function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-[5rem] md:text-[8rem] leading-none font-playfair animate-fade-in">
            Art Digital
            <br />
            Agency
          </h1>
          <p className="mt-8 text-lg text-gray-600 max-w-xl mx-auto animate-fade-in">
            We specialize in AI-powered creative solutions and digital experiences
          </p>
          <div className="mt-12 space-y-4 animate-fade-in">
            <p className="text-sm text-gray-500">Based in</p>
            <p className="text-xl font-playfair">New York</p>
          </div>
        </div>
      </div>
    </section>
  );
}
