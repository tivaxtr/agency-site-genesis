import { Card } from "@/components/ui/card";

export function Stats() {
  const stats = [
    { id: 1, number: "150+", label: "Tamamlanan Proje" },
    { id: 2, number: "50+", label: "Ekip Üyesi" },
    { id: 3, number: "10+", label: "Yıl Deneyim" },
    { id: 4, number: "98%", label: "Müşteri Memnuniyeti" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-robot-background to-black">
      <div className="container mx-auto px-4">
        <Card className="w-full bg-black/[0.96] relative overflow-hidden rounded-xl mb-12 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center group p-8 bg-black/70 rounded-2xl flex flex-col items-center">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-playfair mb-2 text-robot-purple group-hover:text-purple-400 transition-colors">
                  {stat.number}
                </h3>
                <p className="text-sm md:text-base text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

export default Stats;
