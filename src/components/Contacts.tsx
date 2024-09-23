import { Github, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/utils/ThemeSwitcher";

// TODO: magic links and social media, use json or some config file to obtain reference link
const Contacts = () => {
  return (
    <div className="flex flex-row items-center justify-left gap-6 mt-10">
      <Button variant="outline">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>
      </Button>
      <Button variant="outline">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <Github />
        </a>
      </Button>
      <Button variant="outline" className="">
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Youtube />
        </a>
      </Button>
      <ThemeSwitcher></ThemeSwitcher>
    </div>
  );
};

export default Contacts;
