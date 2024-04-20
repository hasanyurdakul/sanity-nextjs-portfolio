/* eslint-disable react/jsx-no-undef */
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import img from "/public/profile_pic.png";
import Link from "next/link";
const ProfileCard = () => {
  return (
    <div className="flex lg:items-center prose dark:prose-invert gap-4 -mt-8  ">
      <Image
        className=" rounded-3xl"
        width={200}
        height={200}
        src={img}
        alt={"profile image"}
      />
      <div className=" dark:prose-inverse">
        <h3 className="leading-tight">Hasan Yurdakul</h3>
        <p className="leading-tight">Junior Developer</p>

        <div>
          <Link
            download="cv.pdf"
            target="_blank"
            href={
              "https://drive.usercontent.google.com/u/0/uc?id=1c3JE-eF_SEGQCcfqgaVT45mT0Sm8BBl9&export=download"
            }
          >
            <Button className="text-wrap  h-auto   ">
              <span> &nbsp;Click here to get my resume!</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
