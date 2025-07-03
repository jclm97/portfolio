import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PageDetailsFile from "@p/configs/page_details.json";
import Contacts from "./Contacts";
import Menu from "./Menu";

type HeaderDetail = {
  image: string;
  introduction: string;
  position: string;
  summary: string;
};

const Header = () => {
  const headerDetail: HeaderDetail = PageDetailsFile.header;

  return (
    <section className="flex flex-col lg:sticky lg:w-1/2 lg:justify-between lg:top-0 lg:py-4 lg:gap-4 lg:max-h-96">
      <div className="flex flex-col gap-4 lg:pr-24">
        <Avatar className="w-24 lg:w-48 h-auto border-2 border-foreground">
          <AvatarImage src={headerDetail.image} />
          <AvatarFallback className="w-24 h-24 lg:w-48 lg:h-48 border-2 border-foreground">
            SH
          </AvatarFallback>
        </Avatar>
        <h1 className="text-4xl">{headerDetail.introduction}</h1>
        <h2 className="text-xl">{headerDetail.position}</h2>
        <p className="text-lg text-muted-foreground">{headerDetail.summary}</p>
      </div>
      <Menu MenuDetails={PageDetailsFile.menu}></Menu>
      <Contacts></Contacts>
    </section>
  );
};

export default Header;
