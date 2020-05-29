import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { Globalstyle } from "../components/GlobalStyle";

export default class RootDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(
        <>
          <Globalstyle />
          <App {...props} />
        </>
      )
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }
  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
          />
          <link
            rel="shortcut icon"
            href="static/favicon.ico"
            type="image/x-icon"
          />
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
