import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footnote from "@/components/Footnote";
import PageDetailsFile from "@p/configs/page_details.json";

// only supported section names
// TODO: make it more complicated with enums? hashmap to string values?
const Content = () => {
  const content = PageDetailsFile.menu.map((item, index) => {
    if (item.section === "about") {
      return <About key={index}></About>;
    } else if (item.section === "education") {
      return (
        <Education
          educationDetails={PageDetailsFile.education}
          key={index}
        ></Education>
      );
    } else if (item.section === "experience") {
      return (
        <Experience
          experienceDetails={PageDetailsFile.experience}
          key={index}
        ></Experience>
      );
    } else if (item.section === "projects") {
      return (
        <Projects
          projectDetails={PageDetailsFile.projects}
          key={index}
        ></Projects>
      );
    }
  });

  return (
    <section className="flex flex-col gap-8">
      {content}
      <Footnote></Footnote>
    </section>
  );
};

export default Content;
