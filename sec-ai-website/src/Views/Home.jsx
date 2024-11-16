import React from "react";
import Navbar from "../Components/Home/Navbar";
import Hero from "../Components/Home/Hero";
import Event from "../Components/Home/Event";
import FAQ from "../Components/Home/FAQ";
import MentorCarousel from "../Components/Home/Mentors";
import Footer from "../Components/Home/Footer";
import Agenda from "../Components/Home/Agenda";
import Sponsors from "../Components/Home/Sponsors";

function Home() {
  return (
    <div className="font-fira-code">
      <Navbar />
      <Hero />
      <Event />
      <MentorCarousel />
      <Sponsors />
      <Agenda />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;
