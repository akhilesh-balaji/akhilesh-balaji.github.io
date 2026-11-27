import Page from "../components/Page.tsx";

export default function NotFound() {
  return (
    <Page banner="math" heading="404" current="">
      {/* Main 404 Card */}
      <div class="w-full rounded-3xl border-2 border-neutral px-6 py-10 my-3 flex flex-col items-center justify-center text-center">

        {/* Large bold 404 in serif */}
        <h1 class="text-7xl sm:text-8xl font-bold font-serif tracking-tight select-none text-secondary">
          404
        </h1>

        {/* Small caps "not found" in lowercase */}
        <p class="text-lg sm:text-xl text-base-content/70 [font-variant-caps:small-caps] mt-1 mb-8">
          page not found
        </p>
        {/* Pallavi of Chakkani Raja in Telugu script */}
        <p
          lang="te"
          style={{ fontFamily: "'Noto Serif Telugu', serif" }}
          class="text-2xl sm:text-3xl font-medium text-primary leading-relaxed mb-3"
        >
          చక్కని రాజ మార్గముండగ, సందుల దూరనేల, ఓ మనసా?
        </p>

        {/* English translation in muted gray */}
        <p class="text-base sm:text-lg text-base-content/50 italic max-w-md mb-4">
          “When there is a grand royal highway, why stray into narrow bylanes, O mind?”
        </p>

        {/* Attribution */}
        <p class="text-sm sm:text-base text-base-content/40 max-w-md mb-8">
          —Tyāgabrahmam in the Kharaharapriyā kriti <i>Cakkani Rājamārgamu</i>
        </p>

        {/* Navbar-style back home button */}
        <nav
          aria-label="Back to home"
          // class="flex items-center gap-1 sm:gap-2 py-4 content-center backdrop-blur-lg bg-accent-content/60 px-4 rounded-2xl sm:rounded-3xl border-2 border-neutral/50 font-serif"
          class="content-center font-serif"
        >
          <a href="/">
            <button
              class="btn btn-primary btn-outline rounded-full"
              type="button"
            >
              <p class="text-sm">← Back Home</p>
            </button>
          </a>
        </nav>
      </div>
    </Page>
  );
}
