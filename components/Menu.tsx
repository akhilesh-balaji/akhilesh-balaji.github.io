export default function Menu() {
  return (
    <div class="flex items-center gap-2 py-4 content-center backdrop-blur-sm bg-accent-content/60 px-4 rounded-2xl fixed top-2 border-2 border-neutral/50 z-50">
      <img
        class="h-10"
        // src="/path119_full.png"
        src="/logo.png"
        alt="the logo of Akhilesh Balaji: a right triangle adjacent to the letter B"
      />
      <button class="btn btn-primary rounded-full btn-outline" type="button">
        <p class="text-sm">Blog</p>
      </button>

      <button class="btn btn-warning rounded-full btn-outline" type="button">
        <p class="text-sm">Work</p>
      </button>
      <button class="btn btn-secondary rounded-full btn-outline" type="button">
        <p class="text-sm">Projects</p>
      </button>
      <button class="btn btn-success rounded-full btn-outline" type="button">
        <p class="text-sm">CV</p>
      </button>
    </div>
  );
}
