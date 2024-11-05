import { ReactNode } from "react";

export const HeroTitle = () => {
  return (
    <div>
      <p>Bonjour, je m'appelle</p>
      <h1>
        Gurvan <span>Dumarchat</span>
      </h1>
      <p>
        Donner vie à vos applications, de l'ergonomie du front-end à la
        puissance du back-end.
      </p>
    </div>
  );
};
type ContactContainerProps = {
  children: ReactNode;
};
export const ContactContainer = ({ children }: ContactContainerProps) => {
  return <div>{children}</div>;
};
type ContactInformationProps = {
  children: ReactNode;
};
export const ContactInformation = ({ children }: ContactInformationProps) => {
  return <div>{children}</div>;
};
