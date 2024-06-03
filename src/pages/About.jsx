import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Vincent
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        As a passionate and highly skilled Software Engineer from Ohio, I bring a robust background in AR/VR techniques and a diverse skill set encompassing 3D animation, neural networks, and full-stack development. My academic achievements include a Master's degree in Computer Science and a Graduate Certificate in Autonomous Systems and Data Science from the University of Dayton, where I maintained a perfect 4.0 GPA.
        </p>
        <p>
          In addition to my academic prowess, I have practical experience from working with Lucid Drone Technologies, where I led groundbreaking drone cleaning operations and developed pioneering industrial cleaning solutions. My technical competencies include asset building in Unity and Blender, utilizing TensorFlow for advanced neural network applications, and developing full-stack applications with Flutter and Google Firebase. This unique combination of theoretical knowledge and practical experience positions me as a versatile and highly capable software engineer, ready to tackle challenging projects and contribute to cutting-edge technological advancements.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center' data-name={skill.name}>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Education/Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've mostly been learning and coding while in school, but I also worked 
            at a start-up before coming back to graduate school. Here is the rundown:
          </p>
        </div>

        <div className='mt-12 flex justify-center items-center'>
        <div style={{ maxWidth: "800px", width: "100%" }}>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                key={experience.company_name}
                date={experience.date}
                dateClassName="m-4"
                iconStyle={{
                  background: experience.iconBg,
                  width: 75,   // Adjust the width as needed
                  height: 75, 
                  marginTop: 35,
                  margin: -39
                }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[90%] h-[90%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                  margin: -4
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
          </div>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;