import { Presentation } from "../Components/Presentation";
import { Header } from "../Components/Header";
import { PostItCard } from "../Components/PostItCard";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <section>
          <PostItCard />
        </section>
        <Presentation />
      </main>
    </>
  );
}
