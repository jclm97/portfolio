import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FC } from "react";
import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";
import { FaLink } from "react-icons/fa";

type LabelAndLink = {
  label: string;
  link: string;
};

type ProjectDetail = {
  name: string;
  image: string;
  description: string;
  skills: string[];
  mainLink?: string;
  sideLinks?: LabelAndLink[];
};

type ProjectProps = {
  projectDetails: ProjectDetail[];
};

function ProjectItem(props: ProjectDetail) {
  let mainLinkElement: JSX.Element = <></>;
  if (props.mainLink != null) {
    mainLinkElement = (
      <LuArrowUpRight className="ml-1 inline-block h-4 w-4 transition-transform group-hover/mainlink:translate-x-1 group-hover/mainlink:-translate-y-1 group-focus-visible/mainlink:translate-x-1 group-focus-visible/mainlink:-translate-y-1"></LuArrowUpRight>
    );
  }

  let sideLinkElement: JSX.Element = <></>;
  if (props.sideLinks != null) {
    sideLinkElement = (
      <CardFooter className="px-0 pb-2 flex flex-wrap gap-2">
        {props.sideLinks.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-1 hover:text-link focus-visible:text-link mb-1"
          >
            <FaLink className="h-2 w-fit"></FaLink>
            {item.label}
          </a>
        ))}
      </CardFooter>
    );
  }
  return (
    <Card
      className="relative flex flex-row w-full min-h-fit border-transparent bg-transparent py-2 
        hover:bg-cardhover-background hover:shadow-[inset_0_0_0_0] hover:shadow-cardhover-shadow hover:drop-shadow-lg"
    >
      <CardHeader className="h-full w-1/2 justify-center items-center">
        <Image
          src={props.image}
          alt={props.name + " picture"}
          width={1920}
          height={1080}
          unoptimized
          className="flex flex-col whitespace-normal rounded-[0.5rem] m-auto"
        />
      </CardHeader>
      <CardContent className="flex flex-col p-0 w-full">
        <a
          href={props.mainLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group/mainlink text-foreground font-bold text-base hover:text-link focus-visible:text-link"
        >
          <span className="absolute inset-x-0 inset-y-0 hidden xxs:block"></span>
          <span>
            {props.name} {mainLinkElement}
          </span>
        </a>
        <CardDescription className="py-2 text-muted-foreground">
          {props.description}
        </CardDescription>

        {sideLinkElement}

        <CardFooter className="p-0 flex flex-wrap gap-2">
          {props.skills.map((skill, index) => (
            <Badge key={index} className="text-link bg-link/10">
              {skill}
            </Badge>
          ))}
        </CardFooter>
      </CardContent>
    </Card>
    // </a>
  );
}

const Projects: FC<ProjectProps> = ({ projectDetails }) => {
  const projects = projectDetails.map((item, index) => {
    return (
      <ProjectItem
        key={index}
        name={item.name}
        image={item.image}
        description={item.description}
        skills={item.skills}
        mainLink={item.mainLink}
        sideLinks={item.sideLinks}
      ></ProjectItem>
    );
  });
  return (
    <section id="projects" className="flex flex-col gap-3 mb-16 lg:mb-36">
      <div className="lg:hidden font-bold uppercase text-base text-foreground ">
        Projects
      </div>
      {projects}
    </section>
  );
};

export default Projects;
