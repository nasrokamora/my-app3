"use client";

import { motion } from "framer-motion";
import styles from './skillsData.module.css';

export function SkillDataAnim() {
    const sections = [
        {
            title: "Frontend Development",
            color: "text-cyan-500",
            bgColor: "bg-cyan-500",
            skills: [
                { name: "Next.js", width: "95%" },
                { name: "React.js", width: "90%" },
                { name: "Tailwind CSS", width: "90%" },
                { name: "TypeScript", width: "75%" },
                { name: "Framer Motion", width: "75%" },
                { name: "Zustand", width: "70%" }
            ]
        },
        {
            title: "React Libraries",
            color: "text-purple-500",
            bgColor: "bg-purple-500",
            skills: [
                { name: "Redux Toolkit", width: "85%" },
                { name: "React Query", width: "80%" },
                { name: "React Hook Form", width: "80%" }
            ]
        },
        {
            title: "Backend Development",
            color: "text-orange-500",
            bgColor: "bg-orange-500",
            skills: [
                { name: "Node.js", width: "85%" },
                { name: "Express.js", width: "80%" },
                { name: "MongoDB", width: "78%" },
                { name: "MySQL", width: "65%" },
                { name: "Nest.js", width: "50%" },
                { name: "MERN Stack", width: "72%" }
            ]
        },
        {
            title: "Tools & Deployment",
            color: "text-yellow-500",
            bgColor: "bg-yellow-500",
            skills: [
                { name: "Git & GitHub", width: "85%" },
                { name: "Vercel Deployment", width: "90%" },
                { name: "REST APIs", width: "88%" },
                { name: "Authentication (JWT, OAuth)", width: "70%" }
            ]
        },
        {
            title: "Basic Web Skills",
            color: "text-green-500",
            bgColor: "bg-green-500",
            skills: [
                { name: "HTML5", width: "95%" },
                { name: "CSS3", width: "90%" },
                { name: "JavaScript (ES6+)", width: "90%" }
            ]
        }
    ];

    const renderSkills = (skillsArray,bgColor) => (
        skillsArray.map((skill, index) => (
            <div key={index} className={`${styles.container_skills} text-sm`}>
                <div className="flex justify-between mb-1">
                    <p>{skill.name}</p>
                    <span className="text-[0.7rem]">{skill.width}</span>
                </div>
                <div className="border border-slate-700  rounded shadow-md shadow-slate-950 ">
                    <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: skill.width }}
                        transition={{ duration: 2, delay: 0.2 }}
                        viewport={{ once: true }}
                        className={`${styles.skills_bar}`}
                    >
                        <div className={`${bgColor} h-full`}></div>
                    </motion.div>
                </div>
            </div>
        ))
    );

    return (
        <div className="w-full p-5">
            <h1 className="text-center text-3xl font-bold mb-8 text-black dark:bg-gradient-to-tr dark:from-[#00b6d3] dark:via-[#21c594] dark:to-cyan-500 dark:bg-clip-text dark:text-transparent">Technical Skills</h1>

            {sections.map((section, idx) => (
                <section
                    key={idx}
                    className="mb-10"

                >
                    <h2 className={`text-xl font-semibold mb-4 ${section.color}`}>
                        {section.title}
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        {renderSkills(section.skills, section.bgColor)}
                    </div>
                </section>
            ))}
        </div>
    );
}
