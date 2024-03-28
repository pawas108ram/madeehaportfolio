'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const profiles = [
  {
    icon: "/images/logos/linkedin-icon.svg",
    link: "https://www.linkedin.com/in/madeeha-ishaque-a8923722a",
    name: "LinkedIn",
  },
  {
    icon: "/images/logos/leetcode.svg",
    link: "https://leetcode.com/madeeha009/",
    name: "Leetcode",
  },
  {
    icon: "/images/logos/codeforces.svg",
    link: "https://codeforces.com/link/madSea_9",
    name: "Codeforces",
  },
  {
    icon: "/images/logos/github-icon.svg",
    link: "https://github.com/Madeeha9",
    name: "Github",
  },
  {
    icon: "/images/logos/gmail-icon.svg",
    link: "mailto:madeeha9303@gmail.com",
    name: "Email",
  },
];

function ProfilesSection() {
    const router = useRouter();

const handleClick = (e, link) => {
  e.preventDefault();
  router.push(link);
};

  return (
    <div className="z-20 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {profiles.map((profile, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <a href={profile.link} onClick={(e) => console.log(profile.link)}>
                <Image
                  src={profile.icon}
                  alt="icon"
                  width={50}
                  height={50}
                  className="flex justify-center items-center"
                />
                <p className="text-[#ADB7BE] text-base justify-center items-center flex">{profile.name}</p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProfilesSection;
