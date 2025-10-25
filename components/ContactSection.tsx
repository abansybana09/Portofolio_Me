"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormProvider, useForm } from "react-hook-form";
import { FormItem, FormLabel, FormControl } from "@/components/ui/form";

export default function ContactSection() {
  const methods = useForm();
  const onSubmit = (data: any) => console.log("Contact form submitted:", data);

  return (
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
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
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
                      <Input
                        type="email"
                        placeholder="email@domain.com"
                        {...methods.register("email")}
                      />
                    </FormControl>
                  </FormItem>

                  <FormItem>
                    <FormLabel>Pesan</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Tulis pesan..."
                        {...methods.register("message")}
                      />
                    </FormControl>
                  </FormItem>

                  <div className="flex gap-2">
                    <Button type="submit">Kirim</Button>
                    <Button variant="outline" type="button">
                      Atur Jadwal
                    </Button>
                  </div>
                </form>
              </FormProvider>
            </CardContent>
          </Card>
        </motion.div>

        {/* Info Kontak */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card className="hover:shadow-lg transition">
            <CardHeader>
              <CardTitle>Info Kontak</CardTitle>
              <CardDescription>
                Hubungi saya lewat platform berikut
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                <li>
                  <strong>Email:</strong>{" "}
                  <a className="text-primary" href="mailto:abanstyle@gmail.com">
                    abanstyle@gmail.com
                  </a>
                </li>
                <li>
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    className="text-primary"
                    href="https://www.linkedin.com/in/mohamad-aban-sy-bana-16b21a322?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/username
                  </a>
                </li>
                <li>
                  <strong>GitHub:</strong>{" "}
                  <a
                    className="text-primary"
                    href="https://github.com/abansybana09"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/abansybana09
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
