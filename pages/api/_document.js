// pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Cointent Tracker" />
        <meta property="og:description" content="Track and trade Zora coins from your favorite creators." />
        <meta property="og:image" content="https://cointent-xi.vercel.app/og-image.png" />
        <meta property="og:url" content="https://cointent-xi.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Farcaster Frame Embed Meta Tags */}
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:image" content="https://cointent-xi.vercel.app/image.png" />
        <meta name="fc:frame:button:1" content="Buy" />
        <meta name="fc:frame:button:2" content="Sell" />
        <meta name="fc:frame:button:3" content="Watch" />
        <meta name="fc:frame:button:4" content="Unwatch" />
        <meta name="fc:frame:post_url" content="https://cointent-xi.vercel.app/api/webhook" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
