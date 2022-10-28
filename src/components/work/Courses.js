import WorkSection from "./WorkSection";
import WorkItem from "./WorkItem";

export default function Courses() {
  return (
    <WorkSection sectionTitle={'Courses'}>
      <WorkItem
        workTitle={'ReactJS'}
        workDesc={
          'I completed a course about creating web apps using ReactJS and Redux.'
        }
        workDate={'June 2022'}
        workExtDesc={
          'In June 2022, I completed a course on Udemy pertaining to the creation of web applications using ReactJS. The course, in addition to giving me an insight into the compartmentalized architecture design prompoted by React, also taught me about state management through React Redux, and scaling up state managemant to applications with many components. This website was built using the knowledge from that course.'
        }
        workLink={"https://www.udemy.com/certificate/UC-c6cc32d6-74bd-4235-a8f8-8d3b48b2c3e4/"}
      />
      <WorkItem
        workTitle={"Mini-RACECAR Course"}
        workDesc={
          'I completed the Mini-RACECAR Robotics Course, following BWSI curricullum.'
        }
        workDate={'Nov 2021'}
        workExtDesc={
          "On November 22nd, I successfully completed the Autonomous Mini-RACECAR Robotics Course with a final score of 97%. The course was held over a six-week long period, and organized by Learn With Leaders. Each week consisted of a set of live sessions where I could interact with the course instructors, as I made my way through each challenge, or 'lab'. The curriculum was MIT Beaver Works' rigorous BWSI STEM curriculum. I learnt a lot from this course, both theoretically and practically, from the use and disadvantages of the LIDAR to implementing proportional control. The algorithm was tested through a digital simulation of the robotic car. Clicking to the left will lead you to the course homepage, my participation certificate, and my achievement certificate."
        }
        workLink={"https://llx.mit.edu/certificates/e595e83893584536b4f6677e30b905fb"}
      />
      <WorkItem
        workTitle={'JavaScript'}
        workDesc={
          'I completed a course about using JavaScript as a programming language.'
        }
        workDate={'Nov 2021'}
        workExtDesc={
          'On 8 June, 2021, I completed a JavaScript course. I already knew a bit of JavaScript before this, but I never had an in-depth understanding of JavaScript as a dynamic language, and all the features specific to it. The completion of this course makes me eligible for the application of my knowledge of JavaScript to creating applications on the web using frameworks such as ReactJS.'
        }
        workLink={"https://www.udemy.com/certificate/UC-ceedba0c-cd45-49e1-896c-ecc8f6b450b8/"}
      />
      <WorkItem
        workTitle={'Python'}
        workDesc={
          'This course taught me the fundamental principles of programming as well as applying them through Python.'
        }
        workDate={'Nov 2021'}
        workExtDesc={
            "I completed The Python Bible course, which gave me quite a few insights into the world of programming. The course taught me about fundamental programming concepts and programming paradigms, leading me to explore the application of these principles with Python as my tool. Through the completion of this course, I now know how to program (identifying problems and designing solutions to them) by coding (the low-level system of making a computer understand your instructions), as writing is to typing."
        }
        workLink={"https://www.udemy.com/certificate/UC-fb2984ec-aaa6-438c-8207-6b785cc071cf/"}
        fill
      />
    </WorkSection>
  );
}
