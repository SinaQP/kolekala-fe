import { Footer } from "../../../components/Footer/Footer";
import { Details } from "../../../components/product/Details";
import { ExpertOpinion } from "../../../components/product/ExpertOpinion";
import { TopInfo } from "../../../components/product/topInfoProduct";
import { Header } from "../../../features/landing/header/header.features";

export default function Dashs (){
    return (
        <>
         <Header />
        <TopInfo />
        <ExpertOpinion />
        <Details />
        <Footer />
        </>
    )
  }