import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footnote from "@/components/Footnote";
import PageDetailsFile from "@p/configs/page_details.json";

enum Sections {
  About = "about",
  Education = "education",
  Experience = "experience",
  Projects = "projects",
}

// only supported section names
// TODO: make it more complicated with enums? hashmap to string values?
const Content = () => {
  const content = PageDetailsFile.menu.map((item, index) => {
    if (item.section.toLowerCase() === Sections.About) {
      return <About key={index}></About>;
    } else if (item.section.toLowerCase() === Sections.Education) {
      return (
        <Education
          educationDetails={PageDetailsFile.education}
          key={index}
        ></Education>
      );
    } else if (item.section.toLowerCase() === Sections.Experience) {
      return (
        <Experience
          experienceDetails={PageDetailsFile.experience}
          key={index}
        ></Experience>
      );
    } else if (item.section.toLowerCase() === Sections.Projects) {
      return (
        <Projects
          projectDetails={PageDetailsFile.projects}
          key={index}
        ></Projects>
      );
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
