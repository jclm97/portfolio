import Content from "@/components/Content";
import Header from "@/components/Header";
import MouseSpotlightItem from "@/components/utils/MouseSpotlight";

// main = display: flex, flex-direction: column, min-height: 100vh, align-items: center, padding-top and bottom: 24px,
// padding-left and right: 6px, @media (min-width: 1024px){padding-left and right: 24px}

// div = z-index: 5, width: 100% (includes the padding from main), max-width: 64rem, font-family: ... (multiple)
// font-size: 0.875rem (14px), line-height: 1.25rem (20px), display: flex, flex-direction: column,
// @media (min-width: 1024px){flex-direction: row}, justify-content: space-between

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center px-6  pt-0.5 pb-8 lg:px-24">
      <MouseSpotlightItem />
      <div className="flex flex-col z-5 w-full max-w-5xl font-sans text-sm lg:flex-row justify-between">
        <Header></Header>
        <div className="z-5 lg:w-1/2 pt-2 lg:pt-24">
          <Content></Content>
        </div>
      </div>
    </main>
  );
}
