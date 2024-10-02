import { FC } from "react";

// TODO: Change name to Navigation?

type MenuDetail = {
  section: string;
  href: string;
};

type MenuProps = {
  MenuDetails: MenuDetail[];
};

function MenuItem(props: MenuDetail) {
  return (
    <a href={props.href} className="flex flex-row py-3 items-center group">
      <div
        className={
          "w-8 h-0.5 bg-foreground mr-4 transition-all group-hover:w-16 group-hover:bg-foreground"
        }
      />
      <div
        className={"transition-all text-foreground group-hover:text-foreground"}
      >
        {props.section}
      </div>
    </a>
  );
}

const Menu: FC<MenuProps> = ({ MenuDetails }) => {
  // Array of MenuItem Elements
  const menu = MenuDetails.map((item) => {
    const ref = "#" + item.href;
    return (
      <MenuItem section={item.section.toUpperCase()} href={ref}></MenuItem>
    );
  });

  return (
    <div
      id="menu"
      className="hidden lg:flex lg:flex-col py-3 font-medium tracking-widest"
    >
      {menu}
    </div>
  );
};

export default Menu;
