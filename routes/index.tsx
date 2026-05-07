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
    <div class="px-4 py-8 mx-auto min-h-screen">
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
        <Banner art={false} />
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
            science ∩⋆ some theoretical physics), where ∩⋆ denotes a union
            operator leaning toward pairwise intersection. <br />
            <br />
            I am interested in research areas such as quantum computing, formal
            verification, automata, and dynamical systems.
            {/* The quest for */}
            {/* knowledge will never truly be over, but as time and science */}
            {/* progress, the gap between our questions and their answers will */}
            {/* gradually close. */}
            <br />
            <br />
            The wise words of Auvaiyār (similar sentiments have naturally been
            expressed by other philosophers) constitute my motto: “What is
            learned is but a handful of earth; what remains unknown is as vast
            as the cosmos” (<em>
              kaṟṟatu kaimaṇ aḷavu, kallātatu ulakaḷavu
            </em>). <br />
            <br />
            Under the guidance of my teachers, I have also been learning and
            performing vocal Carnatic music for 13 years. <br />
            <br />
            <i>
              This site is a work in progress. Please check back later to see if
              it's complete.
            </i>
            {/* Try updating this... message in the */}
            {/* <code class="mx-2">./routes/index.tsx</code> file, and refresh. */}
          </p>
        </div>

        <Social layout={"flex"} />

        {/* <ItemCard */}
        {/*   title="Education" */}
        {/*   items={[ */}
        {/*     { */}
        {/*       institution: "Ashoka University", */}
        {/*       sideInfo: "BS (Hons) with Research in Math and CS", */}
        {/*       location: "Sonipat, HR, India", */}
        {/*       start: "Aug 2025", */}
        {/*       end: "Present", */}
        {/*       details: */}
        {/*         "UG 1st year. Math society, IEEE, RedBrickHacks III organizing team.", */}
        {/*     }, */}
        {/*     { */}
        {/*       institution: "Neev Academy", */}
        {/*       location: "Bengaluru, KA, India", */}
        {/*       start: "May 2009", */}
        {/*       end: "Jul 2025", */}
        {/*       details: "IB PYP, MYP, DP.", */}
        {/*     }, */}
        {/*   ]} */}
        {/* /> */}
        {/**/}
        {/* <div id="work" class={"scroll-m-20"}> */}
        {/*   <ItemCard */}
        {/*     title="Experience" */}
        {/*     items={[ */}
        {/*       { */}
        {/*         institution: "Ashoka University Mathematics Society", */}
        {/*         sideInfo: "Member of Events Vertical + PoC for Geometry Bee", */}
        {/*         location: "Sonipat, HR, India", */}
        {/*         start: "Sep 2025", */}
        {/*         end: "Present", */}
        {/*         details: */}
        {/*           "Organizing and coordinating society events; Point of Contact for the Geometry Bee.", */}
        {/*       }, */}
        {/*       { */}
        {/*         institution: "Ashoka RedBrick Hacks III", */}
        {/*         sideInfo: "Member of Organizing Team", */}
        {/*         location: "Sonipat, HR, India", */}
        {/*         start: "Dec 2025", */}
        {/*         end: "Feb 2026", */}
        {/*         details: */}
        {/*           "Helped organize the third edition of RBH held in collaboration with the Ashoka Makerspace. Worked with large codebases (MonkeyType) for the typing competition and contributed to smooth functioning of judging pipeline by preparing rubrics.", */}
        {/*       }, */}
        {/**/}
        {/*       { */}
        {/*         institution: "JNCASR", */}
        {/*         sideInfo: "Student Researcher", */}
        {/*         location: "Bengaluru, KA, India", */}
        {/*         start: "Jan 2024", */}
        {/*         end: "Present", */}
        {/*         important: true, */}
        {/*         details: */}
        {/*           "Mentor: Prof. Vidhyadhiraja Sudhindra. Working on quantum error correction using the Lindbladian master equation formalism to analyze the effectiveness of quantum low density parity check codes implemented in cluster state quantum computers.", */}
        {/*       }, */}
        {/*       { */}
        {/*         institution: "Ashoka University", */}
        {/*         sideInfo: "Student Research Intern", */}
        {/*         location: "Sonipat, HR, India", */}
        {/*         important: true, */}
        {/*         start: "Apr 2023", */}
        {/*         end: "Jan 2025", */}
        {/*         details: */}
        {/*           "Mentor: Prof. Partha Pratim Das. See <a href='https://arxiv.org/abs/2501.01450' class='link'>arXiv</a>. Worked on a 'vision correcting display' that modifies rendered images to suit the viewer’s eyesight. Explored double buffering, algorithm design, and signal processing.", */}
        {/*       }, */}
        {/*       { */}
        {/*         institution: "The Geekly", */}
        {/*         sideInfo: "President, Editor, Founder", */}
        {/*         start: "Jan 2018", */}
        {/*         end: "Present", */}
        {/*         details: */}
        {/*           "Founded and lead a science magazine focused on rigorous yet intuitive science communication. Published in collaboration with a peer and transitioning to a new platform.", */}
        {/*       }, */}
        {/*     ]} */}
        {/*   /> */}
        {/* </div> */}
        {/**/}
        <Skills />
        {/**/}
        {/* <div id="projects" class={"scroll-m-20"}> */}
        {/*   <ItemCard */}
        {/*     title="Research and Academic Projects" */}
        {/*     items={[ */}
        {/*       { */}
        {/*         institution: "The Microscope Project", */}
        {/*         sideInfo: "Ashoka University", */}
        {/*         location: "Sonipat, HR, India", */}
        {/*         start: "Jan 2026", */}
        {/*         end: "Present", */}
        {/*         details: */}
        {/*           "Under Prof. Meghana Agarwala. Working on processing and analysis of microscope images of fossilized pollen for classification. Full details cannot be released in public domain yet.", */}
        {/*       }, */}
        {/**/}
        {/*       { */}
        {/*         institution: "Penrose Diagrams", */}
        {/*         sideInfo: "Ashoka University", */}
        {/*         location: "Sonipat, HR, India", */}
        {/*         start: "Dec 2026", */}
        {/*         end: "Jan 2026", */}
        {/*         details: */}
        {/*           "Under Prof. Vikram Vyas. Did a study project on the mathematics behind Penrose diagrams and their connection to the maximally extended Schwarszchild solution.", */}
        {/*       }, */}
        {/*       { */}
        {/*         institution: "JNCASR", */}
        {/*         sideInfo: "Student Researcher", */}
        {/*         location: "Bengaluru, KA, India", */}
        {/*         start: "Jan 2024", */}
        {/*         end: "Present", */}
        {/*         details: */}
        {/*           "Mentor: Prof. Vidhyadhiraja Sudhindra. Working on quantum error correction using the Lindbladian master equation formalism to analyze the effectiveness of quantum low density parity check codes implemented in cluster state quantum computers.", */}
        {/*       }, */}
        {/*       { */}
        {/*         institution: "Ashoka University", */}
        {/*         sideInfo: "Student Research Intern", */}
        {/*         location: "Sonipat, HR, India", */}
        {/*         start: "Apr 2023", */}
        {/*         end: "Jan 2025", */}
        {/*         details: */}
        {/*           "Mentor: Prof. Partha Pratim Das. See <a href='https://arxiv.org/abs/2501.01450' class='link'>arXiv</a>. Worked on a 'vision correcting display' that modifies rendered images to suit the viewer’s eyesight. Explored double buffering, algorithm design, and signal processing.", */}
        {/*       }, */}
        {/*     ]} */}
        {/*   /> */}
        {/**/}
        {/*   <ItemCard */}
        {/*     title="Other Projects" */}
        {/*     items={[ */}
        {/*       { */}
        {/*         institution: "Skr̥ptLearn", */}
        {/*         sideInfo: "", */}
        {/*         start: "Nov 2024", */}
        {/*         end: "Present", */}
        {/*         details: */}
        {/*           "<a class='link' href='https://github.com/akhilesh-balaji/script-learn'>GitHub Link</a>. An application to learn new writing systems and practice them. Currently working on including voice recognition of syllables.", */}
        {/*       }, */}
        {/*       { */}
        {/*         institution: " ⟨Q|uant⟩", */}
        {/*         // sideInfo: "Web Application", */}
        {/*         start: "May 2022", */}
        {/*         end: "Present", */}
        {/*         details: */}
        {/*           "<a class='link' href='https://quant-sand.vercel.app/'>Deployment link</a>. A quantum computing game aiming to visualize the operations of quantum gates on qubit state, in light of my effort towards effective science communication. Currently reworking the game with a different implementation.", */}
        {/*       }, */}
        {/*       { */}
        {/*         institution: "Deconvolution-Based Sound Visualizer", */}
        {/*         start: "Dec 2025", */}
        {/*         end: "Present", */}
        {/*         details: */}
        {/*           "Working on a responsive sound visualizer that exploits ringing artifacts in Wiener deconvolution.", */}
        {/*       }, */}
        {/*       { */}
        {/*         institution: "Periodic Trajectories of Dynamical Billiards", */}
        {/*         sideInfo: "IB Extended Essay", */}
        {/*         start: "Jan 2024", */}
        {/*         end: "Dec 2024", */}
        {/*         details: */}
        {/*           "Not yet authorized to release the paper in the public domain. My IB EE in math was on using analytical mechanics to model dynamical billiards. I acquired a background in non-smooth dynamics, multivariable calculus, partial differential equations, and some measure theory.", */}
        {/*       }, */}
        {/*       { */}
        {/*         institution: "Textylic", */}
        {/*         start: "Jul 2020", */}
        {/*         end: "Jun 2024", */}
        {/*         details: */}
        {/*           "<a class='link' href='https://github.com/akhilesh-balaji/Textylic'>GitHub Link</a>. An open source sticky notes application I created as one of my first projects, that I continued to maintain for four years.", */}
        {/*       }, */}
        {/*       { */}
        {/*         institution: "Saṅgītāmṛtaṁ", */}
        {/*         sideInfo: "Founder & Leading Coordinator (aff. Youth For Seva)", */}
        {/*         location: "Bengaluru, KA, India", */}
        {/*         start: "Jun 2024", */}
        {/*         end: "Oct 2025", */}
        {/*         details: */}
        {/*           "Visited government schools weekly to teach secular Carnatic vocal music. Promoted cultural pride and a positive mindset among students. Assembled an anthology of secular Kannada songs promoting peace and inclusivity.", */}
        {/*       }, */}
        {/*       { */}
        {/*         institution: "Computer Comprehension Programme", */}
        {/*         sideInfo: "Founder & Leading Coordinator (aff. Youth For Seva)", */}
        {/*         location: "Bengaluru, KA, India", */}
        {/*         important: true, */}
        {/*         start: "Sep 2022", */}
        {/*         end: "Feb 2025", */}
        {/*         details: */}
        {/*           "Visited government schools weekly to teach programming, improving problem-solving & creativity. Coordinated a team of 9 volunteers and prepared teaching material for 150+ students.", */}
        {/*       }, */}
        {/*     ]} */}
        {/*   /> */}
        {/* </div> */}
        {/**/}
        {/* <ItemCard */}
        {/*   title="Awards" */}
        {/*   items={[ */}
        {/*     { */}
        {/*       institution: "Special Award at ISEF '24", */}
        {/*       sideInfo: "Mawhiba aff. Kingdom of Saudi Arabia", */}
        {/*       location: "Los Angeles, CA, United States", */}
        {/*       important: true, */}
        {/*       start: "May 2024", */}
        {/*       details: */}
        {/*         "At the Regeneron International Science and Engineering Fair 2024, in which over 1500 students across the world participated (see previous award), we were awarded the King Abdullaziz and his Companions Foundation for Giftedness and Creativity award.", */}
        {/*     }, */}
        {/*     { */}
        {/*       institution: "Grand Award at IRIS", */}
        {/*       sideInfo: "Initiative for Research and Innovation in STEM", */}
        {/*       location: "New Delhi, DL, India", */}
        {/*       important: true, */}
        {/*       start: "Jan 2024", */}
        {/*       details: */}
        {/*         "A peer and I won the IRIS Grand Award for our work on a vision correcting display. At the science fair, after rigorous evaluation, we were announced to be in the top 20 teams to represent India at Regeneron International Science and Engineering Fair 2024.", */}
        {/*     }, */}
        {/*     { */}
        {/*       institution: "Bronze Honour at IYMC", */}
        {/*       sideInfo: "International Youth Math Competition", */}
        {/*       start: "Nov 2023", */}
        {/*       details: */}
        {/*         "Qualified to the final round and earned a bronze honour. In the pre-final round, I read through formal mathematical research papers, and answered comprehension and proof-based questions pertaining to them.", */}
        {/*     }, */}
        {/*     { */}
        {/*       institution: "Neev Keystone Project Award", */}
        {/*       sideInfo: "Neev Academy", */}
        {/*       start: "May 2023", */}
        {/*       details: */}
        {/*         "A major project I undertook in grade 10 was the creation of a quantum computation-based educational game to convey knowledge and intuition about quantum gates, requiring me to understand the mathematical and physics-based prerequisites of the subject.", */}
        {/*     }, */}
        {/*     { */}
        {/*       institution: "Neev Service Excellence Award", */}
        {/*       sideInfo: "Neev Academy", */}
        {/*       start: "Apr. 2023", */}
        {/*       end: "Apr. 2023", */}
        {/*       details: "For the Computer Comprehension Programme (ℂ𝕆𝕄ℙ²).", */}
        {/*     }, */}
        {/*     { */}
        {/*       institution: "Miscellaneous", */}
        {/*       details: ` */}
        {/*         <ul class="list-disc pl-5 space-y-1"> */}
        {/*           <li><strong>1st Place — RedBrickHacks High School Edition</strong>, Ashoka University (Jan. 2023)</li> */}
        {/*           <li><strong>2nd Place — NeevHacks Hackathon</strong>, Neev Academy (Mar. 2022)</li> */}
        {/*           <li><strong>2nd Place — Stonehill Hackathon</strong>, Stonehill International School (Mar. 2022)</li> */}
        {/*           <li><strong>1st Place — Project Salus</strong>, Christ Junior College (Nov. 2021)</li> */}
        {/*         </ul> */}
        {/*       `, */}
        {/*     }, */}
        {/*   ]} */}
        {/* /> */}

        {/* <ItemCard */}
        {/*   title={"Academic Courses"} */}
        {/*   items={[ */}
        {/*     { */}
        {/*       institution: "Monsoon 2025", */}
        {/*       details: ` */}
        {/*         <ul class="list-disc pl-5 space-y-1"> */}
        {/*           <li>1000: Calculus</li> */}
        {/*           <li>0000: Quantitative Reasoning and Mathematical Thinking</li> */}
        {/*         </ul> */}
        {/*       `, */}
        {/*     }, */}
        {/*     { */}
        {/*       institution: "Spring 2026", */}
        {/*       details: ` */}
        {/*         <ul class="list-disc pl-5 space-y-1"> */}
        {/*           <li>1000: Multivariable Calculus</li> */}
        {/*           <li>1000: Discrete Mathematics</li> */}
        {/*           <li>1000: Introduction to Computer Science</li> */}
        {/*         </ul> */}
        {/*       `, */}
        {/*     }, */}
        {/*   ]} */}
        {/* /> */}

        {/* <Counter count={count} /> */}
        <Footer />
      </div>
    </div>
  );
});
