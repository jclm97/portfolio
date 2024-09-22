// following https://staticmania.com/blog/guide-to-creating-a-darklight-mode-toggle-in-next-js
// but for typescript and my own twist with shadcn
"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

import { useState } from "react";

const chooseTheme = (isSwitchOn: boolean) => {
  const { setTheme } = useTheme();

  if (isSwitchOn) {
    setTheme("light");
    return <Sun></Sun>;
  } else {
    setTheme("dark");
    return <Moon></Moon>;
  }
};

const ThemeSwitcher = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <div className="flex flex-row gap-3 transition-all">
      <Switch checked={isChecked} onCheckedChange={setChecked}></Switch>
      {chooseTheme(isChecked)}
    </div>
  );
};

export default ThemeSwitcher;
