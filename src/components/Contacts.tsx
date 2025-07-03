// import { Github, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/utils/ThemeSwitcher";
import { FiGithub, FiLinkedin } from "react-icons/fi";

// TODO: magic links and social media, use json or some config file to obtain reference link
const Contacts = () => {
  return (
    <div className="flex flex-row items-center justify-left gap-6 mt-10">
      <Button variant="outline">
        <a
          href="https://www.linkedin.com/in/jclm97/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin className="h-6 w-fit" />
        </a>
      </Button>
      <Button variant="outline">
        <a
          href="https://github.com/jclm97"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub className="h-6 w-fit" />
        </a>
      </Button>
  
      <ThemeSwitcher></ThemeSwitcher>
    </div>
  );
};

export default Contacts;
