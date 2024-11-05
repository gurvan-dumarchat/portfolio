import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <div>
      <h2>Intéressé.e ? Contactez-moi !</h2>
      <div>
        <p>Ajoutez-moi sur Linkedin</p>
        <Link href="https://www.linkedin.com/in/gurvan-dumarchat-957434303/">
          <Linkedin></Linkedin>
          Mon Linkedin
        </Link>
      </div>
      <div>
        <p>Envoyer un mail</p>
        <Link href={"mailto:gurvandumarchat@gmail.com"}>
          <Mail></Mail>
          gurvandumarchat@gmail.com
        </Link>
      </div>
      <div>
        <p>Consulter mon GitHub</p>
        <Link href={"github.com/gurvan-dumarchat"}>
          <Github></Github>
          Github
        </Link>
      </div>
    </div>
  );
};
