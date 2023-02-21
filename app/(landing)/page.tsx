

import { trpc } from "../../utils/trpc"
import { AppExplained, Footer, Header, Hero } from "./components";
import {  } from './components/AppExplained';
import { Privacity } from "./components/Privacity";

export default async function Page() {

  return (
    <section className="#ffffff h-auto scroll-smooth">
      <Header/>
      <Hero/>
      <AppExplained/>
      <Privacity/>
      <Footer/>
    </section>
  );
}