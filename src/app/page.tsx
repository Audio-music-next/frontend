import { Presentation } from "../Components/Presentation";
import { Header } from "../Components/Header";
import { PostItCards } from "../Components/PostItCard";
import { Footer } from "../Components/Footer";
import { MusicCard } from "../Components/MusicCard";
import { PartnerCompanies } from "../Components/PartnerCompanies";
import { instance } from "../services/axios";
import { TextSection } from "@/Components/TextSection";
import { ImageSection } from "@/Components/ImageSection";

export default async function Home() {
  const recordings = await instance
    .get("recording", {
      params: {
        _limit: 6,
        _page: 1,
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <section className="relative bg-presentation w-full object-cover -z-20 ">
          <Presentation />
        </section>
        <section>
          <PostItCards />
        </section>
        <section className="flex flex-col items-center justify-around gap-6 bg-gray-6 md:flex-row dark:bg-gray-2">
          <TextSection />
          <ImageSection />
        </section>
        <section className="flex flex-col gap-16 items-center ">
          <h2 className="text-center text-heading-2 text-gray-1 font-600 dark:text-gray-8">
            Nossas produções em destaque
          </h2>
          <MusicCard recordings={recordings} />
        </section>
        <section className="flex flex-col gap-12 items-center dark:bg-gray-1">
          <h2 className="text-heading-2 text-gray-1 font-600 text-center dark:text-gray-7">
            Empresas parceiras
          </h2>
          <PartnerCompanies />
        </section>
        <Footer />
      </main>
    </>
  );
}
