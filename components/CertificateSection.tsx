"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CertificateSection() {
  const certs = [
    {
      title: "Belajar Dasar Pemrograman Web",
      desc: "Mempelajari dasar HTML, CSS, dan JavaScript untuk membangun website sederhana.",
      org: "Dicoding Indonesia",
      link: "certificate/2.pdf",
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      desc: "Pemahaman fundamental tentang logika dan sintaks JavaScript modern.",
      org: "Dicoding Indonesia",
      link: "certificate/3.pdf",
    },
    {
      title: "Front-End Web Developer",
      desc: "Membangun website responsif menggunakan framework modern seperti React dan Tailwind.",
      org: "Dicoding Indonesia",
      link: "certificate/1.pdf",
    },
  ];

  return (
    <motion.section
      id="certificates"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">🎓 Sertifikat</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <CardHeader>
                <CardTitle>{cert.title}</CardTitle>
                <CardDescription>{cert.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Diterbitkan oleh: <strong>{cert.org}</strong>
                </p>
              </CardContent>
              <CardFooter className="justify-end">
                <Button asChild variant="outline">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    Lihat Sertifikat
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
