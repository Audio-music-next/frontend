import { MusicalNoteIcon } from "@heroicons/react/24/solid";

export const PostItCard = () => {
  return (
    <ul className="flex gap-8  overflow-x-auto w-full justify-start items-center md:justify-center">
      <li className="w-[240px] h-[200px] flex flex-col gap-2 relative rounded-radius-2 bg-random-1 p-4 pt-3">
        <MusicalNoteIcon className="text-gray-5 absolute top-3 left-3 w-7 h-7" />
        <h2 className="ml-8 text-heading-5 text-gray-1">Titulo do texto</h2>
        <p className="text-body-2 text-gray-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry s standard dummy text ever
          since the 1500s
        </p>
      </li>
      <li className="w-[240px] h-[200px] flex flex-col gap-2 relative rounded-radius-2 bg-random-1 p-4 pt-3">
        <MusicalNoteIcon className="text-gray-5 absolute top-3 left-3 w-7 h-7" />
        <h2 className="ml-8 text-heading-5 text-gray-1">Titulo do texto</h2>
        <p className="text-body-2 text-gray-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry s standard dummy text ever
          since the 1500s
        </p>
      </li>
      <li className="w-[240px] h-[200px] flex flex-col gap-2 relative rounded-radius-2 bg-random-1 p-4 pt-3">
        <MusicalNoteIcon className="text-gray-5 absolute top-3 left-3 w-7 h-7" />
        <h2 className="ml-8 text-heading-5 text-gray-1">Titulo do texto</h2>
        <p className="text-body-2 text-gray-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry s standard dummy text ever
          since the 1500s
        </p>
      </li>
      <li className="w-[240px] h-[200px] flex flex-col gap-2 relative rounded-radius-2 bg-random-1 p-4 pt-3">
        <MusicalNoteIcon className="text-gray-5 absolute top-3 left-3 w-7 h-7" />
        <h2 className="ml-8 text-heading-5 text-gray-1">Titulo do texto</h2>
        <p className="text-body-2 text-gray-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry s standard dummy text ever
          since the 1500s
        </p>
      </li>
    </ul>
  );
};
