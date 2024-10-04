import LeftSide from "@/components/LeftSide";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footnote from "@/components/Footnote";
import PageDetailsFile from "@p/configs/page_details.json";

// main = display: flex, flex-direction: column, min-height: 100vh, align-items: center, padding-top and bottom: 24px,
// padding-left and right: 6px, @media (min-width: 1024px){padding-left and right: 24px}

// div = z-index: 5, width: 100% (includes the padding from main), max-width: 64rem, font-family: ... (multiple)
// font-size: 0.875rem (14px), line-height: 1.25rem (20px), display: flex, flex-direction: column,
// @media (min-width: 1024px){flex-direction: row}, justify-content: space-between

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center px-6 py-6 lg:px-24">
      <div className="flex flex-col z-5 w-full max-w-5xl font-sans text-sm lg:flex-row justify-between">
        <LeftSide></LeftSide>
        <div className="flex flex-col pt-6 lg:pt-24 lg:w-1/2 gap-8">
          <About></About>
          <Education EducationDetails={PageDetailsFile.education}></Education>
          <Experience
            ExperienceDetails={PageDetailsFile.experience}
          ></Experience>
          <Projects></Projects>
          <Footnote></Footnote>
        </div>
      </div>
    </main>
  );
}
