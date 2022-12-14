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
