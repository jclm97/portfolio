import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

function EducationItem(props: EducationDetail) {
  return (
    <Card className="flex flex-col w-full min-h-fit gap-0 mb-4 border-transparent px-2 lg:py-2 lg:gap-2 hover:border-cardhover-border hover:bg-cardhover-background hover:shadow-[inset_0_1px_0_0] hover:shadow-cardhover-shadow hover:drop-shadow-lg">
      <CardHeader className="h-full w-full p-0">
        <CardTitle className="text-base text-muted-foreground whitespace-nowrap">
          {props.degree} {props.subject}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col p-0">
        <p className="text-foreground font-bold">{props.university}</p>
      </CardContent>
    </Card>
  );
}

const Education: FC<EducationProps> = ({ educationDetails }) => {
  const education = educationDetails.map((item, index) => {
    return (
      <EducationItem
        key={index}
        subject={item.subject}
        degree={item.degree}
        university={item.university}
      ></EducationItem>
    );
  });
  return (
    <section id="education" className="">
      <div className="lg:hidden font-bold uppercase text-base text-foreground pb-3">
        Education
      </div>
      {education}
    </section>
  );
};

export default Education;
