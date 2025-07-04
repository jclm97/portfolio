import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footnote from "@/components/Footnote";
import Projects from "@/components/Projects";
import PageDetailsFile from "@p/configs/page_details.json";

enum Sections {
  About = "sobre mi",
  Education = "formacion",
  Experience = "experiencia",
  Projects = "proyectos",
}


// only supported section names
const Content = () => {
  const content = PageDetailsFile.menu.map((item, index) => {
    switch (item.section.toLowerCase()) {
      case Sections.About: {
        return <About key={index}></About>;
      }
      case Sections.Education: {
        return (
          <Education
            educationDetails={PageDetailsFile.education}
            key={index}
          ></Education>
        );
      }
      case Sections.Experience: {
        return (
          <Experience
            experienceDetails={PageDetailsFile.experience}
            key={index}
          ></Experience>
        );
      }
      case Sections.Projects: {
        return (
          <Projects
            projectDetails={PageDetailsFile.projects}
            key={index}
          ></Projects>
        );
      }
    }
  });

  return (
    <section className="flex flex-col gap-6">
      {content}
      <Footnote></Footnote>
    </section>
  );
};

export default Content;
