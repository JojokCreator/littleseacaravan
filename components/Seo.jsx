import Head from "next/head";

const DOMAIN = "https://littleseacaravan.vercel.app/";
const DEFAULT_OG_IMAGE =
  "https://a0.muscache.com/im/pictures/964a7181-1b95-4cb5-8685-610e28955b34.jpg";

export default function Seo({
  title = "Littlesea Caravan - caravan rental Weymouth, Dorset",
  description = "Delightful, family friendly caravan, our is a lovely 2 bedroom, 6 berth, dog friendly holiday caravan on the Littlesea Haven Holiday Park. You will have the entire caravan for you and your family, ideal for you to have the space to make memories. This Caravan is our families van, which we hire out to families.",
  siteName = "Littlesea Caravan",
  canonical = DOMAIN,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  twitterHandle = "@littleseacaravan",
}) {
  return (
    <Head>
      <title key="title">{`${title} – ${siteName}`}</title>
      <meta name="description" content={description} />
      <meta key="og_type" property="og:type" content={ogType} />
      <meta key="og_title" property="og:title" content={title} />
      <meta key="og_description" property="og:description" content={description} />
      <meta key="og_locale" property="og:locale" content="en_IE" />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta key="og_url" property="og:url" content={canonical ?? DOMAIN} />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta
        key="og_image"
        property="og:image"
        content={ogImage ?? DEFAULT_OG_IMAGE}
      />
      <meta
        key="og_image:alt"
        property="og:image:alt"
        content={`${title} | ${siteName}`}
      />
      <meta key="og_image:width" property="og:image:width" content="1200" />
      <meta key="og_image:height" property="og:image:height" content="630" />

      <meta name="robots" content="index,follow" />

      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta 
        key="twitter:site" 
        name="twitter:site" 
        content={twitterHandle} 
      />
      <meta
        key="twitter:creator"
        name="twitter:creator"
        content={twitterHandle}
      />
      <meta 
        key="twitter:title" 
        property="twitter:title" 
        content={title} 
      />
      <meta
        key="twitter:description"
        property="twitter:description"
        content={description}
      />

      <link rel="canonical" href={canonical ?? DOMAIN} />

      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
}