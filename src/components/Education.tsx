import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FC } from "react";

// TODO Should I place these in a separate file?
type EducationDetail = {
  subject: string;
  degree: string;
  university: string;
};

type EducationProps = {
  educationDetails: EducationDetail[];
};

const Education: FC<EducationProps> = ({ educationDetails }) => {
  return (
    <section id="education" className="">
      {educationDetails.map((item, index) => (
        <Card
          key={index}
          className="flex flex-col w-full min-h-fit gap-0 mb-4 border-transparent px-2 lg:py-2 lg:gap-2 hover:border-cardhover-border hover:bg-cardhover-background hover:shadow-[inset_0_1px_0_0] hover:shadow-cardhover-shadow hover:drop-shadow-lg"
        >
          <CardHeader className="h-full w-full p-0">
            <CardTitle className="text-base text-muted-foreground whitespace-nowrap">
              {item.degree} {item.subject}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col p-0">
            <p className="text-foreground font-bold">{item.university}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default Education;
