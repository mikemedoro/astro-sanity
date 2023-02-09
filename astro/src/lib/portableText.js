import { portableTextToHtml } from 'astro-sanity';

const customComponents = {
  /* your custom components here */
};

export function sanityPortableText(portabletext) {
  return portableTextToHtml(portabletext, customComponents);
}
