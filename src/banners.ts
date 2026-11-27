export type BannerName = "math" | "art" | "escher";

export interface BannerInfo {
  /** Path under /public */
  src: string;
  /** Tailwind scale class used from the `sm` breakpoint up */
  scale: string;
  /** Accessible description */
  label: string;
}

const designLabel =
  "a banner depicting various mathematical and computational designs. created by Akhilesh Balaji.";

export const banners: Record<BannerName, BannerInfo> = {
  math: {
    src: "/math-drawing-banner-2.webp",
    scale: "sm:scale-100",
    label: designLabel,
  },
  art: {
    src: "/classical_square.webp",
    scale: "sm:scale-120",
    label: designLabel,
  },
  escher: {
    // Cropped + resized from escher_another_world_ii_1947.jpg (banner-shaped band)
    src: "/escher_another_world_ii_1947_banner.webp",
    scale: "sm:scale-120",
    label: "Another World II (1947), a woodcut by M. C. Escher.",
  },
};
