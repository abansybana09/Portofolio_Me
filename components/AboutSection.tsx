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

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-3 gap-6"
    >
      <motion.div whileHover={{ scale: 1.02 }} className="md:col-span-2">
        <Card className="hover:shadow-lg transition">
          <CardHeader>
            <CardTitle>Tentang Saya</CardTitle>
            <CardDescription>
              Saya sedang mempelajari pengembangan front-end dengan fokus pada pembuatan antarmuka yang cepat, responsif, mudah diakses, dan interaktif untuk memberikan pengalaman pengguna terbaik.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Saat ini saya mulai mempelajari Next.js dan Tailwind CSS untuk membangun aplikasi web modern yang cepat dan efisien. Saya menikmati proses mengubah desain menjadi pengalaman digital yang nyata, interaktif, dan responsif di berbagai perangkat.
            </p>
          </CardContent>
          <CardFooter>
            <div className="flex gap-2">
              <Button asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="/portfolio.pdf" target="_blank" rel="noopener noreferrer">
                  Case Study
                </a>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </motion.div>

      <motion.div whileHover={{ scale: 1.02 }}>
        <Card className="hover:shadow-lg transition">
          <CardHeader>
            <CardTitle>Keahlian Masih Belajar</CardTitle>
            <CardDescription>Teknologi dan tools utama</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "Figma"].map(
                (s) => (
                  <li key={s}>• {s}</li>
                )
              )}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </motion.section>
  );
}
