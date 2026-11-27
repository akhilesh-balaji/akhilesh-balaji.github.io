import ItemCard from "../components/ItemCard.tsx";
import Page from "../components/Page.tsx";

export default function Work() {
  return (
    <Page banner="math" heading="Work">
      <ItemCard
        title="Experience"
        items={[
          {
            institution: "The Microscope Project",
            sideInfo: "Ashoka University",
            location: "Sonipat, HR, India",
            start: "Jan 2026",
            end: "Present",
            details:
              "Under Prof. Meghana Agarwala. Working on processing and analysis of microscope images of fossilized pollen for classification. Full details cannot be released in public domain yet.",
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
        title="Teaching (courses I have been a TA for)"
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
            start: "Sep 2022",
            end: "Feb 2025",
            details:
              "Visited government schools weekly to teach programming, improving problem-solving & creativity. Coordinated a team of 9 volunteers and prepared teaching material for 150+ students.",
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
