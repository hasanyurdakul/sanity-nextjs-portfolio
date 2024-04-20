import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
//Creates a sanity client. Can be used with environment variables.
export const client = createClient({
  apiVersion: "2022-05-03",
  dataset: "production",
  projectId: "9hpvce28",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
