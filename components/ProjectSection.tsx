"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProjectSection() {
  const projects = [
    {
      title: "Warung Mang Oman",
      desc: "Website restoran lokal dengan menu interaktif dan sistem pemesanan online. Dibangun menggunakan PHP native dengan arsitektur MVC untuk mengatur logika aplikasi, tampilan, dan data secara terstruktur, efisien, serta mudah dikembangkan.",
      demo: "#",
      repo: "https://github.com/abansybana09/Project_PWEB2",
    },
    {
      title: "Sorabi Ceu Neneng",
      desc: "Website ini dirancang berbasis framework CodeIgniter 4 (CI4) yang memanfaatkan struktur MVC guna memisahkan logika aplikasi, tampilan, dan pengelolaan data. Pendekatan ini meningkatkan kinerja, keamanan, dan kemudahan pengembangan fitur baru.",
      demo: "#",
      repo: "https://github.com/abansybana09/Sorabi-Ceu-Neneng",
    },
    {
      title: "E-Library System",
      desc: "Aplikasi perpustakaan digital berbasis PHP & MySQL dengan fitur CRUD buku.",
      demo: "#",
      repo: "#",
    },
    {
      title: "NextPortfolio",
      desc: "Portofolio pribadi berbasis Next.js dan Tailwind, desain minimalis & responsif.",
      demo: "#",
      repo: "#",
    },
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">
        ✨ Proyek Terpilih ✨
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.desc}</CardDescription>
              </CardHeader>
              <CardFooter className="justify-end gap-2">
                <Button asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer">
                    Repo
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
