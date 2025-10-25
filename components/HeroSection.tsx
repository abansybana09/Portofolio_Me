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
          <Avatar className="size-24 shadow-lg ring-4 ring-amber-200">
            <AvatarImage src="/lufy.jpg" alt="Your name" />
            <AvatarFallback>SI</AvatarFallback>
          </Avatar>
        </motion.div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            Mohamad Aban Sy'bana
          </h1>
          <p className="text-muted-foreground mt-1">
            Frontend Developer • UI/UX Enthusiast
          </p>
          <div className="flex gap-2 mt-3 flex-wrap">
            <Badge>Next.js</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="outline">Tailwind</Badge>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
