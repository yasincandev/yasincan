import Document, {
  DocumentContext,
  Html,
  Main,
  NextScript,
  Head,
} from "next/document";

import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='apple-touch-icon' href='/assets/apple-touch-icon.png' />
          <meta
            name='description'
            content="Hi. I'm Yasin. I'm a front end developer.I build things for the web."
          />
          <meta property='og:url' content='https://yasincan.me' />
          <meta property='og:title' content='Yasin Can | Front End Developer' />
          <meta
            property='og:description'
            content="Hi. I'm Yasin. I'm a front end developer.I build things for the web."
          />
          <meta property='og:image' content='/assets/meta-image.png' />

          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:url' content='https://yasincan.me' />
          <meta
            name='twitter:title'
            content='Yasin Can | Front End Developer'
          />
          <meta
            name='twitter:description'
            content="Hi. I'm Yasin. I'm a front end developer.I build things for the web."
          />
          <meta name='twitter:image' content='/images/meta-image.png' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600;1,700;1,900&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
