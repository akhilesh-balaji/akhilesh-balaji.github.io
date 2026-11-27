import type { ComponentChildren } from "preact";
import Banner from "./Banner.tsx";
import Footer from "./Footer.tsx";
import Menu from "./Menu.tsx";
import type { BannerName } from "../banners.ts";

type Props = {
  /** Which banner to show (see src/banners.ts). */
  banner: BannerName;
  /** Visually hidden page heading, for screen readers. */
  heading: string;
  children?: ComponentChildren;
};

/** Shared page frame: Vim hint, menu, banner, content, footer. */
export default function Page({ banner, heading, children }: Props) {
  return (
    <div class="px-4 py-8 mx-auto min-h-screen">
      <button
        type={"button"}
        class="sr-only focus:not-sr-only btn-ghost mt-4 border-0 outline-0"
      >
        <span class={"fixed top-2 left-2"}>
          You may navigate using Vim keybindings.
        </span>
      </button>
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <Menu />
        <Banner name={banner} />
        <h1 class="sr-only">{heading}</h1>
        {children}
        <Footer />
      </div>
    </div>
  );
}
