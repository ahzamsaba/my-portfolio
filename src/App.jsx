import React from "react";
import {Navbar, Hero, About, Skills, Projects, Contact, Footer, ScrollToTop} from './components/index'

function App() {
    return (
        <div className="bg-gray-100 dark:bg-[#0f0e1a] text-black dark:text-white font-sans scroll-smooth">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
            <ScrollToTop />
        </div>
    );
}

export default App;