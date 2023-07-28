import { FacebookIcon } from "../Icons/Facebook";
import { InstagramIcon } from "../Icons/Instagram";
import { LinkedinIcon } from "../Icons/Linkedin";
import { TwitterIcon } from "../Icons/Twitter";
import { WhatsappIcon } from "../Icons/Whatsapp";
import { YoutubeIcon } from "../Icons/Youtube";
import { ScrollTop } from "../ScrollTop";

const SocialMedia = () => {
  return (
    <div className="flex justify-center gap-4">
      <InstagramIcon />
      <WhatsappIcon />
      <LinkedinIcon />
      <FacebookIcon />
      <TwitterIcon />
      <YoutubeIcon />
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="relative bg-gray-3 flex flex-col gap-5 items-center justify-center text-gray-8 w-full text-center dark:bg-gray-2 dark:text-gray-6">
      <h3 className="text-heading-4">Contato</h3>
      <h1 className="text-heading-2 font-600">(85) 4002 - 8922</h1>
      <h2 className="text-heading-3">
        Rua dos Alfeneiros, nº 4, Little Whinging
      </h2>
      <SocialMedia />
      <ScrollTop />
    </footer>
  );
};
