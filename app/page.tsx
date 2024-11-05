import { AboutSection } from "@/src/components/AboutComponents";
import { ContactSection } from "@/src/components/ContactComponents";
import {
  ContactContainer,
  ContactInformation,
  HeroTitle,
} from "@/src/components/HeroComponents";
import HomeContainer from "@/src/components/HomeContainer";
import { TechnoSection } from "@/src/components/TechnoComponents";
import { ToolsSection } from "@/src/components/ToolsComponents";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
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
      <HomeContainer>
        <AboutSection />
      </HomeContainer>
      <HomeContainer>
        <TechnoSection />
      </HomeContainer>
      <HomeContainer>
        <ToolsSection />
      </HomeContainer>
      <HomeContainer>
        <ContactSection />
      </HomeContainer>
    </main>
  );
}
