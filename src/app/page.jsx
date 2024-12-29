import Categories1 from "@/components/AnimatedCategories";
import OurTeam1 from "@/components/AnimatedOurTeam";
import Categories from "@/components/OldCategories";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import ShowcaseProduct from "@/components/ShowcaseProduct";
import NewsAndUpdate from "@/components/NewsAndUpdate";

export default function Home() {
  return (
    <div className="pt-[80px] bg-[#F8FFF8]">
      <Hero />
      <ShowcaseProduct />
      <NewsAndUpdate/>
      {/* <Categories1/> */}
      <OurTeam1/>
      <ContactUs />
    </div>
  );
}
