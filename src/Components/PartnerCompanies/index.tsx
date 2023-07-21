import Image from "next/image";
import companyImage from "../../assents/image/company.png";

export const PartnerCompanies = () => {
  return (
    <ul className="flex flex-wrap justify-center md:flex-nowrap gap-6">
      <Image
        className="object-cover bg-gray-3 p-1 rounded-radius-1 h-18 md:h-16 w-32 md:w-20"
        src={companyImage}
        alt="Empresa parceira"
      />
      <Image
        className="object-cover bg-gray-3 p-1 rounded-radius-1 h-18 md:h-16 w-32 md:w-20"
        src={companyImage}
        alt="Empresa parceira"
      />
      <Image
        className="object-cover bg-gray-3 p-1 rounded-radius-1 h-18 md:h-16 w-32 md:w-20"
        src={companyImage}
        alt="Empresa parceira"
      />
      <Image
        className="object-cover bg-gray-3 p-1 rounded-radius-1 h-18 md:h-16 w-32 md:w-20"
        src={companyImage}
        alt="Empresa parceira"
      />
    </ul>
  );
};
