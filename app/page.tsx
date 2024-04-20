/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */

import {
  SiChakraui,
  SiCsharp,
  SiDotnet,
  SiFirebase,
  SiJavascript,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiSanity,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import ProfileCard from "./components/ProfileCard";
import Head from "next/head";
export default async function Home() {
  return (
    <div className="mt-[6.5rem] prose prose-lg mx-auto px-1 prose-li: dark:prose-invert">
      <div>
        <h1 className="">About me🚀</h1>
        <ProfileCard />

        <p className="-mt-1 ">
          Hello! I'm Hasan Yurdakul. I'm currently a self-taught aspiring
          software developer. I'm 26 years old and I live in Istanbul.
        </p>
        <p className="  ">
          I completed my undergraduate education in civil engineering at Sakarya
          University. After completing my undergraduate degree, I switched
          disciplines and started my education in Computer Programming at
          Anadolu University in Eskişehir. At the same time, I'm also taking
          Full Stack Web Development training provided by Bahçeşehir University
          Wissen Akademie.
        </p>
        <p className="  ">
          I'm intensely working to improve myself in this field.
        </p>
      </div>

      <div>
        <h1 className="text-wrap ">I'm familiar with 🤩</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 gap-y-1 gap-x-2">
          <li className="flex justify-start items-center flex-row mr-4">
            <SiJavascript size="28px" className=" mr-2" />
            Javascript
          </li>
          <li className="flex justify-start items-center flex-row mr-4">
            <SiTypescript size="28px" className="mr-2 " />
            Typescript
          </li>
          <li className="flex justify-start items-center flex-row mr-4">
            <SiNodedotjs size="28px" className="mr-2" />
            NodeJS
          </li>
          <li className="flex justify-start items-center flex-row mr-4">
            <SiReact size="28px" className="mr-2" />
            React
          </li>
          <li className="flex justify-start items-center flex-row mr-4">
            <SiRedux size="28px" className="mr-2" />
            Redux
          </li>
          <li className="flex justify-start items-center flex-row mr-4">
            <SiNextdotjs size="28px" className="mr-2" />
            Next
          </li>
          <li className="flex justify-start items-center flex-row mr-4">
            <SiTailwindcss size="28px" className="mr-2" />
            Tailwind
          </li>
          <li className="flex justify-start items-center flex-row mr-4">
            <SiShadcnui size="28px" className="mr-2" />
            shadcn/ui
          </li>
          <li className="flex justify-start items-center flex-row mr-4">
            <SiChakraui size="28px" className="mr-2" />
            Chakra
          </li>
          <li className="flex justify-start items-center flex-row mr-4">
            <SiSanity size="28px" className="mr-2" />
            Sanity
          </li>
          <li className="flex justify-start items-center flex-row mr-4">
            <SiFirebase size="28px" className="mr-2" />
            Firebase
          </li>
          <li className="flex justify-start items-center flex-row mr-4">
            <SiMongodb size="28px" className="mr-2" />
            MongoDB
          </li>
          <li className="flex justify-start items-center flex-row mr-4">
            <SiDotnet size="28px" className="mr-2" />
            .NET
          </li>
          <li className="flex justify-start items-center flex-row mr-4">
            <SiCsharp size="28px" className="mr-2" />
            C#
          </li>
          <li className="flex justify-start items-center flex-row mr-4">
            <SiMicrosoftsqlserver size="28px" className="mr-2" />
            MSSQL
          </li>
        </div>
      </div>
    </div>
  );
}
