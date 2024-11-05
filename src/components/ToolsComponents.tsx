import figma from "@/public/icons/devicon--figma.svg";
import vscode from "@/public/icons/devicon--vscode.svg";
import Docker from "@/public/icons/logos--docker-icon.svg";
import gitlab from "@/public/icons/logos--gitlab.svg";
import github from "@/public/icons/mdi--github.svg";
import postman from "@/public/icons/skill-icons--postman.svg";
import { TechnoIcon } from "./TechnoComponents";
const icons: TechnoIcon[] = [
  {
    icon: Docker,
    title: "Docker",
  },
  {
    icon: vscode,
    title: "Visual Studio Code",
  },
  {
    icon: github,
    title: "GitHub",
  },
  {
    icon: figma,
    title: "Figma",
  },
  {
    icon: gitlab,
    title: "GitLab",
  },
  {
    icon: postman,
    title: "Postman",
  },
];
export const ToolsSection = () => {
  return (
    <div>
      <h2>Tools and softwares</h2>
      <div>
        {icons.map((icon, index) => (
          <TechnoIcon
            icon={icon.icon}
            title={icon.title}
            key={index}
          ></TechnoIcon>
        ))}
      </div>
      <p>Gestion de version de projet avec Git</p>
      <p>Maintenance applicative et installation de services avec Docker</p>
    </div>
  );
};
