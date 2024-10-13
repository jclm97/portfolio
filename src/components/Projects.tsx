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

type ProjectDetail = {
  name: string;
  image: string;
  description: string;
  skills: string[];
  link?: string;
};

type ProjectProps = {
  projectDetails: ProjectDetail[];
};

function ProjectItem(props: ProjectDetail) {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <Card
        className="flex flex-row w-full min-h-fit border-transparent 
    hover:border-cardhover-border hover:bg-cardhover-background hover:shadow-[inset_0_1px_0_0] hover:shadow-cardhover-shadow hover:drop-shadow-lg"
      >
        <CardHeader className="w-1/2 p-0 lg:p-3">
          <Image
            src={props.image}
            alt={props.name + " picture"}
            width={1920}
            height={1080}
            unoptimized
            className="whitespace-normal rounded-[0.5rem]"
          />
        </CardHeader>
        <CardContent className="flex flex-col pt-2 w-full">
          <p className="text-primary font-bold">{props.name} </p>
          <CardDescription className="py-3 text-muted-foreground">
            {props.description}
          </CardDescription>
          <CardFooter className="flex flex-wrap p-0 gap-2">
            {props.skills.map((skill, index) => (
              <Badge key={index}>{skill}</Badge>
            ))}
          </CardFooter>
        </CardContent>
      </Card>
    </a>
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
        link={item.link}
      ></ProjectItem>
    );
  });
  return (
    <section id="projects" className="flex flex-col gap-3 mb-0">
      <div className="lg:hidden font-bold uppercase text-base text-foreground ">
        Projects
      </div>
      {projects}
    </section>
  );
};

export default Projects;
