import React from "react";

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          <link href="/img/favicon.ico" rel="icon" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;700&family=Overlock&family=Questrial&display=swap"
            rel="stylesheet"
          />
        </head>
        <body style={{ backgroundColor: "#000" }}>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script src="/js/smooth.js"></script>
          <script src="/js/script.js"></script>
        </body>
      </html>
    );
  }
}
