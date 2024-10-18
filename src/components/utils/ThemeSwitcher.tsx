// following https://staticmania.com/blog/guide-to-creating-a-darklight-mode-toggle-in-next-js
// but for typescript and my own twist with shadcn
"use client";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const ChooseTheme = (isSwitchOn: boolean) => {
  const { setTheme } = useTheme();

  if (isSwitchOn) {
    setTheme("light");
    return <FiSun className="h-6 w-fit" />;
  } else {
    setTheme("dark");
    return <FiMoon className="h-6 w-fit" />;
  }
};

const ThemeSwitcher = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <div className="flex flex-row gap-3 transition-all">
      <Switch checked={isChecked} onCheckedChange={setChecked}></Switch>
      {ChooseTheme(isChecked)}
    </div>
  );
};

export default ThemeSwitcher;
