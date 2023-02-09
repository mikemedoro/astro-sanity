import { useSanityClient, groq } from 'astro-sanity';

export async function getPosts() {
  const query = groq`*[_type == "post"]{ _id, title, slug, richText }`;
  const data = await useSanityClient().fetch(query);

  return data;
}

export async function getRecentPosts() {
  const query = groq`*[_type == "post"] | order(_createdAt desc) [0...3] {_id, title, slug, excerpt}`;
  const data = await useSanityClient().fetch(query);

  return data;
}
