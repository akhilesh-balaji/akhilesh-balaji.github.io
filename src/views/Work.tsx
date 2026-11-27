import ItemCard from "../components/ItemCard.tsx";
import Page from "../components/Page.tsx";

export default function Work() {
  return (
    <Page banner="math" heading="Work" current="work">
      <ItemCard
        title="experience"
        items={[
          {
            institution: "DiagonaLean",
            sideInfo: "Research Assistant",
            location: "Sri City, AP, India",
            start: "May 2026",
            end: "Present",
            details:
              "Under Prof. T.V.H. Prathamesh and Prof. Aalok Thakkar. Working on formalizing undecidability proofs in Lean 4 as part of an e ort to create a diagonalization/undecidability library for Lean, and implementing tactics to traverse the reduction graph formed by the theorems formalized. <a href='https://diagonalean.vercel.app/' class=link>Project website link</a>.",
          },
          {
            institution: "The Microscope Project",
            sideInfo: "Research Assistant, Ashoka University",
            location: "Sonipat, HR, India",
            start: "Jan 2026",
            end: "Present",
            details:
              "Under Prof. Meghana Agarwala. Working on processing and analysis of microscope images of fossilized pollen for classification. Full details cannot be released in public domain yet. The work is supported by Schmidt Sciences at Oxford University.",
          },
          // {
          //   institution: "Ashoka University Mathematics Society",
          //   sideInfo: "Member of Events Vertical + PoC for Geometry Bee",
          //   location: "Sonipat, HR, India",
          //   start: "Sep 2025",
          //   end: "Present",
          //   details:
          //     "Organizing and coordinating society events; Point of Contact for the Geometry Bee.",
          // },
          // {
          //   institution: "Ashoka RedBrick Hacks III",
          //   sideInfo: "Member of Organizing Team",
          //   location: "Sonipat, HR, India",
          //   start: "Dec 2025",
          //   end: "Feb 2026",
          //   details:
          //     "Helped organize the third edition of RBH held in collaboration with the Ashoka Makerspace. Worked with large codebases (MonkeyType) for the typing competition and contributed to smooth functioning of judging pipeline by preparing rubrics.",
          // },
          {
            institution: "JNCASR",
            sideInfo: "Student Researcher",
            location: "Bengaluru, KA, India",
            start: "Jan 2024",
            end: "Jan 2026",
            details:
              "Mentor: Prof. Vidhyadhiraja Sudhindra. Worked on quantum error correction using the Lindbladian master equation formalism to analyze the effectiveness of quantum low density parity check codes implemented in cluster state quantum computers.",
          },
          {
            institution: "Ashoka University",
            sideInfo: "Student Research Intern",
            location: "Sonipat, HR, India",
            start: "Apr 2023",
            end: "Jan 2025",
            details:
              "Mentor: Prof. Partha Pratim Das. See <a href='https://arxiv.org/abs/2501.01450' class='link'>arXiv</a>. Worked on a 'vision correcting display' that modifies rendered images to suit the viewer’s eyesight. Explored double buffering, algorithm design, and signal processing.",
          },
        ]}
      />

      <ItemCard
        title="teaching"
        description="Courses I have been a teaching assistant for."
        items={[
          {
            institution: "<code>[CS-1110/MAT-2203-1]</code> Discrete Mathematics",
            sideInfo: "TA for Prof. Abhishek Khetan",
            location: "Ashoka University",
            start: "Monsoon 2026",
            end: "",
            details:
              "Was in charge of the programming lab component of the course, which taught the functional programming paradigm. <a href='/notes/functional_programming_notes_and_problems_monsoon_2026_dm.pdf' class=link>Functional programming notes and problems</a>.",
          },
        ]}
      />

      {/*<ItemCard
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
      />*/}

      {/*
        Academic Courses (left out for now: the course codes look like
        placeholders). Move it above or below any card to show it.

        <ItemCard
          title="Academic Courses"
          items={[
                {
                  institution: "Monsoon 2025",
                  details: `
                    <ul class="list-disc pl-5 space-y-1">
                      <li>1000: Calculus</li>
                      <li>0000: Quantitative Reasoning and Mathematical Thinking</li>
                    </ul>
                  `,
                },
                {
                  institution: "Spring 2026",
                  details: `
                    <ul class="list-disc pl-5 space-y-1">
                      <li>1000: Multivariable Calculus</li>
                      <li>1000: Discrete Mathematics</li>
                      <li>1000: Introduction to Computer Science</li>
                    </ul>
                  `,
                },
          ]}
        />
      */}
    </Page>
  );
}
