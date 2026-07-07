import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills, certifications, achievements, leadership } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Joseph Sam
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          AI/ML Engineer based in Coimbatore, Tamil Nadu, India — specializing
          in <strong>Agentic AI</strong>, <strong>Computer Vision</strong>, and{" "}
          <strong>NLP</strong>. Expert in LangChain, LangGraph, LLM
          orchestration, and multi-agent systems. I build production AI
          solutions integrating vector databases, generative AI APIs, and deep
          learning models.
        </p>
        <p>
          Currently pursuing B.Tech in Artificial Intelligence & Data Science at
          Sri Eshwar College of Engineering (CGPA: 8.89). National hackathon
          finalist with a ₹1 Lakh cash prize, IIT Bombay E-Yantra finalist, and
          active open-source contributor to Google Timesketch.
        </p>
      </div>

      {/* SKILLS */}
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
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

      {/* EXPERIENCE */}
      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've worked across AI research, internships, and national
            competitions — leveling up my skills and building real-world impact.
            Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: "bold",
                        color: "#333",
                        textAlign: "center",
                        lineHeight: 1.2,
                        padding: "2px",
                      }}
                    >
                      {experience.company_name.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
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

      {/* CERTIFICATIONS */}
      <div className='py-16'>
        <h3 className='subhead-text'>Certifications.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>Verified credentials from industry leaders and top institutions.</p>
        </div>
        <div className='mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2'>
          {certifications.map((cert, index) => (
            <div
              key={index}
              className='flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-slate-100'
            >
              <div
                className='flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white text-xs font-bold'
                style={{ background: "linear-gradient(135deg, #989FFF, #29A2FF)" }}
              >
                {cert.issuer.slice(0, 2).toUpperCase()}
              </div>
              <div className='flex-1 min-w-0'>
                <p className='text-sm font-semibold text-black truncate'>{cert.name}</p>
                <p className='text-xs text-slate-500'>{cert.issuer}</p>
              </div>
              <span className='flex-shrink-0 text-xs text-slate-400 font-medium'>{cert.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ACHIEVEMENTS */}
      <div className='py-16'>
        <h3 className='subhead-text'>Honors & Awards.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>National hackathon wins, IIT Bombay finals, and competition highlights.</p>
        </div>
        <div className='mt-8 flex flex-col gap-6'>
          {achievements.map((item, index) => (
            <div
              key={index}
              className='p-5 rounded-xl bg-white shadow-sm border border-slate-100'
            >
              <div className='flex items-start justify-between gap-4 flex-wrap'>
                <h4 className='text-base font-semibold text-black'>{item.title}</h4>
                <span
                  className='flex-shrink-0 text-xs font-bold px-3 py-1 rounded-full text-white'
                  style={{ background: "linear-gradient(135deg, #989FFF, #29A2FF)" }}
                >
                  {item.prize}
                </span>
              </div>
              <p className='mt-2 text-sm text-slate-500'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* LEADERSHIP */}
      <div className='py-16'>
        <h3 className='subhead-text'>Leadership & Community.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>Organizing, contributing, and building communities beyond code.</p>
        </div>
        <div className='mt-8 flex flex-col gap-6'>
          {leadership.map((item, index) => (
            <div
              key={index}
              className='p-5 rounded-xl bg-white shadow-sm border border-slate-100'
            >
              <div className='flex items-start justify-between gap-4 flex-wrap'>
                <div>
                  <h4 className='text-base font-semibold text-black'>{item.title}</h4>
                  <p className='text-sm text-slate-500'>{item.org}</p>
                </div>
                <span className='flex-shrink-0 text-xs text-slate-400 font-medium'>{item.date}</span>
              </div>
              <ul className='mt-3 list-disc ml-5 space-y-1'>
                {item.points.map((point, i) => (
                  <li key={i} className='text-sm text-slate-500'>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
