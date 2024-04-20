"use client";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import { IoMail } from "react-icons/io5";
import { Player } from "@lottiefiles/react-lottie-player";
const page = () => {
  return (
    <div className="mt-[6.5rem] prose prose-lg mx-auto px-1 dark:prose-invert">
      <div>
        <h1 className="">Let's get in touch 📧</h1>

        <h2 className=" ">You can reach me via my socials</h2>
        <div className="grid grid-flow-col items-center  ">
          <div className="flex flex-col gap-5">
            <Link href={""} className="flex items-center gap-2 no-underline">
              <FaLinkedin className="size-12" />
              <p className="font-bold text-xl">LinkedIn</p>
            </Link>
            <Link
              href={"https://github.com/hasanyurdakul"}
              className="flex items-center gap-2 no-underline"
            >
              <FaGithub className="size-12" />
              <p className="font-bold text-xl">Github</p>
            </Link>
            <Link
              href={"https://github.com/hasanyurdakul"}
              className="flex items-center gap-2 no-underline"
            >
              <FaTwitter className="size-12" />
              <p className="font-bold text-xl">Twitter</p>
            </Link>
            <Link
              href={"mailto:hhasanyurdakul@gmail.com"}
              className="flex items-center gap-2 no-underline"
            >
              <IoMail className="size-12" />
              <p className="font-bold text-xl">Email</p>
            </Link>
          </div>
          <div className="w-auto lg:w-96 priority p-2">
            <Player
              src="https://lottie.host/5e9ab6ff-ef57-4498-97a2-201ee8b358ad/i469mb1V6a.json"
              loop
              autoplay
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
