"use client";

import ContactClipboardItem from "@/components/home/contact-clipboard-item";
import ContactItem from "@/components/home/contact-item";
import ExperiencesSection from "@/components/home/experiences/experiences-section";
import ProjectsSection from "@/components/home/projects/projects-section";
import SkillsSection from "@/components/home/skills/skills-section";
import LanguageSwitch from "@/components/language/language-switch";
import introduction from "@/data/introduction";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Home() {
  const [isEnglish, setIsEnglish] = useState(true);
  return (
    <main className="flex flex-col items-stretch justify-between text-center sm:text-left">
      <LanguageSwitch isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
      <div className="fixed -z-50 h-screen bg-black object-cover">
        <img src="img/hero.jpg" />
      </div>
      <div className="z-10 flex justify-center bg-gradient-to-b from-transparent from-0% to-black py-24 lg:from-30%">
        <div className="flex max-w-7xl flex-col gap-y-16 p-4 text-white">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-stretch">
            <img
              src="/img/profile.jpg"
              alt="profile"
              className="w-48 rounded-lg"
            />
            <div className="flex flex-col justify-between gap-y-4">
              <div className="flex flex-col">
                <h1 className="font-rajdhani text-5xl font-semibold">
                  Seisuke Yamada
                </h1>
                <p className="text-gray-400">
                  Full-stack Web Developer | Software Engineer
                </p>
              </div>
              <div className="flex justify-center gap-x-2 sm:justify-start">
                <ContactItem
                  icon={<FaGithub size={36} />}
                  link="https://github.com/seihello"
                  tooltipText="GitHub"
                />
                <ContactItem
                  icon={<FaLinkedin size={36} />}
                  link="https://www.linkedin.com/in/seisuke/"
                  tooltipText="LinkedIn"
                />
                {/* <ContactItem
                  icon={<FaInstagram size={36} />}
                  link="https://www.instagram.com/y_seisuke/"
                  tooltipText="Instagram"
                /> */}
                <ContactClipboardItem
                  icon={<FaEnvelope size={36} />}
                  content="seisuke.ym@gmail.com"
                  tooltipText="Email"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            {isEnglish
              ? introduction.en.map((item, index) => <p key={index}>{item}</p>)
              : introduction.jp.map((item, index) => <p key={index}>{item}</p>)}
          </div>
        </div>
      </div>
      <SkillsSection isEnglish={isEnglish} />
      <ProjectsSection isEnglish={isEnglish} />
      <ExperiencesSection isEnglish={isEnglish} />
    </main>
  );
}
