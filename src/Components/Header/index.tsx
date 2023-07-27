import { Logo } from "../Logo";
import { SwitchStyle } from "../SwitchStyle";

export const Header = () => {
  return (
    <header className="flex justify-between items-center bg-gray-7 w-full h-[100px] px-[5%] dark:bg-gray-0">
      <Logo />
      <SwitchStyle />
    </header>
  );
};
