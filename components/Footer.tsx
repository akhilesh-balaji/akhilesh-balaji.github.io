import Social from "./Social.tsx";

export default function Footer() {
  return (
    <div class="max-w rounded-3xl border-2 items-center flex mx-auto px-6 py-0 my-0 border-neutral w-full">
      <span class="flex-1 italic">
        Freshly built by Akhilesh Balaji in 2026.
      </span>
      <div class="ml-auto">
        <Social />
      </div>
    </div>
  );
}
