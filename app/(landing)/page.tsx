

import { trpc } from "../../utils/trpc"
import { AppExplained, Footer, Header, Hero } from "./components";
import {  } from './components/AppExplained';

export default async function Page() {

  return (
    <section className="#ffffff h-auto scroll-smooth">
      <Header/>
      <Hero/>
      <AppExplained/>
    </section>
  );
}