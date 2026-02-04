import React, { useState } from 'react';
import { SectionType } from './types';
import Navigation from './components/Navigation';
import SectionWrapper from './components/SectionWrapper';
import { 
  EXPERIENCES, 
  EDUCATION, 
  SKILLS, 
  PROJECTS, 
  CONTACT_INFO, 
  REFERENCES 
} from './constants';
import { ArrowUpRight, Download, Github, Mail, MapPin, Phone } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionType>('HOME');

  const renderHome = () => (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black relative overflow-hidden select-none">
      {/* Background Noise/Grid effect optional */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="z-10 text-center space-y-2 animate-fade-in">
        <h1 className="text-6xl sm:text-9xl font-bold tracking-tighter text-white uppercase mix-blend-difference">
          Semih <br className="sm:hidden" /> Enser
        </h1>
        <div className="h-1 w-24 bg-white mx-auto my-6" />
        <p className="text-sm sm:text-xl font-mono tracking-[0.5em] text-neutral-400 uppercase">
          Software Engineer
        </p>
      </div>

      <div className="absolute bottom-32 animate-pulse">
        <p className="text-xs text-ash font-mono">[ TAP MENU TO EXPLORE ]</p>
      </div>
    </div>
  );

  const renderExperience = () => (
    <SectionWrapper title="Experience" subtitle="Professional History & Education">
      <div className="space-y-16">
        <div>
          <h3 className="text-xl font-mono text-white mb-8 border-l-2 border-white pl-4">CAREER HISTORY</h3>
          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <div key={index} className="group relative border-l border-concrete pl-8 ml-1 transition-all hover:border-white">
                <span className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-black border border-ash group-hover:bg-white group-hover:border-white transition-colors" />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <h4 className="text-2xl font-bold text-white uppercase">{exp.company}</h4>
                  <span className="font-mono text-sm text-neutral-500">{exp.period}</span>
                </div>
                <p className="text-lg text-neutral-300 font-mono mb-2">{exp.role} <span className="text-ash">/ {exp.location}</span></p>
                <p className="text-neutral-500 max-w-2xl leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-mono text-white mb-8 border-l-2 border-white pl-4">EDUCATION</h3>
          <div className="grid gap-8">
            {EDUCATION.map((edu, index) => (
              <div key={index} className="bg-concrete/20 p-6 border border-concrete hover:border-neutral-600 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-white uppercase">{edu.institution}</h4>
                  <span className="text-xs font-mono text-neutral-500 border border-neutral-800 px-2 py-1">{edu.period}</span>
                </div>
                <p className="text-neutral-300 font-mono">{edu.degree}</p>
                {edu.details && <p className="text-sm text-neutral-600 mt-1">{edu.details}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );

  const renderProjects = () => (
    <SectionWrapper title="Projects" subtitle="Selected Works">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((proj, index) => (
            <div key={index} className="group flex flex-col justify-between p-8 border border-neutral-900 bg-neutral-950 hover:bg-neutral-900 transition-all duration-300">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white uppercase group-hover:text-neutral-200">{proj.name}</h3>
                  <ArrowUpRight className="w-5 h-5 text-neutral-700 group-hover:text-white transition-colors" />
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>
              {proj.tech && (
                <div className="pt-4 border-t border-neutral-900">
                  <p className="font-mono text-xs text-neutral-600 uppercase tracking-wide">
                    {proj.tech}
                  </p>
                </div>
              )}
            </div>
          ))}
       </div>
       
       <div className="mt-16 p-8 border border-dashed border-neutral-800 text-center">
          <p className="text-neutral-500 font-mono text-sm mb-4">View source code and more on GitHub</p>
          <a href={`https://${CONTACT_INFO.github}`} target="_blank" rel="noopener noreferrer" 
             className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-neutral-200 transition-colors">
            <Github size={18} />
            <span>Visit Profile</span>
          </a>
       </div>
    </SectionWrapper>
  );

  const renderSkills = () => (
    <SectionWrapper title="Skills" subtitle="Technical Arsenal">
      <div className="grid gap-12">
        <div>
          <h3 className="text-sm font-mono text-neutral-500 mb-6 uppercase tracking-widest">[ Core Competencies ]</h3>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-3 border border-neutral-800 bg-neutral-950 text-neutral-300 font-mono text-sm hover:border-white hover:text-white transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-mono text-neutral-500 mb-6 uppercase tracking-widest">[ Languages ]</h3>
          <div className="border-b border-neutral-800 pb-4">
            <div className="flex justify-between items-center">
              <span className="text-xl text-white font-bold">ENGLISH</span>
              <span className="font-mono text-neutral-500">INTERMEDIATE</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-mono text-neutral-500 mb-6 uppercase tracking-widest">[ Certificates ]</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Python", "Machine Learning", "Data Analysis", 
              "Data Visualization", "Deep Learning", "AI, Robotics and Data", "Java"
            ].map((cert, i) => (
              <li key={i} className="flex items-center space-x-3 text-neutral-400">
                <span className="w-1.5 h-1.5 bg-neutral-700"></span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );

  const renderContact = () => (
    <SectionWrapper title="Contact" subtitle="Get in touch">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-neutral-500 mt-1" />
              <div>
                <p className="text-xs font-mono text-neutral-500 uppercase">Email</p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-xl text-white hover:underline decoration-1 underline-offset-4">{CONTACT_INFO.email}</a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-neutral-500 mt-1" />
              <div>
                <p className="text-xs font-mono text-neutral-500 uppercase">Phone</p>
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-xl text-white hover:underline decoration-1 underline-offset-4">{CONTACT_INFO.phone}</a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-neutral-500 mt-1" />
              <div>
                <p className="text-xs font-mono text-neutral-500 uppercase">Location</p>
                <p className="text-xl text-neutral-300">Izmir, Turkey</p>
                <p className="text-sm text-neutral-600 mt-1">{CONTACT_INFO.address}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-12">
             <h3 className="text-sm font-mono text-neutral-500 mb-6 uppercase tracking-widest">[ Military Service ]</h3>
             <div className="flex justify-between items-center border-b border-neutral-800 pb-2">
                <span className="text-neutral-300">Completed</span>
                <span className="font-mono text-neutral-600 text-xs">OCT 2023 (1 Month)</span>
             </div>
          </div>

          <h3 className="text-sm font-mono text-neutral-500 mb-6 uppercase tracking-widest">[ References ]</h3>
          <div className="space-y-8">
            {REFERENCES.map((ref, idx) => (
              <div key={idx} className="bg-concrete/10 border-l-2 border-neutral-800 pl-6 py-2">
                <p className="text-lg font-bold text-white">{ref.name}</p>
                <p className="text-neutral-400 text-sm mb-2">{ref.title}</p>
                <p className="font-mono text-xs text-neutral-600">{ref.contact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-white selection:text-black">
      {activeSection === 'HOME' && renderHome()}
      {activeSection === 'EXPERIENCE' && renderExperience()}
      {activeSection === 'PROJECTS' && renderProjects()}
      {activeSection === 'SKILLS' && renderSkills()}
      {activeSection === 'CONTACT' && renderContact()}

      <Navigation activeSection={activeSection} onNavigate={setActiveSection} />
    </div>
  );
};

export default App;