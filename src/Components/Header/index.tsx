import { Logo } from "../Logo";
import { SwitchStyle } from "../SwitchStyle";

export const Header = () => {
  return (
    <header className="flex justify-between items-center bg-gray-7 dark:bg-gray-1 w-full h-[100px] px-[5%] ">
      <Logo />
      <SwitchStyle />
    </header>
  );
};
