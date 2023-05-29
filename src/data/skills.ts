export interface ISkill {
  image: string;
  name: string;
}

const skillListTools: ISkill[] = [
  {
    image: "vscode.svg",
    name: "VS Code",
  },
  {
    image: "git.svg",
    name: "Git",
  },
  {
    image: "github.svg",
    name: "GitHub",
  },
];

const skillListFrontend: ISkill[] = [
  {
    image: "html.svg",
    name: "HTML",
  },
  {
    image: "css.svg",
    name: "CSS",
  },
  {
    image: "styled-components.svg",
    name: "Styled-Components",
  },
  {
    image: "javascript.svg",
    name: "JavaScript",
  },
  {
    image: "typescript.svg",
    name: "TypeScript",
  },
  {
    image: "reactjs.svg",
    name: "React",
  },
  {
    image: "react-router.svg",
    name: "React Router",
  },
  {
    image: "redux.svg",
    name: "Redux",
  },
  {
    image: "material-ui.svg",
    name: "Material UI",
  },
  {
    image: "eslint.svg",
    name: "ESLint",
  },
];

const skillListBackend: ISkill[] = [
    {
      image: "nodejs.svg",
      name: "Node.js",
    },
    {
      image: "expressjs.svg",
      name: "Express.js",
    },
    {
      image: "mongodb.svg",
      name: "MongoDB",
    },
  ];

export default {skillListTools, skillListFrontend, skillListBackend};
