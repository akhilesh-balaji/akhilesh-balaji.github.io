import { define } from "../utils.ts";

export default define.page(function App({ Component }) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Akhilesh Balaji</title>
        {/* Preload both banner images so they're cached before the user navigates */}
        <link
          rel="preload"
          as="image"
          href="/math-drawing-banner-2.webp"
          fetchpriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/classical_square.webp"
        />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
});
