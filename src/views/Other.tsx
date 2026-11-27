import ItemCard from "../components/ItemCard.tsx";
import LinkCard from "../components/LinkCard.tsx";
import Page from "../components/Page.tsx";
import { notes } from "../data/notes.ts";

export default function Other() {
  return (
    <Page banner="escher" heading="Other">
    {/* <ItemCard
        title="Research and Academic Projects"
        items={[
          {
            institution: "Penrose Diagrams",
            sideInfo: "Ashoka University",
            location: "Sonipat, HR, India",
            start: "Dec 2025",
            end: "Jan 2026",
            details:
              "Under Prof. Vikram Vyas. Did a study project on the mathematics behind Penrose diagrams and their connection to the maximally extended Schwarszchild solution.",
          },
        ]}
      />*/}
      <ItemCard
        title="Other Projects"
        items={[
          {
            institution: "Skr̥ptLearn",
            sideInfo: "",
            start: "Nov 2024",
            end: "Present",
            details:
              "<a class='link' href='https://github.com/akhilesh-balaji/script-learn'>GitHub Link</a>. An application to learn new writing systems and practice them. Currently working on including voice recognition of syllables.",
          },
          {
            institution: " ⟨Q|uant⟩",
            // sideInfo: "Web Application",
            start: "May 2022",
            end: "Mar 2026",
            details:
              "<a class='link' href='https://quant-sand.vercel.app/'>Deployment link</a>. A quantum computing game aiming to visualize the operations of quantum gates on qubit state, in light of my effort towards effective science communication. I may return to this in the future.",
          },
          {
            institution: "Deconvolution-Based Sound Visualizer",
            start: "Dec 2025",
            // end: "Present",
            details:
              "A weekend experiment: a responsive sound visualizer that exploits ringing artifacts in Wiener deconvolution. <a class='link' href='https://ringing-sound-visualization.vercel.app/'>Deployment link</a>.",
          },
          {
            institution: "Periodic Trajectories of Dynamical Billiards",
            sideInfo: "IB Extended Essay",
            start: "Jan 2024",
            end: "Dec 2024",
            details:
              "Not yet authorized to release the paper in the public domain. My IB EE in math was on using analytical mechanics to model dynamical billiards. I acquired a background in non-smooth dynamics, multivariable calculus, partial differential equations, and some measure theory.",
          },
          {
            institution: "The Geekly",
            sideInfo: "President, Editor, Founder",
            start: "Jan 2018",
            end: "Mar 2025",
            details:
              "Founded and lead a science magazine focused on rigorous yet intuitive science communication. Published in collaboration with a peer .",
          },
          {
            institution: "Textylic",
            start: "Jul 2020",
            end: "Jun 2024",
            details:
              "<a class='link' href='https://github.com/akhilesh-balaji/Textylic'>GitHub Link</a>. An open source sticky notes application I created as one of my first projects, that I continued to maintain for four years.",
          },
        ]}
      />

      <LinkCard
        title="Expository Notes and Miscellaneous Material"
        items={notes}
        empty="Notes and other material will be posted here. Please check back later."
      />

      <ItemCard
        title="Volunteer Experience"
        items={[
          {
            institution: "Saṅgītāmṛtaṁ",
            sideInfo: "Founder & Leading Coordinator (aff. Youth For Seva)",
            location: "Bengaluru, KA, India",
            start: "Jun 2024",
            end: "Oct 2025",
            details:
              "Visited government schools weekly to teach secular Carnatic vocal music. Promoted cultural pride and a positive mindset among students. Assembled an anthology of secular Kannada songs promoting peace and inclusivity.",
          },
          {
            institution: "Computer Comprehension Programme",
            sideInfo: "Founder & Leading Coordinator (aff. Youth For Seva)",
            location: "Bengaluru, KA, India",
            important: true,
            start: "Sep 2022",
            end: "Feb 2025",
            details:
              "Visited government schools weekly to teach programming, improving problem-solving & creativity. Coordinated a team of 9 volunteers and prepared teaching material for 150+ students.",
          },
        ]}
      />

      {/*<ItemCard
        title="Awards"
        items={[
          {
            institution: "Special Award at ISEF '24",
            sideInfo: "Mawhiba aff. Kingdom of Saudi Arabia",
            location: "Los Angeles, CA, United States",
            important: true,
            start: "May 2024",
            details:
              "At the Regeneron International Science and Engineering Fair 2024, in which over 1500 students across the world participated (see previous award), we were awarded the King Abdullaziz and his Companions Foundation for Giftedness and Creativity award.",
          },
          {
            institution: "Grand Award at IRIS",
            sideInfo: "Initiative for Research and Innovation in STEM",
            location: "New Delhi, DL, India",
            important: true,
            start: "Jan 2024",
            details:
              "A peer and I won the IRIS Grand Award for our work on a vision correcting display. At the science fair, after rigorous evaluation, we were announced to be in the top 20 teams to represent India at Regeneron International Science and Engineering Fair 2024.",
          },
          {
            institution: "Bronze Honour at IYMC",
            sideInfo: "International Youth Math Competition",
            start: "Nov 2023",
            details:
              "Qualified to the final round and earned a bronze honour. In the pre-final round, I read through formal mathematical research papers, and answered comprehension and proof-based questions pertaining to them.",
          },
          {
            institution: "Neev Keystone Project Award",
            sideInfo: "Neev Academy",
            start: "May 2023",
            details:
              "A major project I undertook in grade 10 was the creation of a quantum computation-based educational game to convey knowledge and intuition about quantum gates, requiring me to understand the mathematical and physics-based prerequisites of the subject.",
          },
          {
            institution: "Neev Service Excellence Award",
            sideInfo: "Neev Academy",
            start: "Apr. 2023",
            end: "Apr. 2023",
            details: "For the Computer Comprehension Programme (ℂ𝕆𝕄ℙ²).",
          },
          {
            institution: "Miscellaneous",
            details: `
                  <ul class="list-disc pl-5 space-y-1">
                    <li><strong>1st Place — RedBrickHacks High School Edition</strong>, Ashoka University (Jan. 2023)</li>
                    <li><strong>2nd Place — NeevHacks Hackathon</strong>, Neev Academy (Mar. 2022)</li>
                    <li><strong>2nd Place — Stonehill Hackathon</strong>, Stonehill International School (Mar. 2022)</li>
                    <li><strong>1st Place — Project Salus</strong>, Christ Junior College (Nov. 2021)</li>
                  </ul>
                `,
          },
        ]}
      />*/}

    </Page>
  );
}
