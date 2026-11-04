export default function Menu() {
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
      <a href="/#projects">
        <button class="btn btn-primary rounded-full btn-outline" type="button">
          <p class="text-sm">Projects</p>
        </button>
      </a>
      <a href="/#work">
        <button class="btn btn-warning rounded-full btn-outline" type="button">
          <p class="text-sm">Work</p>
        </button>
      </a>

      <a href="https://akhileshbalaji.substack.com/">
        <button
          class="btn btn-secondary rounded-full btn-outline"
          type="button"
        >
          <p class="text-sm">Blog</p>
        </button>
      </a>
      <a href="/art">
        <button class="btn btn-success rounded-full btn-outline" type="button">
          <p class="text-sm">Music</p>
        </button>
      </a>
    </div>
  );
}
