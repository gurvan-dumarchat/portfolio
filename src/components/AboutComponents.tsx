import profilepic from "@/public/img/IMG_4263.png";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <div>
      <h2>À propos</h2>
      <div>
        <p>
          Salut, moi c'est Gurvan, je suis étudiant en deuxième année de BUT
          Informatique à l'IUT de Bordeaux. Passioné de développement FullStack,
          j'ai eu l'occasion de travailler sur des projets webs ces deux
          dernières années en me dépassant pour résoudre tous les problèmes que
          j'ai pu rencontré. Je travaille également en tant que développeur
          freelance pour SecureFlow Initiative, une société fondée par des
          passionés.
        </p>
        <Image src={profilepic} alt="Profile picture"></Image>
      </div>
    </div>
  );
};
