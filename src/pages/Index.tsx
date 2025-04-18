
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { RecentWorks } from "@/components/RecentWorks";
import { Expression } from "@/components/Expression";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <RecentWorks />
      <Expression />
    </div>
  );
};

export default Index;
