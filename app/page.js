"use client"

import About from "@/components/About";
import Collab from "@/components/Collab";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import  { NavbarDefault } from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import { Fade } from "react-reveal";

 
export default function Home() {
  return<><Fade bottom>
  <Hero/>
  <About/>
  <Services/>
  <Portfolio/>
  <Collab/>
  </Fade>
  </> ;
}