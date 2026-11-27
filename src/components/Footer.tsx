import Social from "./Social.tsx";

export default function Footer() {
  return (
    <div class="max-w rounded-3xl border-2 items-center flex mx-auto px-6 py-2 md:py-0 my-0 mt-4 border-neutral w-full text-lg">
      <div class="flex flex-col flex-1">
        <img
          class="block sm:hidden h-6 w-auto object-contain mb-2 self-start"
          src="/logo.png"
          alt="the logo of Akhilesh Balaji: a right triangle adjacent to the letter B"
        />
        <p>&copy; <em class="italic">Akhilesh Balaji, 2026.</em></p>
      </div>
      <div class="ml-auto">
        <Social />
      </div>
    </div>
  );
}
