const Footnote = () => {
  return (
    <div id="footnote" className="flex mt-10 mb-16">
      <p className="text-muted-foreground">
        <a
          className="text-foreground hover:text-link"
          href="https://brittanychiang.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brittany Chiang&apos;s website
        </a>{" "}
        design was my inspiration.{" "}
        <a
          className="text-foreground hover:text-link"
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </a>
        ,{" "}
        <a
          className="text-foreground hover:text-link"
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS
        </a>
        , and{" "}
        <a
          className="text-foreground hover:text-link"
          href="https://ui.shadcn.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          shadcn/ui
        </a>{" "}
        were used to build this portfolio website.
      </p>
    </div>
  );
};

export default Footnote;
