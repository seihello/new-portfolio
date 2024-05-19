import { FaGithub, FaInstagram, FaRegEnvelope } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-y-8">
        <div className="flex items-stretch gap-x-4 text-white">
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
              <FaGithub size={36} />
              <FaInstagram size={36} />
              <FaRegEnvelope size={36} />
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
    </main>
  );
}
