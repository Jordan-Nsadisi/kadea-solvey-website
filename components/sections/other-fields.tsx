"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function OtherFieldsSection() {

  let academy = "/logo/academy.png"
  let software = "/logo/software.png"

  let academyCover = "/assets/images/academy.jpg"
  let softwareCover = "/assets/images/software.png"

  const items = [
    {
      color: "bg-[#E5203D] text-white",
      title: "Kadea Academy",
      description:
        "Nos formations longues pour débuter une carrière dans les métiers du futur! Choisis la formation qui te convient le mieux pour booster ta carrière, ton business ou trouver un emploi.",
      link: "https://kadea.academy",
      logo: academy,
      cover: academyCover
    },
    {
      color: "bg-[#0084ff] text-white",
      title: "Kadea Software",
      description:
        "Engagez un développeur expérimenté pour rejoindre votre équipe. Recrutez nos talents pour une mission de quelques semaines à plusieurs années. Faites votre demande, nous vous proposons des candidats dans 48 heures.",
      link: "https://kadea.co",
      logo: software,
      cover: softwareCover
    },
  ]

  return (
    <section className="w-full bg-blue-50 py-16 flex flex-col items-center gap-5">
      <div className="container mx-auto px-5 flex flex-col gap-5">
        <motion.h2
          className="font-bold text-2xl md:text-3xl text-secondary text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Kadea c&apos;est aussi:
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-full p-6 bg-white rounded-2xl shadow-sm flex flex-col md:flex-row items-start gap-6 hover:shadow-md transition-all duration-300"
            >
              <div className="w-[25%] overflow-hidden hidden md:block bg-gray-300 h-full rounded-md ">
                <Image
                  src={item.cover}
                  alt="Cover image"
                  className="object-center object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 flex flex-col gap-4 h-full justify-between">
                <div className="flex flex-col">
                  <Link href={item.link} className="w-fit" target="_blank">
                    <Image
                      src={item.logo}
                      alt={`${item.title}`}
                      className="h-8 w-auto mb-5"
                    />
                  </Link>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>

                <motion.div
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-fit"
                >
                  <Link href={item.link} target="_blank" className={`w-fit ${item.color} px-5 py-2 rounded-md`}>
                    <span>En savoir plus</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
