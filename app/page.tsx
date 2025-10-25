"use client";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import CertificateSection from "@/components/CertificateSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-6 sm:p-12 lg:p-20 bg-gradient-to-br from-amber-50 via-white to-amber-100 text-foreground">
      <main className="max-w-5xl mx-auto grid gap-12">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <CertificateSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}
