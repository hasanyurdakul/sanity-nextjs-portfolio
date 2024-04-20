import React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { client, urlFor } from "../lib/sanity";
import { simpleProjectCard } from "../lib/interface";
export const revalidate = 10;
import { Github, Send } from "lucide-react";

async function getData() {
  const query = `*[_type=="project"] | order(_createdAt desc){
    title,
      smallDescription,
      "slugCurrent" : slug.current,
      titleImage,githublink,demolink
}
      `;

  const data = await client.fetch(query);

  return data;
}
const page = async () => {
  const data: simpleProjectCard[] = await getData();

  console.log(data);

  return (
    <div className="mt-[6.5rem] ">
      <div className="  block text-base text-center text-primary font-semibold tracking-wide uppercase  ">
        <h2>Projects </h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 mt-8 gap-5">
        {data.map((post, idx) => (
          <Card
            className=" border-none rounded-lg  shadow-xl shadow-"
            key={idx}
          >
            <Image
              width={700}
              height={500}
              src={urlFor(post.titleImage).url()}
              alt={post.title}
              className="rounded-lg   h-[200px] object-cover"
            />
            <CardContent className="   ">
              <div className="mt-4">
                <h3 className="text-lg line-clamp-2 font-bold ">
                  {post.title}
                </h3>
                <p className=" text-wrap line-clamp-2 text-sm mt-2 ">
                  {post.smallDescription}
                </p>

                <div className="flex mt-4 gap-4">
                  <Link target="blank" href={`${post.githublink}`}>
                    <Github className="{}" />
                  </Link>
                  <Link target="blank" href={`${post.demolink}`}>
                    <Send />
                  </Link>
                </div>
                <Button asChild className="w-full mt-7">
                  <Link href={`project/${post.slugCurrent}`}>Read More!</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default page;
