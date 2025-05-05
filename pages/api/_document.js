import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Warpcast Frame Meta Tags */}
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://cointent-xi.vercel.app/image.png" />
        <meta property="fc:frame:button:1" content="Buy" />
        <meta property="fc:frame:button:2" content="Sell" />
        <meta property="fc:frame:button:3" content="Watch" />
        <meta property="fc:frame:button:4" content="Unwatch" />
        <meta property="fc:frame:post_url" content="https://cointent-xi.vercel.app/api/webhook" />

        {/* Open Graph (untuk link preview) */}
        <meta property="og:title" content="Cointent Tracker" />
        <meta property="og:description" content="Track and trade Zora coins from your favorite creators." />
        <meta property="og:image" content="https://cointent-xi.vercel.app/og-image.png" />
        <meta property="og:url" content="https://cointent-xi.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cointent Tracker" />
        <meta name="twitter:description" content="Track and trade Zora coins from your favorite creators." />
        <meta name="twitter:image" content="https://cointent-xi.vercel.app/og-image.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
