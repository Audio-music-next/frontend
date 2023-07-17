import { postIts } from "@/app/constants/postIts";
import { MusicalNoteIcon } from "@heroicons/react/24/solid";

export const PostItCard = () => {
  return (
    <ul className="flex gap-8 w-full overflow-x-auto items-center pb-5 px-[5%] xl:overflow-x-hidden  justify-start xl:justify-center   ">
      {postIts.map((post) => (
        <li
          key={post.title}
          className="min-w-[240px] min-h-[200px] flex flex-col gap-2 relative rounded-radius-2 bg-random-1 p-4 pt-3"
        >
          <MusicalNoteIcon className="text-gray-5 absolute top-3 left-3 w-7 h-7" />
          <h5 className="ml-8 text-heading-5 font-600 text-gray-1">
            {post.title}
          </h5>
          <p className="text-body-2 text-gray-1">{post.text}</p>
        </li>
      ))}
    </ul>
  );
};
