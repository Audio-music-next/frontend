import Image from "next/image";
import LogoImage from "../../assents/image/logo.png";

export const Logo = () => {
  return (
    <figure>
      <Image
        src={LogoImage}
        alt="Logo audioMusic"
        className="w-[40px] object-cover rounded-radius-2"
      />
    </figure>
  );
};
