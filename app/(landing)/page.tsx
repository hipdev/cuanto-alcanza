

import { trpc } from "../../utils/trpc"
import { Footer, Header, Hero } from "./components";

export default async function Page() {

  return (
    <section className="#ffffff h-auto">
      <Header/>
      <Hero/>
      <Footer/>
    </section>
  );
}