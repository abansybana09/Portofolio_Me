"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
    >
      <div className="flex items-center gap-5">
        <motion.div whileHover={{ scale: 1.05 }}>
          {/* PERUBAHAN 1: Warna 'ring' diubah dari 'amber'
            menjadi 'indigo/purple' agar senada dengan gradien nama Anda. 
          */}
          <Avatar className="size-24 shadow-lg ring-4 ring-indigo-200 dark:ring-purple-400/50 transition-all duration-300">
            <AvatarImage src="/lufy.jpg" alt="Your name" />
            <AvatarFallback>SI</AvatarFallback>
          </Avatar>
        </motion.div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-300 dark:to-purple-400">
            Mohamad Aban Sy'bana
          </h1>
          {/* PERUBAHAN 2: Menambahkan 'transition-colors' agar 
            pergantian warna teks (light/dark) terlihat mulus.
          */}
          <p className="text-muted-foreground mt-1 transition-colors">
            Frontend Developer • UI/UX Enthusiast
          </p>
          <div className="flex gap-2 mt-3 flex-wrap">
            {/* PERUBAHAN 3: Menambahkan 'transition-colors' dan efek hover
              sederhana agar lebih interaktif dan mulus saat ganti tema.
            */}
            <Badge className="dark:border-secondary/20 hover:bg-accent dark:hover:bg-accent/20 transition-colors cursor-default">
              Next.js
            </Badge>
            <Badge
              variant="secondary"
              className="dark:bg-secondary/10 hover:bg-secondary/80 dark:hover:bg-secondary/20 transition-colors cursor-default"
            >
              TypeScript
            </Badge>
            <Badge
              variant="outline"
              className="dark:border-secondary/20 hover:bg-accent dark:hover:bg-accent/20 transition-colors cursor-default"
            >
              Tailwind
            </Badge>
          </div>
        </div>
      </div>
    </motion.section>
  );
}