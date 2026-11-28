import Social from "./Social.tsx";

export default function Footer() {
  return (
    <div class="max-w rounded-3xl border-2 flex flex-col-reverse min-[540px]:flex-row items-stretch min-[540px]:items-center gap-3 min-[540px]:gap-0 mx-auto px-6 py-4 min-[540px]:py-2 md:py-0 my-0 mt-4 border-neutral w-full text-lg">
      <div class="flex flex-col items-center min-[540px]:items-stretch text-center min-[540px]:text-left w-full min-[540px]:w-auto min-[540px]:flex-1 whitespace-nowrap">
        <a href="/" class="block sm:hidden mb-2">
          <img
            class="h-6 w-auto object-contain"
            src="/logo.png"
            alt="the logo of Akhilesh Balaji: a right triangle adjacent to the letter B"
          />
        </a>
        <p>&copy; <em class="italic">Akhilesh Balaji, 2026.</em></p>
      </div>
      <div class="w-full min-[540px]:w-auto min-[540px]:ml-auto min-[540px]:shrink-0 max-[539px]:[&>*]:!flex max-[539px]:[&>*]:!flex-row max-[539px]:[&>*]:!flex-nowrap max-[539px]:[&>*]:!justify-between">
        <Social />
      </div>
    </div>
  );
}

