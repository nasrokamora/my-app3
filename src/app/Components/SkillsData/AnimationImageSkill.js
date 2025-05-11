"use client";
import { motion, } from 'framer-motion'
import Image from "next/image";
import { RiNextjsLine, RiNodejsLine, RiReactjsLine,RiSupabaseFill  } from "react-icons/ri";
import { SiNestjs, SiShadcnui,SiMongodb  } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaMagic } from "react-icons/fa";


const icons = [
  { Icon: RiNextjsLine, color: '#000000' },       // Next.js
  { Icon: BiLogoTailwindCss, color: '#38BDF8' },  // Tailwind CSS
  { Icon: RiNodejsLine, color: '#68A063' },       // Node.js
  { Icon: SiNestjs, color: '#E0234E' },           // NestJS
  { Icon: RiReactjsLine, color: '#61DAFB' },      // React
  { Icon: SiShadcnui, color: '#111111' },         // ShadCN
  { Icon: RiSupabaseFill, color: '#3ECF8E' },     // Supabase
  { Icon: SiMongodb, color: '#47A248' },          // MongoDB
  { Icon: FaMagic, color: '#8b5cf6' },            // MagicUI (اختياري لون بنفسجي جميل)
];



export default function TechScrollShowcase() {


  return (
    <div className="flex flex-wrap justify-center gap-6 py-10">
      {icons.map(({ Icon, color }, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.3, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ opacity: 1,y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 500, damping: 30, delay: index * 0.1 }}
          className="text-5xl"
          style={{ color }}
        >
          <Icon />
        </motion.div>
      ))}
    </div>
  )
}
