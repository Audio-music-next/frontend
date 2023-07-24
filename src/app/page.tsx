import { Presentation } from "../Components/Presentation";
import { Header } from "../Components/Header";
import { PostItCards } from "../Components/PostItCard";
import { Footer } from "../Components/Footer";
import { MusicCard } from "../Components/MusicCard";
import { PartnerCompanies } from "../Components/PartnerCompanies";
import { instance } from "../services/axios";

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
        <Presentation />
        <section>
          <PostItCards />
        </section>
        <section className="flex flex-col gap-16 items-center pt-0">
          <h2 className="text-center text-heading-2 text-gray-1 font-600">
            Um pouco do nosso trabalho
          </h2>
          <MusicCard recordings={recordings} />
        </section>
        <section className="flex flex-col gap-12 items-center bg-gray-4">
          <h2 className="text-heading-2 text-gray-1 font-600 text-center">
            Empresas parceiras
          </h2>
          <PartnerCompanies />
        </section>
        <Footer />
      </main>
    </>
  );
}
