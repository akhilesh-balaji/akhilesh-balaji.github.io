type Props = {
  /** Which page you are on: its button is filled instead of outlined. */
  current?: "work" | "blog" | "art" | "other";
};

export default function Menu({ current }: Props) {
  // outlined normally, filled (no `btn-outline`) for the current page
  const style = (page: string) => (current === page ? "" : "btn-outline");
  const here = (page: string) => (current === page ? "page" : undefined);

  return (
    <div class="flex items-center gap-1 sm:gap-2 py-4 content-center backdrop-blur-lg bg-accent-content/60 px-4 rounded-2xl sm:rounded-3xl fixed top-2 border-2 border-neutral/50 z-50 font-serif">
      <a href="/">
        <img
          class="h-7 sm:h-10 hidden sm:block"
          // src="/path119_full.png"
          src="/logo.png"
          alt="the logo of Akhilesh Balaji: a right triangle adjacent to the letter B"
        />
      </a>
      <a href="/work" aria-current={here("work")}>
        <button
          class={`btn btn-warning rounded-full ${style("work")}`}
          type="button"
        >
          <p class="text-sm">Work</p>
        </button>
      </a>

      <a href="/blog" aria-current={here("blog")}>
        <button
          class={`btn btn-secondary rounded-full ${style("blog")}`}
          type="button"
        >
          <p class="text-sm">Blog</p>
        </button>
      </a>
      <a href="/art" aria-current={here("art")}>
        <button
          class={`btn btn-success rounded-full ${style("art")}`}
          type="button"
        >
          <p class="text-sm">Music</p>
        </button>
      </a>
      <a href="/other" aria-current={here("other")}>
        <button
          class={`btn btn-primary rounded-full ${style("other")}`}
          type="button"
        >
          <p class="text-sm">Other</p>
        </button>
      </a>
    </div>
  );
}
