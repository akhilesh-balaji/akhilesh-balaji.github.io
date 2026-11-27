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
  /** Optional visible title shown under the banner (CMU Serif, bold). */
  title?: string;
  /** Which menu button to show as filled. */
  current?: "work" | "blog" | "art" | "other";
  children?: ComponentChildren;
};

/** Shared page frame: Vim hint, menu, banner, content, footer. */
export default function Page({
  banner,
  heading,
  title,
  current,
  children,
}: Props) {
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
        <Menu current={current} />
        <Banner name={banner} />
        {title ? (
          <div class="max-w rounded-3xl border-2 flex flex-col mx-auto px-6 py-3 my-3 border-neutral w-full text-center">
            <h1 class="text-3xl font-serif font-bold m-0">{title}</h1>
          </div>
        ) : (
          <h1 class="sr-only">{heading}</h1>
        )}
        {children}
        <Footer />
      </div>
    </div>
  );
}
