import { Logo } from "../Logo";
import { SwitchStyle } from "../SwitchStyle";

export const Header = () => {
  return (
    <header className="flex justify-between items-center bg-header object-cover w-full h-52">
      <Logo />
      <SwitchStyle />
    </header>
  );
};
