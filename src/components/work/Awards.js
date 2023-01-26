import WorkSection from './WorkSection';
import WorkItem from './WorkItem';

import neevHacksLink from '../../files/NeevHacks Akhilesh_Balaji.pdf';
import salusLink from '../../files/Akhilesh Balaji Project Salus.pdf';
import sisHackLink from '../../files/SISHack 2022.pdf';

export default function Awards() {
  return (
    <WorkSection sectionTitle={'Awards'}>
      <WorkItem
        workTitle={'Neev Hacks'}
        workDesc={
          'I, along with my team, won second place in a hackathon organized by Neev Academy.'
        }
        workDate={'Mar 2022'}
        workExtDesc={
          'On Mar 12th of 2022, I, along with a team of 3 other members, won the prize for the first runner up, in a hackathon hosted by Neev Academy, Neev Hacks. We created a browser extension, written in traditional web development tools, that would assist students in the management of their time effectively, such that they could complete each of their tasks based on which one was most important. This was done taking into account the total screen time that each task would add up to, so that we could provide eye and mindfulness breaks in between. One of the hardest parts about creating this was programming the algorithm to order tasks, and decide on the amount of time required for each task.'
        }
        workLink={neevHacksLink}
      />{' '}
      <WorkItem
        workTitle={"SISHack '22"}
        workDesc={
          'My team won second place in 24 hour hackathon organized by Stonehill International School.'
        }
        workDate={'Mar 2022'}
        workExtDesc={
          "Mar 5th was when my team of 5 members won the second place in a 24-hour hackathon organized by Stonehill International School. Of the three themes offered to us, we picked 'Responsible consumption and production.' In accordance with aforesaid theme, our product was a carbon footprint tracker that aimed to motivate the user to reduce their carbon footprint to as low as it could possibly be, taking into account the food that they consumed, how they travelled, &c. The hackathon helped build my collaboration skills as the team leader, working effectively and co-operatively towards a single goal."
        }
        workLink={sisHackLink}
      />{' '}
      <WorkItem
        workTitle={'Project Salus'}
        workDesc={
          'I was awarded first place in a climate change-based science competition.'
        }
        workDate={'Nov 2021'}
        workExtDesc={
          'On 26 Nov 2021, I, along with another team member, won a climate change-themed science fest organized by Christ Junior College called Project Salus. It consisted of two parts. The first consisted of climate change-themed science challenges which were time-bound and had to be solved using Python within 10 minutes. After we passed this round, we were instructed to create a video about how a particular country was implementing the UNSDGs, which had to be done at night. Specifically, the time alloted was 10:30 PM–12:30 AM. Then, we had to present this video to the judges, and they asked us questions about the presentation. Overall, it was an enriching experience. Click to the left to view my certificate.'
        }
        workLink={salusLink}
      />{' '}
    </WorkSection>
  );
}
