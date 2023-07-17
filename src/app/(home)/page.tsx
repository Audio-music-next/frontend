import { Presentation } from "../Components/Presentation";
import { Header } from "../Components/Header";
import { PostItCard } from "../Components/PostItCard";
import { Footer } from "../Components/Footer";
import { MusicCard } from "../Components/MusicCard";
import { PartnerCompanies } from "../Components/PartnerCompanies";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Presentation />
        <section>
          <PostItCard />
        </section>
        <section className="flex flex-col gap-16 items-center">
          <h2 className="text-heading-2 text-gray-1 font-600">
            Um pouco do nosso trabalho
          </h2>
          <MusicCard />
        </section>
        <section className="flex flex-col gap-12 items-center bg-gray-4">
          <h2 className="text-heading-2 text-gray-1 font-600">
            Empresas parceiras
          </h2>
          <PartnerCompanies />
        </section>
        <Footer />
      </main>
    </>
  );
}
