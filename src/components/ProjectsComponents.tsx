import clang from "@/public/icons/arcticons--clanguage.svg";
import java from "@/public/icons/java.svg";
import js from "@/public/icons/js.svg";
import nextjs from "@/public/icons/next.svg";
import prisma from "@/public/icons/prisma.svg";
import python from "@/public/icons/python.svg";
import react from "@/public/icons/react.svg";
import algo from "@/public/img/algo.png";
import graph from "@/public/img/graph.png";
import graphS2 from "@/public/img/graphS2.png";
import lts from "@/public/img/letrucensucre.png";
import pixelwar from "@/public/img/pixelwar.png";
import stockfast from "@/public/img/stockfast.png";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { TechnoIcon } from "./TechnoComponents";
import styles from "./modules/ProjectsComponents.module.css";

const projects: Project[] = [
  {
    title: "StockFast",
    preview: stockfast,
    description: "Application de gestion logistique pour les TPE et PME",
    tags: [
      {
        icon: react,
        title: "React",
      },
      {
        icon: nextjs,
        title: "Next",
      },
      {
        icon: prisma,
        title: "Prisma",
      },
    ],
  },
  {
    title: "Le Truc en Sucre",
    preview: lts,
    description: "Site vitrine pour une boutique locale",
    tags: [
      {
        icon: react,
        title: "React",
      },
      {
        icon: nextjs,
        title: "Next",
      },
      {
        icon: prisma,
        title: "Prisma",
      },
    ],
  },
  {
    title: "IUT Pixel War",
    preview: pixelwar,
    description:
      "Développement d'une application front-end pour une compétition universitaire dans le style de la Reddit pixel war",
    tags: [
      {
        icon: js,
        title: "JavaScript",
      },
    ],
  },
  {
    title: "Visualisation de graphes",
    preview: graph,
    description:
      "Implémentation de la structure de graphes avec les algorithmes associés",
    tags: [
      {
        icon: java,
        title: "Java",
      },
    ],
  },
  {
    title: "Performance algorithmique",
    preview: algo,
    description:
      "Implémentation d'une structure de données et mesures de ses performances",
    tags: [
      {
        icon: clang,
        title: "C",
      },
      {
        icon: python,
        title: "Python",
      },
    ],
  },
  {
    title: "Générateur de graphique dynamique",
    preview: graphS2,
    description:
      "Générateur de graphique à partir de n'importe quelle donnée implémentée de la base et sous 4 formes différentes",
    tags: [
      {
        icon: python,
        title: "Python",
      },
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <div className={`${styles.container}`}>
      <h2>Projets</h2>
      <div className={`${styles.projectMapper}`}>
        {projects.map((project, index) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            preview={project.preview}
            tags={project.tags}
            key={index}
          ></ProjectCard>
        ))}
      </div>
    </div>
  );
};
type Project = {
  title: string;
  preview: StaticImport;
  description: string;
  tags: TechnoIcon[];
};

export const ProjectCard = ({ title, preview, description, tags }: Project) => {
  return (
    <div className={`${styles.projectCard}`}>
      <h3>{title}</h3>
      <div>
        <Image
          src={preview}
          alt={`${title} preview`}
          className={`${styles.previewImage}`}
        />
        <p>{description}</p>
      </div>
      <div className={`${styles.tagContainer}`}>
        {tags.map((tag, index) => (
          <TagIcon icon={tag.icon} title={tag.title} key={index}></TagIcon>
        ))}
      </div>
    </div>
  );
};

export const TagIcon = ({ icon, title }: TechnoIcon) => {
  return (
    <div className={`${styles.tag}`}>
      <Image src={icon} alt={`${title} icon`} />
      <p>{title}</p>
    </div>
  );
};
