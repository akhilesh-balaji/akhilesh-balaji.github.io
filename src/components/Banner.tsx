import { banners, type BannerName } from "../banners.ts";

export interface BannerProps {
  /** Legacy switch: true = music banner, false = home banner. */
  art?: boolean;
  /** Preferred: pick a banner by name (see src/banners.ts). */
  name?: BannerName;
}

export default function Banner(props: BannerProps) {
  const banner = banners[props.name ?? (props.art ? "art" : "math")];
  const src = () => banner.src;

  return (
    <div class="w-full pt-15">
      <div class="relative h-32 sm:h-64 w-full overflow-hidden rounded-2xl select-none">
        <div
          class={`h-full w-full rounded-2xl bg-cover bg-center ${banner.scale} scale-130`}
          style={{
            "background-image": `url(${src()})`,
            "-webkit-user-drag": "none",
            "-webkit-user-select": "none",
            "user-select": "none",
          }}
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          aria-label={banner.label}
          role="img"
        />

        <div
          class="absolute inset-0 rounded-2xl z-10"
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
          onMouseDown={(e) => e.preventDefault()}
        />
      </div>
    </div>
  );
}
