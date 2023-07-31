import Image from "next/image";
import companyImage from "../../assents/image/company.png";

export const PartnerCompanies = () => {
  return (
    <ul className="grid gap-4 grid-cols-2 md:grid-cols-4 sm:gap-12  ">
      <Image
        className="object-cover bg-gray-3 p-1 rounded-radius-1 max-w-[120px] sm:max-w-[160px] dark:bg-gray-4 "
        src={companyImage}
        alt="Empresa parceira"
      />
      <Image
        className="object-cover bg-gray-3 p-1 rounded-radius-1 max-w-[120px] sm:max-w-[160px] dark:bg-gray-4 "
        src={companyImage}
        alt="Empresa parceira"
      />
      <Image
        className="object-cover bg-gray-3 p-1 rounded-radius-1 max-w-[120px] sm:max-w-[160px] dark:bg-gray-4 "
        src={companyImage}
        alt="Empresa parceira"
      />
      <Image
        className="object-cover bg-gray-3 p-1 rounded-radius-1 max-w-[120px] sm:max-w-[160px] dark:bg-gray-4 "
        src={companyImage}
        alt="Empresa parceira"
      />
    </ul>
  );
};
