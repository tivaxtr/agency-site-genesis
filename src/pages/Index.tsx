import React, { Suspense, lazy } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

const Features = lazy(() => import("@/components/Features"));
const Services = lazy(() => import("@/components/Services"));
const Process = lazy(() => import("@/components/Process"));
const Stats = lazy(() => import("@/components/Stats"));
const RecentWorks = lazy(() => import("@/components/RecentWorks"));
const Expression = lazy(() => import("@/components/Expression"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Contact = lazy(() => import("@/components/Contact"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Suspense fallback={<div className="text-center py-12">Yükleniyor...</div>}>
        <Features />
        <Services />
        <Process />
        <Stats />
        <RecentWorks />
        <Expression />
        <Testimonials />
        <Contact />
      </Suspense>
    </div>
  );
};

export default Index;
