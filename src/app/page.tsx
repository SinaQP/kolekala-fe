import Image from "next/image";
import { LoginBtn } from "../../components/landing/header/LoginBtn";
import { Header } from "../../features/landing/header/header.features";
import { MostSoldSection } from "../../components/landing/mostSoldSection/MostSoldSection";

export default function Home() {
  return (
   <>
   <Header />
   <MostSoldSection />

   </>
  );
}
