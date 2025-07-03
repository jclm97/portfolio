
const Footnote = () => {
  return (
    <div id="footnote" className="flex justify-center mt-10 mb-16">
      <p className="text-muted-foreground text-center">
        © {new Date().getFullYear()} Juan Carlos López Morales.
        Built with{" "}
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
          href="https://vitejs.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite
        </a>
        .
      </p>
    </div>
  );
};

export default Footnote;
