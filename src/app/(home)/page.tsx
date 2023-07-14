import { Presentation } from "../Components/Presentation";
import { Header } from "../Components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Presentation />
      </main>
    </>
  );
}
