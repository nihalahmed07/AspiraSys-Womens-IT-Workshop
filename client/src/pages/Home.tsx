import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Overview } from "@/components/Overview";
import { ChallengeTasks } from "@/components/ChallengeTasks";
import { Resources } from "@/components/Resources";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Overview />
        <ChallengeTasks />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
