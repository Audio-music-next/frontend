import { Logo } from "../Logo";
import { SwitchStyle } from "../SwitchStyle";

export const Header = () => {
  return (
    <header className="flex justify-between items-center bg-header bg-cover w-full h-[350px] px-[5%]">
      <Logo />
      <SwitchStyle />
    </header>
  );
};
