/* The <Head /> component used in _document is not the same as next/head.
 * The <Head /> component used here should only be used for any <head> code
 * that is common for all pages. For all other cases, such as <title> tags,
 * we recommend using next/head in your pages or components. */

import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="robots" content="index,follow" />
        <meta name="theme-color" content="#00acc1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="SWEJobs.fyi" />
        <meta property="og:url" content="https://swejobs.fyi/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.swejobs.fyi/og-img.png" />
        <meta property="og:image:secure_url" content="https://www.swejobs.fyi/og-img.png" />
        <meta property="og:image:alt" content="SWEJobs.fyi" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="swejobs.fyi" />
        <meta property="twitter:url" content="https://swejobs.fyi/" />
        <meta name="twitter:image" content="https://swejobs.fyi/og-img.png" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
