import React from "react";
import Document, {
  Html, Head
  , Main, NextScript, DocumentContext
} from "next/document";
import { CssBaseline } from "@nextui-org/react";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="developer" content="bcmray"></meta>
          {CssBaseline.flush()}

          <link rel="https://api.w.org/" href="https://mc.hjfunny.site/wp-json/"></link>
          <link rel="alternate" type="application/json" href="https://mc.hjfunny.site/wp-json/wp/v2/pages/13"></link>
          <link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://mc.hjfunny.site/xmlrpc.php?rsd"></link>
          <link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://mc.hjfunny.site/wp-includes/wlwmanifest.xml"></link>
          <meta name="generator" content="NextJS + React"></meta>

          <link rel="icon" href="https://mc.hjfunny.site/wp-content/uploads/2023/06/cropped-hjmc_logo_new-32x32.jpg" sizes="32x32"></link>
          <link rel="icon" href="https://mc.hjfunny.site/wp-content/uploads/2023/06/cropped-hjmc_logo_new-192x192.jpg" sizes="192x192"></link>
          <link rel="apple-touch-icon" href="https://mc.hjfunny.site/wp-content/uploads/2023/06/cropped-hjmc_logo_new-180x180.jpg"></link>

          <link rel="alternate" type="application/rss+xml" title="hjfunnyMC | 官方网站 » Feed" href="https://mc.hjfunny.site/feed"></link>
          <link rel="alternate" type="application/rss+xml" title="hjfunnyMC | 官方网站 » 评论Feed" href="https://mc.hjfunny.site/comments/feed"></link>
          <meta name="msapplication-TileImage" content="https://mc.hjfunny.site/wp-content/uploads/2023/06/cropped-hjmc_logo_new-270x270.jpg"></meta>
        </Head>
        <body style={{
          margin: 0
        }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
