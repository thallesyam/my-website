import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
            rel="stylesheet"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '789889939850023');
                fbq('track', 'PageView');
                fbq('track', 'ViewContent');
              `,
            }}
          />

          <noscript>
            <img
              height={1}
              width={1}
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=789889939850023&ev=PageView&noscript=1"
            />
          </noscript>

          <link rel="shortcut icon" href="/favicon.ico" />

          <meta
            name="description"
            content="Navegando pelo mundo da programação e ajudando empresas a construírem
            jornadas inesquecíveis."
          />
          <meta
            name="og:description"
            content="Navegando pelo mundo da programação e ajudando empresas a construírem
            jornadas inesquecíveis."
          />

          <meta name="og:title" content="Portifólio | Thalles Ian" />
          <meta content="Thalles Ian" name="author"></meta>
          <meta
            content="https://portfolio-thalles-ian.vercel.app/"
            property="og:url"
          />
          <meta property="og:type" content="website" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
