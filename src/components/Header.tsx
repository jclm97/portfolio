import Menu from "./Menu";
import Contacts from "./Contacts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PageDetailsFile from "@p/configs/page_details.json";

type HeaderDetail = {
  image: string;
  introduction: string;
  position: string;
  summary: string;
};

type HeaderProps = {
  headerDetail: HeaderDetail;
};

const Header = () => {
  const headerDetail: HeaderDetail = PageDetailsFile.header;

  return (
    <section className="lg:flex lg:flex-col lg:sticky lg:top-0 lg:py-24 lg:gap-4 lg:max-h-96 lg:w-1/2 lg:justify-between">
      <div className="flex flex-col gap-4 lg:pr-24">
        <Avatar className="w-24 lg:w-48 h-auto">
          <AvatarImage src={headerDetail.image} />
          <AvatarFallback className="w-24 h-24 lg:w-48 lg:h-48">
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
