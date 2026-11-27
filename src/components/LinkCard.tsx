export type LinkCardItem = {
  /** Text shown for the link. */
  title: string;
  /** e.g. "/blog/my-post.pdf" (a file in public/blog/) or any full URL. */
  href: string;
  /** Optional, shown after the link, e.g. "Mar 2026". */
  date?: string;
};

type Props = {
  title: string;
  items: LinkCardItem[];
  /** Shown while `items` is empty. */
  empty?: string;
};

/** Same card frame as ItemCard, but a plain bulleted list of links. */
export default function LinkCard({ title, items, empty }: Props) {
  return (
    <div class="max-w rounded-3xl border-2 items-center justify-center flex flex-col mx-auto px-6 py-4 my-3 border-neutral w-full">
      <div class="w-full">
        <h2 class="text-xl font-semibold  border-b-2 border-neutral pb-2 mb-4 text-primary [font-variant-caps:small-caps]">
          {title}
        </h2>

        {items.length > 0 ? (
          <ul class="list-disc px-4 space-y-1 my-0">
            {items.map((item) => (
              <li>
                <a class="link" href={item.href} target="_blank" rel="noopener" 
                dangerouslySetInnerHTML={{ __html: item.title }}>
                  {/*item.title*/}
                </a>
                {item.date && (
                  <span class="opacity-60 text-sm"> ({item.date})</span>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p class="italic opacity-70 my-0">
            {empty ?? "Nothing here yet. Please check back later."}
          </p>
        )}
      </div>
    </div>
  );
}
