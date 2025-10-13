"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Form, FormItem, FormLabel, FormControl } from "@/components/ui/form"
import { useForm, FormProvider } from "react-hook-form"
import { Input } from "@/components/ui/input"

export default function Home() {
  const methods = useForm()
  const onSubmit = (data: any) => {
    console.log("Contact form submitted:", data)
  }

  return (
    <div className="font-sans min-h-screen p-6 sm:p-12 lg:p-20 bg-gradient-to-br from-amber-50 via-white to-amber-100 text-foreground">
      <main className="max-w-5xl mx-auto grid gap-12">

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-center gap-5">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Avatar className="size-24 shadow-lg ring-4 ring-amber-200">
                <AvatarImage src="/avatar.jpg" alt="Your name" />
                <AvatarFallback>SI</AvatarFallback>
              </Avatar>
            </motion.div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight">Mohamad Aban Sy'bana</h1>
              <p className="text-muted-foreground mt-1">Frontend Developer • UI/UX Enthusiast</p>
              <div className="flex gap-2 mt-3 flex-wrap">
                <Badge>Next.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="outline">Tailwind</Badge>
              </div>
            </div>
          </div>

          <motion.div className="flex gap-3" whileHover={{ scale: 1.05 }}>
            <Button asChild>
              <a href="#projects">Lihat Proyek</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Kontak</a>
            </Button>
          </motion.div>
        </motion.section>

        {/* About + Skills */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="md:col-span-2"
          >
            <Card className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>Tentang Saya</CardTitle>
                <CardDescription>
                  Saya sedang mempelajari tentang front-end yang fokus membangun antarmuka yang cepat,
                  aksesibel, dan interaktif.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ini saya awal mempelajari next.js dan Tailwind CSS dalam membangun aplikasi modern.
                  Saya senang mengubah desain menjadi pengalaman digital yang nyata dan responsif.
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex gap-2">
                  <Button asChild>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
                  </Button>
                  <Button variant="ghost" asChild>
                    <a href="/portfolio.pdf" target="_blank" rel="noopener noreferrer">Case Study</a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 100 }}>
            <Card className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>Keahlian</CardTitle>
                <CardDescription>Teknologi dan tools utama</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  {["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "Figma"].map((s) => (
                    <li key={s}>• {s}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        {/* Projects */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">✨ Proyek Terpilih ✨</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <motion.div key={i} whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 120 }}>
                <Card className="hover:shadow-xl transition">
                  <CardHeader>
                    <CardTitle>Proyek {i}</CardTitle>
                    <CardDescription>Deskripsi singkat proyek kamu.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Jelaskan teknologi, peran kamu, dan hasil dari proyek ini.
                      Tambahkan screenshot atau demo link agar lebih menarik.
                    </p>
                  </CardContent>
                  <CardFooter className="justify-end gap-2">
                    <Button asChild>
                      <a href="#">Demo</a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="#">Repo</a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Hubungi Saya</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Form Kontak */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition">
                <CardHeader>
                  <CardTitle>Form Kontak</CardTitle>
                  <CardDescription>Kirim pesan langsung ke saya</CardDescription>
                </CardHeader>
                <CardContent>
                  <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)} className="grid gap-4">
                      <FormItem>
                        <FormLabel>Nama</FormLabel>
                        <FormControl>
                          <Input placeholder="Nama lengkap" {...methods.register("name")} />
                        </FormControl>
                      </FormItem>

                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="email@domain.com" {...methods.register("email")} />
                        </FormControl>
                      </FormItem>

                      <FormItem>
                        <FormLabel>Pesan</FormLabel>
                        <FormControl>
                          <Input placeholder="Tulis pesan..." {...methods.register("message")} />
                        </FormControl>
                      </FormItem>

                      <div className="flex gap-2">
                        <Button type="submit">Kirim</Button>
                        <Button variant="outline" type="button">Atur Jadwal</Button>
                      </div>
                    </form>
                  </FormProvider>
                </CardContent>
              </Card>
            </motion.div>

            {/* Info Kontak */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition">
                <CardHeader>
                  <CardTitle>Info Kontak</CardTitle>
                  <CardDescription>Hubungi saya lewat platform berikut</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>
                      <strong>Email:</strong>{" "}
                      <a className="text-primary" href="mailto:you@domain.com">
                        abanstyle@gmail.com
                      </a>
                    </li>
                    <li>
                      <strong>LinkedIn:</strong>{" "}
                      <a className="text-primary" href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/username
                      </a>
                    </li>
                    <li>
                      <strong>GitHub:</strong>{" "}
                      <a className="text-primary" href="https://github.com/username" target="_blank" rel="noopener noreferrer">
                        github.com/username
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

      </main>
    </div>
  )
}
