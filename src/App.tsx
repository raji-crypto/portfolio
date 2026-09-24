import { useEffect } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import NeonCursor from "./components/NeonCursor";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import StructuredData from "./components/StructuredData";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Timeline from "./sections/Timeline";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import "./globals.css";

function RajyaLakshmiKadiyalaPortfolio() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0)
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <StructuredData />
      <ErrorBoundary>
        <SmoothScroll />
        <ScrollProgress />
        <NeonCursor />
        <PageTransition>
          <main className="min-h-screen bg-black text-white" role="main">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Timeline />
            <Contact />
            <Footer />
          </main>
        </PageTransition>
        <BackToTop />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default RajyaLakshmiKadiyalaPortfolio;
