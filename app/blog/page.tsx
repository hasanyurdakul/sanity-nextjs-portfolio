import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { client, urlFor } from "../lib/sanity";
import { simpleBlogCard } from "../lib/interface";
export const revalidate = 10;

async function getData() {
  const query = `*[_type=="blog"] | order(_createdAt desc){
    title,
      smallDescription,
      "slugCurrent" : slug.current,
      titleImage,
  }`;

  const data = await client.fetch(query);

  return data;
}

const page = async () => {
  const data: simpleBlogCard[] = await getData();
  console.log(data);
  return (
    <div className="mt-[6.5rem]">
      <div className="  block text-base text-center text-primary font-semibold tracking-wide uppercase  ">
        <h2>BLOG POSTS </h2>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 mt-8  gap-5">
        {data.map((post, idx) => (
          <Card className=" rounded-lg border-none shadow-xl " key={idx}>
            <Image
              width={700}
              height={500}
              src={urlFor(post.titleImage).url()}
              alt={post.title}
              className="rounded-lg  h-[200px] object-cover"
            />
            <CardContent className="   ">
              <div className="mt-4">
                <h3 className="text-lg line-clamp-2 font-bold ">
                  {post.title}
                </h3>
                <p className="  line-clamp-2  text-sm mt-2 ">
                  {post.smallDescription}
                </p>
                <Button asChild className="w-full mt-7">
                  <Link href={`blog/${post.slugCurrent}`}>Read More!</Link>
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
