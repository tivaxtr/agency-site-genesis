
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { RecentWorks } from "@/components/RecentWorks";
import { Expression } from "@/components/Expression";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <RecentWorks />
      <Expression />
      <Contact />
    </div>
  );
};

export default Index;
