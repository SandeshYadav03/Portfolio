import { Layout, Header, Footer } from "./components/Layout";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Playbooks } from "./components/Playbooks";
import { ToolbeltMarquee } from "./components/ToolbeltMarquee";
import { Impact } from "./components/Impact";
import { Contact } from "./components/Contact";

function App() {
  return (
    <Layout>
      <Header />
      <main>
        <Hero />
        <div className="mx-auto max-w-6xl px-4">
          <ToolbeltMarquee />
        </div>
        <Skills />
        <Projects />
        <div className="mx-auto max-w-6xl px-4">
          <Playbooks />
          <Impact />
        </div>
        <Contact />
      </main>
      <Footer />
    </Layout>
  );
}

export default App;
