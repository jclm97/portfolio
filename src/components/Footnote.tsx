const Footnote = () => {
  return (
    <div id="footnote" className="flex mt-10 mb-16">
      <p className="text-muted-foreground">
        Inspired by{" "}
        <a
          className="text-foreground"
          href="https://brittanychiang.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brittany Chiang&apos;s website
        </a>
        . To build this website, I used Next.js, Tailwind CSS, and Shadcn.
      </p>
    </div>
  );
};

export default Footnote;
