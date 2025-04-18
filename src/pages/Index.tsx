
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Stats } from "@/components/Stats";
import { RecentWorks } from "@/components/RecentWorks";
import { Expression } from "@/components/Expression";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <About />
      <Services />
      <Process />
      <Stats />
      <RecentWorks />
      <Expression />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
