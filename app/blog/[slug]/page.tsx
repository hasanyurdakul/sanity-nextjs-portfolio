import { blogPost } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 30;
async function getData(slug: string) {
  const query = `*[_type == "blog" && slug.current=="${slug}"]{

        "slugCurrent":slug.current,
          title,
          content,
          titleImage,
          smallDescription
      }[0]`;

  const data = await client.fetch(query);
  return data;
}
export default async function BlogArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const data: blogPost = await getData(params.slug);
  return (
    <div className="mt-[5.5rem]">
      <head>
        <title>{data.title}</title>
      </head>
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Blog
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
      <div className="mt-8 prose prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary  ">
        <p className="italic text-primary">{data.smallDescription}</p>

        <PortableText value={data.content}></PortableText>
      </div>
    </div>
  );
}
