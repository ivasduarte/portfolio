import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import PersonalProjects from '../components/PersonalProjects';
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";

export default function MainPortfolio({ content }) {
  return (
    <main className="w-full max-w-xl mx-auto px-4 sm:px-6 md:max-w-none md:w-[50%] md:ml-auto md:mr-[5%] flex flex-col gap-8">
      <Hero content={content.hero} />
      <About content={content.about} />
      <Skills content={content.skills} />
      <Projects content={content.projects} />
      <PersonalProjects content={content.personalProjs} />
      <Certifications content={content.certs} />
      <Contact content={content.contact} />
    </main>
  );
}
