"use client";

import ContactClipboardItem from "@/components/home/contact-clipboard-item";
import ContactItem from "@/components/home/contact-item";
import ProjectsSection from "@/components/home/projects/projects-section";
import SkillsSection from "@/components/home/skills/skills-section";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex flex-col items-stretch justify-between">
      <div className="fixed z-0 h-screen bg-black object-cover">
        <img src="img/hero.jpg" />
      </div>
      <div className="z-10 flex justify-center bg-gradient-to-b from-transparent from-0% to-black py-24 lg:from-30%">
        <div className="flex max-w-7xl flex-col gap-y-16 p-4 text-white">
          <div className="flex items-stretch gap-x-4">
            <img
              src="/img/profile.jpg"
              alt="profile"
              className="w-48 rounded-lg"
            />
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-4xl font-semibold">Seisuke Yamada</h1>
                <p className="text-gray-400">
                  Full-stack Web Developer | Software Engineer
                </p>
              </div>
              <div className="flex gap-x-2">
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
                <ContactItem
                  icon={<FaInstagram size={36} />}
                  link="https://www.instagram.com/y_seisuke/"
                  tooltipText="Instagram"
                />
                <ContactClipboardItem
                  icon={<FaEnvelope size={36} />}
                  content="seisuke.ym@gmail.com"
                  tooltipText="Email"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <p>
              {`Hi, I'm Seisuke, a software engineer/full-stack web developer with a
              Bachelor's degree in Computer Science and 5+ years of experience in
              software development. I have been dedicated to team goals with a passion
              for building efficient, maintainable, and user-friendly systems. This
              experience has provided me with the opportunity to acquire a wide range
              of skills and experience, spanning from large-scale embedded
              applications to web development.`}
            </p>
            <p>
              {`Throughout my ten-year journey in the
              field of software engineering, I have overcome numerous challenges in
              both technical and managerial capacities, enhancing my problem-solving
              skills along the way. With the experience I bring, coupled with my
              refined problem-solving abilities and steadfast perseverance when
              encountering difficulties, I'm eager to contribute significantly to your
              team!`}
            </p>
          </div>
        </div>
      </div>
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
}
