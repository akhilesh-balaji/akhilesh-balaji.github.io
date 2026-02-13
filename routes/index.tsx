import { useSignal } from "@preact/signals";
import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import Counter from "../islands/Counter.tsx";
import Banner from "../components/Banner.tsx";
import Menu from "../components/Menu.tsx";
import Social from "../components/Social.tsx";
import ItemCard from "../components/ItemCard.tsx";

export default define.page(function Home(ctx) {
  const count = useSignal(3);

  console.log("Shared value " + ctx.state.shared);

  return (
    <div class="px-4 py-8 mx-auto min-h-screen">
      <Head>
        <title>Akhilesh Balaji</title>
      </Head>
      <script type="module" src="/vim.js"></script>
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <Menu />
        <Banner />
        <div class="max-w rounded-3xl border-2 items-center justify-center flex flex-col mx-auto px-6 py-4 my-3 border-neutral">
          <div class="max-w items-center justify-center flex flex-col mx-auto my-0">
            <div class="relative inline-block">
              <h1 class="text-3xl font-bold my-0 absolute inset-0 text-primary/30 pointer-events-none -z-10">
                Akhilēśh Bālājī
              </h1>
              <h1 class="text-3xl font-bold my-0 text-primary bright-accent-gradient">
                Akhilesh Balajı
              </h1>
            </div>
            <h1 class="text-xl my-0 text-primary font-serif">
              அகி²லேஶ் பா³லாஜீ
            </h1>
          </div>

          <p class="my-4 text-justify">
            As an undergraduate student reading Mathematics and Computer Science
            at Ashoka University, I am intrigued by (mathematics ∩⋆ computer
            science ∩⋆ theoretical physics), where ∩⋆ denotes a union operator
            leaning toward pairwise intersection. <br />
            <br />
            I am interested in research areas such as quantum computing,
            cryptography, automata, and dynamical systems. The quest for
            knowledge will never truly be over, but as time and science
            progress, the gap between our questions and their answers will
            gradually close. <br />
            <br />
            In the wise words of Auvaiyār (similar sentiments have naturally
            been expressed by other philosophers): “What is learned is but a
            handful of earth; what remains unknown is as vast as the cosmos”
            (<em>
              kaṟṟatu kaimaṇ aḷavu, kallātatu ulakaḷavu
            </em>).
            {/* Try updating this... message in the */}
            {/* <code class="mx-2">./routes/index.tsx</code> file, and refresh. */}
          </p>
        </div>

        <Social />

        <ItemCard
          title="Education"
          items={[
            {
              institution: "Ashoka University",
              sideInfo: "BS (Hons) with Research in Math and CS",
              location: "Sonipat, HR, India",
              start: "Aug 2025",
              end: "Present",
              details:
                "UG 1st year. Math society, IEEE, RedBrickHacks III organizing team.",
            },
            {
              institution: "Neev Academy",
              location: "Bengaluru, KA, India",
              start: "May 2009",
              end: "Jul 2025",
              details: "IB PYP, MYP, DP.",
            },
          ]}
        />

        {/* <Counter count={count} /> */}
      </div>
    </div>
  );
});
