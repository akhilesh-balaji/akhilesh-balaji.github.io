import WorkSection from './WorkSection';
import WorkItem from './WorkItem';
import { Code, Text } from '@chakra-ui/react';

export default function Projects() {
  return (
    <WorkSection sectionTitle={'Projects'}>
      <WorkItem
        workTitle={
          <Text fontFamily={'Iosevka Expanded, Consolas, monospace'}>
            {' '}
            ⟨Q|uant⟩{' '}
          </Text>
        }
        workDesc={
          'A quantum computing game aiming to visualize the operations of quantum gates on qubit state.'
        }
        workDate={'Jun 2022'}
        workExtDesc={'Coming soon.'}
        workLink={''}
      />{' '}
      <WorkItem
        workTitle={'GenBit'}
        workDesc={
          'A Python package to operate on and parse genetic sequences akin to synthetic protien biosynthesis.'
        }
        workDate={'May 2022'}
        workExtDesc={
          'This was a Python package I had initially created while exploring the startling similarities between gene parsing in cells and the execution of algorithms in computer science. The tool lets one operate on DNA/RNA genetic sequences using a computer, the same way protein biosynthesis would happen within a cell. For instance, a given DNA sequence can be converted into an RNA sequence, and then an amino acid sequence. The full name of the protein then generated can also be found.'
        }
        workLink={'https://github.com/akhilesh-balaji/GenBit'}
      />{' '}
      <WorkItem
        workTitle={'Geometryy'}
        workDesc={
          'A tool to accurately describe transformations on the Cartesian plane, given image and pre-image coordinates.'
        }
        workDate={'Mar 2021'}
        workExtDesc={
          "My mathematics class recently covered transformations on the Cartesian's plane. I was handed a problem in which the pre-image coordinates and the image coordinates of a triangle were given, and I was asked to describe the transformation that had occurred. The trial-and-error method to describe the transformation would simply not work, as there are different transformations with countless different factors that could have occurred. There are, of course, methods to do this manually. But, this was a tedious process, and there were no existing tools to do this."
        }
        workLink={'https://github.com/akhilesh-balaji/PyWidget'}
      />{' '}
      <WorkItem
        workTitle={'PyWidget'}
        workDesc={
          'An effort to make a general template for Tkinter widget-based applications.'
        }
        workDate={'December 2020'}
        workExtDesc={
          'During the creation of Textylic, I was forced to create my own mechanism for widget-style applications. In an effort to make it easier for others with the same goal in mind, I created and open-sourced a general framework for similar applications—PyWidget. The framework provides a general template for the window, that can be integrated with any other combination of Tkinter widgets.'
        }
        workLink={'https://github.com/akhilesh-balaji/PyWidget'}
      />{' '}
      <WorkItem
        workTitle={'Textylic'}
        workDesc={
          'An open-source sticky notes application, acting as a desktop-widget.'
        }
        workDate={'Sep 2020'}
        workExtDesc={
          'In early 2020, I finished learning Python, and wished to put my knowledge to good use. Using the design-engineering cycle, I searched for possible problems I could solve, and eventually ended with this problem statement: native sticky notes are interfering when interacting with the operating system. The solution? A sticky notes application that stays on the desktop, without integrating with the native window manager and dock.'
        }
        workLink={'https://github.com/akhilesh-balaji/Textylic'}
      />{' '}
      <WorkItem
        workTitle={'The Geekly'}
        workDesc={
          'A science magazine indulging in effective and factually correct science communication about scientific concepts.'
        }
        workDate={'Jun 2018'}
        workExtDesc={
          "The Geekly is a science magazine that focuses on effective science communication, making complex ideas intuitive without oversimplifying things to the point of factual fallacy. The magazine's is best expressed by the words of the ancient philosopher, Confucius—“He who knows all the answers has not been asked all the questions.” I started The Geekly in an attempt to valiantly (or so I thought) defend science for miscommunication. Certain scientific concepts are frequently subject to misleading explanations and inaccurate analogies, or they are filled with jargon and mathematics incomprehensible to the layman. The Geekly finds the balance between the two."
        }
        workLink={'https://www.thegeekly.net/'}
      />{' '}
    </WorkSection>
  );
}
