
export function About() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair mb-8">About Our Agency</h2>
            <p className="text-lg text-gray-600 mb-6">
              We are a creative digital agency specializing in AI-powered design solutions. Our team combines artistic vision with cutting-edge technology to create unique digital experiences.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With years of experience in digital innovation, we help brands stand out in the modern landscape through sophisticated AI image generation and creative direction.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-3xl font-playfair mb-2">250+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl font-playfair mb-2">80+</h3>
                <p className="text-gray-600">Happy Clients</p>
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
