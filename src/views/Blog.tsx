import LinkCard from "../components/LinkCard.tsx";
import Page from "../components/Page.tsx";
import { posts } from "../data/blog.ts";

export default function Blog() {
  return (
    <Page banner="math" heading="Blog">
      <LinkCard
        title="Blog"
        items={posts}
        empty="Posts will appear here. Please check back later."
      />
    </Page>
  );
}
