import { Presentation } from "../Components/Presentation";
import { Header } from "../Components/Header";
import { PostItCard } from "../Components/PostItCard";
import { MusicCard } from "../Components/MusicCard";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Presentation />
        <section>
          <PostItCard />
        </section>
        <section>
          <MusicCard />
        </section>
      </main>
    </>
  );
}
