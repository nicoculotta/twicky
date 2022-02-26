import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <meta name="description" content="Style your tweet and connect with your audience" />
            <link rel="icon" href="/favicon.ico" />

            <script async src="https://www.googletagmanager.com/gtag/js?id=G-47B6G4QXBN"></script>

            <script
              dangerouslySetInnerHTML={{
                __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-47B6G4QXBN', {
                      page_path: window.location.pathname,
                      });
                  `,
              }}
            ></script>
        </Head>
        
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument