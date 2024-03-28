"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white relative z-10">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/laptop-img.png"
          alt="laptop-img"
          width={500}
          height={500}
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4 mt-2">About Me</h2>
          <p className="text-base md:text-lg">
            I'm a passionate full-stack web developer who loves building
            dynamic, responsive and user-friendly web apps. My specialties
            include the MERN stack (JavaScript, React, Node.js, Express,
            MongoDB), SQL, and Git. As a team player, I love working with others
            to create great web experiences. Beyond web development, I'm also a
            budding blockchain enthusiast, equipped with strong problem-solving
            skills and a knack for tackling challenges head-on.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex flex-row justify-start mt-8">
          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            {" "}
            Education{" "}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
            {" "}
            Skills{" "}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("certifications")}
            active={tab === "certifications"}
          >
            {" "}
            Certifications{" "}
          </TabButton>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        {TAB_DATA.find((t) => t.id === tab).content}
      </div>
    </section>
  );
}

export default AboutSection;
