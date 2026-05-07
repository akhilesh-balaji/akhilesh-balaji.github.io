export type ItemCardItem = {
  institution: string;

  sideInfo?: string;
  location?: string;
  important?: boolean;

  start?: string;
  end?: string;

  details?: string;
  highlights?: string[];
};

type Props = {
  items: ItemCardItem[];
  title?: string;
};

export default function ItemCard({ items, title }: Props) {
  return (
    <div class="max-w rounded-3xl border-2 items-center justify-center flex flex-col mx-auto px-6 py-4 my-3 border-neutral w-full">
      <div class="w-full">
        <h2 class="text-xl font-semibold  border-b-2 border-neutral pb-2 mb-4 text-primary">
          {title}
        </h2>

        <div class="space-y-5">
          {items.map((item) => (
            <div class="flex flex-col md:flex-row md:justify-between gap-2">
              {/* Left column */}
              <div>
                <h3
                  class={`font-medium text-lg ${
                    item.important ? "text-accent" : ""
                  }`}
                >
                  {item.institution}
                  {item.sideInfo && (
                    <span class="opacity-70 text-sm">
                      {" "}★ {item.sideInfo}
                    </span>
                  )}
                </h3>

                {item.details && (
                  <p
                    class="text-sm opacity-70 mt-1"
                    dangerouslySetInnerHTML={{ __html: item.details }}
                  >
                    {/* {item.details} */}
                  </p>
                )}

                {item.highlights?.length && (
                  <ul class="text-sm opacity-70 mt-2 list-disc ml-5 space-y-1">
                    {item.highlights.map((h) => <li>{h}</li>)}
                  </ul>
                )}
              </div>

              {/* Right column (only if something exists) */}
              {(item.location || item.start || item.end) && (
                <div class="text-sm opacity-60 md:text-right whitespace-nowrap">
                  {item.location && <p>{item.location}</p>}
                  {(item.start || item.end) && (
                    <p>
                      {item.start ?? ""}
                      {item.start && item.end && " — "}
                      {item.end ?? ""}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
