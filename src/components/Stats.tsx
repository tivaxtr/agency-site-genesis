
export function Stats() {
  const stats = [
    { id: 1, number: "150+", label: "Tamamlanan Proje" },
    { id: 2, number: "50+", label: "Ekip Üyesi" },
    { id: 3, number: "10+", label: "Yıl Deneyim" },
    { id: 4, number: "98%", label: "Müşteri Memnuniyeti" }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center group">
              <h3 className="text-4xl md:text-5xl font-playfair mb-2 group-hover:text-purple-400 transition-colors">
                {stat.number}
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
