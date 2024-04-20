import { blogPost, projectPost } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import Link from "next/link";
import { Github, Send } from "lucide-react";

export const revalidate = 30;
async function getData(slug: string) {
  const query = `*[_type == "project" && slug.current=="${slug}"]{

        "slugCurrent":slug.current,
          title,
          content,
          titleImage,smallDescription,githublink,demolink }[0]`;

  const data = await client.fetch(query);
  return data;
}
export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: projectPost = await getData(params.slug);

  return (
    <div className="mt-[6.5rem]">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Project
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>
      <Image
        width={800}
        height={800}
        src={urlFor(data.titleImage).url()}
        alt={"Title Image"}
        className="rounded-lg mt-8 border"
        priority
      />

      <div className="mt-16 prose prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary  ">
        <p className="italic text-primary">{data.smallDescription}</p>
        <div className="text-secondary grid grid-flow-col mt-4 justify-start gap-5">
          <Link
            className="flex flex-row gap-2"
            target="blank"
            href={`${data.githublink}`}
          >
            <Github />
          </Link>
          <Link
            className="flex flex-row gap-2"
            target="blank"
            href={`${data.demolink}`}
          >
            <Send />
          </Link>
        </div>
        <PortableText value={data.content}></PortableText>
      </div>
    </div>
  );
}
