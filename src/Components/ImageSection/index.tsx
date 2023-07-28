import Image from "next/image";
import ImageBand from "../../assents/image/image-section.jpg";

export const ImageSection = () => {
  return (
    <figure className="bg-gray-5 p-4 rounded-radius-2 dark:bg-gray-3">
      <Image
        className="object-cover w-[280px] rounded-radius-1 md:w-[350px] "
        alt="Imagem de produção no estúdio"
        src={ImageBand}
      />
    </figure>
  );
};
