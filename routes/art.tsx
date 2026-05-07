import { useSignal } from "@preact/signals";
import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import Counter from "../islands/Counter.tsx";
import Banner from "../components/Banner.tsx";
import BouncingBalls from "../islands/BouncingBall.tsx";
import Menu from "../components/Menu.tsx";
import Social from "../components/Social.tsx";
import ItemCard from "../components/ItemCard.tsx";
import Skills from "../components/Skills.tsx";
import Footer from "../components/Footer.tsx";

export default define.page(function Home(ctx) {
  const count = useSignal(3);

  console.log("Shared value " + ctx.state.shared);

  return (
    <div class="px-4 py-8 mx-auto min-h-screen bg-base-100">
      <Head>
        <title>Akhilesh Balaji</title>
      </Head>
      <BouncingBalls />
      <script type="module" src="/vim.js"></script>
      <button
        type={"button"}
        class="sr-only focus:not-sr-only btn-ghost mt-4 border-0 outline-0"
      >
        <span class={"fixed top-2 left-2"}>
          You may navigate using Vim keybindings.
        </span>
      </button>
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <Menu />
        <Banner art={true} />
        <div class="max-w rounded-3xl border-2 items-center justify-center flex flex-col mx-auto px-6 py-4 my-3 border-neutral">
          <div class="max-w items-center justify-center flex flex-col mx-auto my-0">
            <div class="relative inline-block">
              <h1 class="text-3xl font-bold my-0 absolute inset-0 text-warning/30 pointer-events-none z-10">
                Akhilēśh Bālājī
              </h1>
              <h1 class="text-3xl font-bold my-0 text-warning bright-yellow-gradient">
                Akhilesh Balajı
              </h1>
            </div>
            <h1 class="text-xl my-0 text-warning font-serif">
              அகி²லேஶ் பா³லாஜீ
            </h1>
          </div>

          <p class="my-4 text-justify font-serif">
            நான் செய்யும் கலை பற்றிய பகுதிக்கு வரவேற்கிறேன். நான் ௰௩ ஆண்டுகளாக கர்நாடக இசை
            கற்றுக்கொண்டு வருகிறேன். லயம், ராகம் மற்றும் சாஹித்யம் ஆகியவற்றின் நடுவில் இருக்கும்
            நிலையில், நாத தியானம் செய்வதில் எனக்கு சாந்தி கிடைக்கிறது. <br />
            <br />

            நான் இசையை சமுதாயத்தை ஒன்றாக இணைக்கும் ஒரு தத்துவமாக பார்க்கிறேன்—அது ஒரே
            விஷயத்திற்கு பல தரிசனங்களை அளிக்கிறது. கடவுள், இயற்கை, ஒழுக்கம், அல்லது சமூக
            முன்னேற்றம் ஆகிய எதுவாக இருந்தாலும், இசையில் அவற்றைப் பற்றிய கருத்துகள் உள்ளன.
            அவற்றை ரசிகர்களுக்கு எடுத்துக் காட்டி, அவர்களின் மனதைத் திறப்பது கலைஞர்களின்
            பொறுப்பு. <br />
            <br />

            எனக்கு தீட்சிதர் கீர்த்தனைகளில் குறிப்பாக ஆர்வம் உள்ளது—இப்பாடல்களின் வடிவமைப்பு,
            கட்டமைப்பு மற்றும் சாஹித்யம் அனைத்தும் முழுமை பெற்றவை. <br /> <br />
          </p>

          <p class="my-0">
            <span class="opacity-50">
              Some (Carnatic) listening recommendations.
            </span>
            <ul class="list-disc px-4">
              <li>
                <a
                  href="https://www.youtube.com/watch?v=DBeEDstz0r8"
                  class="link"
                >
                  Chandraśēkharaṁ Āśrayē/V. Raghavan + K.
                  Venkataraman/Kīravāṇī/K-Tripuṭa (M.S. Subbulakshmi)
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=nRhk81mKvjY"
                  class="link"
                >
                  Divākara Tanujam/Dīkṣitar/Yadukula Kāmbōjī/C-Ēka (Semmangudi
                  Srinivasa Iyer)
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=lUlvnUva-R0"
                  class="link"
                >
                  Ārupaḍai Vīḍu/M.P. Sivan/Rāgamālikā/Ādi (multiple naḍai-s)
                  (M.L. Vasanthakumari)
                </a>
              </li>
              <li>
                <a
                  href="https://archive.org/details/DKPDKJRTPJaganmohini"
                  class="link"
                >
                  Neñjē Ninai Anbē/Naina Piḷḷai (Pallavi)/Jaganmōhinī +
                  Rāgamālikā/Ādi (Tiśra Naḍai, 2 kaḷai) (D.K. Pattammal + D.K.
                  Jayaraman)
                </a>
              </li>
            </ul>
          </p>
        </div>

        <Social />

        {/* <ItemCard */}
        {/*   title="As a Listener of Music" */}
        {/*   items={[ */}
        {/*     { */}
        {/*       institution: "JNCASR", */}
        {/*       sideInfo: "Student Researcher", */}
        {/*       location: "Bengaluru, KA, India", */}
        {/*       start: "Jan 2024", */}
        {/*       end: "Present", */}
        {/*       important: true, */}
        {/*       details: */}
        {/*         "Mentor: Prof. Vidhyadhiraja Sudhindra. Working on quantum error correction using the Lindbladian master equation formalism to analyze the effectiveness of quantum low density parity check codes implemented in cluster state quantum computers.", */}
        {/*     }, */}
        {/*   ]} */}
        {/* /> */}

        {/* <Counter count={count} /> */}
        <Footer />
      </div>
    </div>
  );
});
