import React from "react";
import {Navbar, Hero, About, Skills, Projects, Contact, Footer} from './components/index'

function App() {
    return (
        <div className="bg-gray-900 text-white font-sans scroll-smooth">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;