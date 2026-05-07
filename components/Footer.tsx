import Social from "./Social.tsx";

export default function Footer() {
  return (
    <div class="max-w rounded-3xl border-2 items-center flex mx-auto px-6 py-2 my-0 border-neutral w-full">
      <div class="flex flex-col flex-1">
        <img
          class="block sm:hidden h-10 w-auto object-contain mb-2 self-start"
          src="/logo.png"
          alt="the logo of Akhilesh Balaji: a right triangle adjacent to the letter B"
        />
        <span class="italic">
          Freshly built by Akhilesh Balaji in 2026.
        </span>
      </div>
      <div class="ml-auto">
        <Social />
      </div>
    </div>
  );
}
