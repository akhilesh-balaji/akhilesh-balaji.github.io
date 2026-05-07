export interface BannerProps {
  art: boolean;
}

export default function Banner(props: BannerProps) {
  const src = () =>
    props.art ? "/classical_square.webp" : "/math-drawing-banner-2.webp";

  return (
    <div class="w-full pt-15">
      <div class="relative h-32 sm:h-64 w-full overflow-hidden rounded-2xl select-none">
        <div
          class={`h-full w-full rounded-2xl bg-cover bg-center ${
            props.art ? "sm:scale-120" : "sm:scale-100"
          } scale-130`}
          style={{
            "background-image": `url(${src()})`,
            "-webkit-user-drag": "none",
            "-webkit-user-select": "none",
            "user-select": "none",
          }}
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          aria-label="a banner depicting various mathematical and computational designs. created by Akhilesh Balaji."
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
