// components/Testimonials.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import avatarTes from '../../../public/AvatarPng/avaterTes.png'
import avatarS from '../../../public/AvatarPng/avatarS.png'
import avatarA from '../../../public/AvatarPng/avatar-370-456322-512.webp'

const testimonials = [
  {
    name: "Mohammed Ahmed",
    role: "Software Engineer",
    image: avatarTes ,
    feedback:
      "Nasreddine is creative and always meets deadlines. His code is clean, efficient, and easy to maintain."
  },
  {
    name: "Sarah Al-Kutbi",
    role: "UX/UI Designer",
    image:  avatarS ,
    feedback:
      "He truly understands how to translate a design into a great interactive experience. Always proactive and focused."
  },
  {
    name: "Ali Youssef",
    role: "Technical Manager",
    image: avatarA ,
    feedback:
      "Highly dependable. Nas@Dev delivers production-grade results with exceptional quality and professionalism."
  }
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 px-4 bg-[#0c0015] text-white bg-transparent dark:text-white   transition-colors"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#e26334] dark:text-[#cc8a1d]">
          What People Say About Me
        </h2>
        <p className="text-lg mt-2 text-gray-600 dark:text-gray-400">
          Trusted feedback from teammates and collaborators
        </p>
      </div>

      <div className="grid gap-6 w-full xl:grid-cols-3 2xl:grid-cols-3  sm:grid-cols-1 lg:grid-cols-3  mx-auto">
        {testimonials.map((t, i) => (
          <Card
            key={i}
            className="bg-white dark:bg-[#130024] border border-gray-200 dark:border-[#1f1f1f] 
            shadow-md hover:shadow-yellow-500/30 transition-all"
          >
            <CardHeader className="flex flex-col items-center text-center">
              <Avatar className="w-16 h-16 mb-2">
                <AvatarImage src={t.image.src} alt={t.name} />
                <AvatarFallback>
                  {t.name.split(" ")[0][0]}
                  {t.name.split(" ")[1][0]}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-yellow-600 dark:text-yellow-400">{t.name}</CardTitle>
              <span className="text-sm text-cyan-700 dark:text-cyan-400">{t.role}</span>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-800 dark:text-gray-500 dark:tracking-wider italic">"{t.feedback}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
