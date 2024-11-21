import { AboutSection } from "@/src/components/AboutComponents";
import { ContactSection } from "@/src/components/ContactComponents";
import Footer from "@/src/components/Footer";
import {
  ContactContainer,
  ContactInformation,
  HeroTitle,
} from "@/src/components/HeroComponents";
import HomeContainer, { Header } from "@/src/components/HomeContainer";
import { ProjectsSection } from "@/src/components/ProjectsComponents";
import { TechnoSection } from "@/src/components/TechnoComponents";
import { ToolsSection } from "@/src/components/ToolsComponents";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <HomeContainer>
          <HeroTitle></HeroTitle>
          <ContactContainer>
            <ContactInformation>
              <Mail></Mail>
              <div>
                <p>Email</p>
                <p>
                  <Link href="mailto:gurvandumarchat@gmail.com">
                    gurvandumarchat@gmail.com
                  </Link>
                </p>
              </div>
            </ContactInformation>
            <ContactInformation>
              <Linkedin></Linkedin>
              <div>
                <p>Linkedin</p>
                <p>
                  <Link href="https://www.linkedin.com/in/gurvan-dumarchat-957434303/">
                    Gurvan Dumarchat
                  </Link>
                </p>
              </div>
            </ContactInformation>
            <ContactInformation>
              <Github></Github>
              <div>
                <p>GitHub</p>
                <p>
                  <Link href="https://github.com/gurvan-dumarchat">
                    gurvan-dumarchat
                  </Link>
                </p>
              </div>
            </ContactInformation>
          </ContactContainer>
        </HomeContainer>
        <HomeContainer id="about">
          <AboutSection />
        </HomeContainer>
        <HomeContainer id="technical">
          <TechnoSection />
        </HomeContainer>
        <HomeContainer>
          <ToolsSection />
        </HomeContainer>
        <HomeContainer id="projects">
          <ProjectsSection />
        </HomeContainer>
        <HomeContainer id="contact">
          <ContactSection />
        </HomeContainer>
      </main>
      <Footer></Footer>
    </>
  );
}
